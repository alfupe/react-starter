import React, { Component, Fragment } from 'react';
import './assets/scss/main.scss';
import List from './components/List/List';

export default class App extends Component {
    state = {
        selectedNumber: '?'
    };

    numbers = [1, 2, 3, 4, 5];

    updateNumber = number => {
        this.setState({selectedNumber: number}, () => this.forceUpdate());
    };

    render() {
        return (
            // We need always a parent element
            <Fragment>
                <h1>Selected: ({this.state.selectedNumber})</h1>
                <List numbers={this.numbers}
                      onNumberSelected={this.updateNumber}
                />
            </Fragment>
        );
    }
}