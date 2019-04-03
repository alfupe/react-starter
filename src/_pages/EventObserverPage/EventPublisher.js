import React, { Component } from 'react';
import { AppContext } from '../../context/AppProvider';

export default class EventPublisher extends Component {
    static contextType = AppContext;

    componentDidMount() {
        this.findUsers();
    }

    findUsers() {
        this.context
            .services
            .user
            .findUsers()
            .then(users => this.context.observer.publish('usersReceived', users));
    }

    componentWillUnmount() {
        this.context.observer.unsubscribe('usersReceived');
    }

    render() {
        return <button onClick={event => this.findUsers()}>Find Users again</button>;
    }
}