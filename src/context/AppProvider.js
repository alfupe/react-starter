import React, { Component } from 'react';
import UserService from '../services/UserService';
import BaseService from '../services/BaseService';
import ReactObserver from 'react-event-observer';

export const AppContext = React.createContext({});

export default class AppProvider extends Component {
    state = {
        services: {
            base: new BaseService(),
            user: new UserService()
        },
        darkMode: false,
        observer: ReactObserver()
    };

    toggleDarkMode = () => {
        this.setState({darkMode: !this.state.darkMode});
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode');
    };

    providedFunctions() {
        return {
            toggleDarkMode: () => this.toggleDarkMode()
        }
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.providedFunctions()}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}