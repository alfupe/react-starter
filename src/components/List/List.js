import React, { Component } from 'react';
import './list.scss';
import Item from './Item';

export default class List extends Component {
    render() {
        return (
            <div className="list">
                {this.props.users.length &&
                this.props.users.map(user => (
                    <Item key={user.id}
                          user={user}
                    />
                ))}
                <pre>{JSON.stringify(this.props.users, null, 4)}</pre>
            </div>
        );
    }
}