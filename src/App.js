import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './assets/scss/main.scss';
import AppProvider from './context/AppProvider';

export default class App extends Component {
    render() {
        return (
            <AppProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </AppProvider>
        );
    }
}