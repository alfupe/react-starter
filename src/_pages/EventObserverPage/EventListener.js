import React, { Component } from 'react';
import { AppContext } from '../../context/AppProvider';

export default class EventListener extends Component {
    state = {
        payload: null
    };

    static contextType = AppContext;

    componentDidMount() {
        this.listener = this.context.observer.subscribe('usersReceived', this.handleCustomEvent);
        this.listener.on('succeed', () => {
            console.log('usersReceived event callback was successfully executed')
        });
        this.listener.on('error', event => {
            console.log('usersReceived event callback has error:');
            console.log(event);
        });
    }

    componentWillUnmount() {
        this.listener.unsubscribe();
    }

    handleCustomEvent = payload => {
        this.setState({payload});
    };

    render() {
        return (
            <pre>{JSON.stringify(this.state.payload, null, 4)}</pre>
        );
    }
}