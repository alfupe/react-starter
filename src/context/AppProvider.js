import React, { Component } from 'react';
import UserService from '../services/UserService';
import BaseService from '../services/BaseService';

export const AppContext = React.createContext({});

export default class AppProvider extends Component {
    state = {
        services: {
            base: new BaseService(),
            user: new UserService()
        }
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}