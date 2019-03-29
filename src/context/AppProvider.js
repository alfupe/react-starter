import React, { Component } from 'react';
import UserService from '../services/UserService';
import BaseService from '../services/BaseService';
import ProfileService from '../services/ProfileService';
import ProjectService from '../services/ProjectService';
import ImageService from '../services/ImageService';

export const AppContext = React.createContext({});

export default class AppProvider extends Component {
    state = {
        services: {
            base: new BaseService(),
            user: new UserService(),
            profile: new ProfileService(),
            project: new ProjectService(),
            image: new ImageService(),
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

export const withAppContext = Component => props => (
    <AppContext.Consumer>
        {state => <Component {...props} context={state} />}
    </AppContext.Consumer>
);