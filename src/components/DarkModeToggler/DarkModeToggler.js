import React, { Component } from 'react';
import { AppContext } from '../../context/AppProvider';

export default class DarkModeToggler extends Component {
    static contextType = AppContext;

    handleClick = () => {
        this.context.toggleDarkMode();
    };

    render() {
        return (
            <button onClick={this.handleClick}>Dark Mode: {this.context.darkMode ? 'active' : 'inactive'}</button>
        );
    }
}