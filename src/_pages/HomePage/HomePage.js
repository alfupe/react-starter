import React, { Component, Fragment } from 'react';
import List from '../../components/List/List';
import DarkModeToggler from '../../components/DarkModeToggler/DarkModeToggler';
import { AppContext } from '../../context/AppProvider';

export default class HomePage extends Component {
    state = {
        users: []
    };

    static contextType = AppContext;

    componentDidMount() {
        this.findUsers();
    }

    findUsers() {
        this.context
            .services
            .user
            .findUsers()
            .then(users => this.setState({users}));
    }

    render() {
        return <Fragment>
            <DarkModeToggler />
            <List users={this.state.users} />
        </Fragment>
    }
}