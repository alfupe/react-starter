import React, { Component } from 'react';
import './assets/scss/main.scss';

export default class App extends Component {
    state = {
        selectedNumber: null
    };

    numbers = [1, 2, 3, 4, 5];

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(number, event) {
        if (event) event.preventDefault();

        this.setState({selectedNumber: number}, () => this.forceUpdate());
    }

    render() {
        return (
            // We need always a parent element
            <div>
                <h1>Inperative and wrong way: ({this.hidden && this.hidden.value})</h1>
                <ul className="list">
                    {this.numbers.map(number => {
                        const isEven = number % 2 === 0;

                        return (
                            <li key={number}
                                className={`list__item ${isEven ? 'list__item--even' : 'list__item--odd'}`}
                                onClick={event => this.handleClick(number, event)}>
                                {`${number} (${isEven ? 'even' : 'odd'})`}
                            </li>
                        );
                    })}
                </ul>
                <input ref={ref => this.hidden = ref}
                       type="hidden"
                       value={this.state.selectedNumber}
                />
            </div>
        );
    }
}