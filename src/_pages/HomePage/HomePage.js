import React, { Component } from 'react';
import List from '../../components/List/List';

export default class HomePage extends Component {
    numbers = [1, 2, 3, 4, 5];

    render() {
        return <List numbers={this.numbers} />;
    }
}