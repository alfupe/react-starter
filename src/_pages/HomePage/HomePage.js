import React, { Component, Fragment } from 'react';
import List from '../../components/List/List';
import { AppContext } from '../../context/AppProvider';
import { withLayout } from '../../HOC/WithLayout';

class HomePage extends Component {
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
        return <List users={this.state.users} />
    }
}
export default withLayout(HomePage);