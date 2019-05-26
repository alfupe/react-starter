import React, { Component } from 'react';
import { withLayout } from '../../HOC/WithLayout';
import { AppContext } from '../../context/AppProvider';

class IndexedDBPage extends Component {
    state = {
        formData: this.setInitialFormData(),
        data: null
    };

    static contextType = AppContext;

    db = null;

    componentDidMount() {
        const request = this.initDB();
        request.onsuccess = event => {
            this.db = event.target.result;
            this.findAll(this.db);
        };
    }

    setInitialFormData() {
        return {
            name: '',
            age: 0
        }
    }

    initDB(dbName = 'SillyDB', objectStoreName = 'people', keyPath = 'key') {
        const request = window.indexedDB.open(dbName, 1);

        request.onupgradeneeded = event => {
            this.db = event.target.result;
            console.log('running onupgradeneeded');
            if (!this.db.objectStoreNames.contains(objectStoreName)) {
                return this.db.createObjectStore(objectStoreName, {keyPath});
            }
        };

        /*request.onsuccess = event => {
            console.log('running onsuccess');
            return event.target.result;
        };

        request.onerror = event => {
            console.log('onerror!');
            console.dir(event);
        };*/

        return request;
    }

    objectStoreExists(objectStoreName, db = this.db) {
        if (db.objectStoreNames.contains(objectStoreName)) {
            return true;
        } else {
            console.error(`ObjectStore “${objectStoreName}” doesn't exist`);

            return false;
        }
    }

    addItem(data, cb = () => {}, db = this.db, objectStoreName = 'people') {
        if (!this.objectStoreExists(objectStoreName, db)) return;

        const transaction = db.transaction([objectStoreName], 'readwrite');
        const store = transaction.objectStore(objectStoreName);
        const request = store.put(data);

        request.onerror = event => {
            console.error('Error', event.target.error.name);
        };

        request.onsuccess = event => {
            console.log('Registro insertado con éxito');
            cb();
        };

        // Equivalente a
        //https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
        /*db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = function(event) {
            alert("Name for SSN 444-44-4444 is " + event.target.result.name);
        };*/
    }

    findById(itemId, db, objectStoreName = 'people') {
        if (!this.objectStoreExists(objectStoreName, db)) return;

        const transaction = db.transaction([objectStoreName]);
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(itemId);

        request.onerror = event => {
            console.log('Error', event.target.error.name);
        };

        request.onsuccess = event => {
            //this.setState({data: [request.result]});
            alert(JSON.stringify(request.result, null, 4))
        };
    }

    findAll(db = this.db, objectStoreName = 'people') {
        if (!this.objectStoreExists(objectStoreName, db)) return;

        const objectStore = db.transaction(objectStoreName).objectStore(objectStoreName);

        let data = [];
        objectStore.openCursor().onsuccess = event => {
            const cursor = event.target.result;

            if (cursor) {
                data.push({...cursor.value});
                cursor.continue();
            }
            else {
                console.log('No more entries!');
            }

            this.setState({data});
        };
    }

    handleChange = event => {
        this.setState({
            formData: {
                name: event.target.value,
                age: Math.floor(Math.random() * 99) + 1,
                key: +new Date()
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const request = this.initDB();
        request.onsuccess = event => {
            //const db = event.target.result;
            this.addItem(this.state.formData, () => {
                this.findAll();
                this.setState({formData: this.setInitialFormData()});
            });
        };
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.formData.name}
                           onChange={this.handleChange}
                    />
                    <button type="submit">Guardar</button>
                </form>
                <hr/>
                <h1>Datos solicitados a la DB:</h1>
                {!!this.state.data && this.state.data.map(data => (
                    <div key={data.key} style={{marginBottom: 20}}>
                        <div>
                            <strong>Nombre:</strong> {data.name}
                        </div>
                        <div>
                            <strong>Edad:</strong> {data.age}
                        </div>
                        <div>
                            <strong>Id:</strong> {data.key}
                        </div>
                        <button onClick={event => {event.preventDefault(); this.findById(data.key, this.db);}}>
                            Ver detalles
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}
export default withLayout(IndexedDBPage);