import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <DarkModeToggler />
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>

                </footer>
            </Fragment>
        );
    }
}