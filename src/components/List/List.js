import React, { Component } from 'react';
import './list.scss';
import Item from './Item';
import PropTypes from 'prop-types';

export default class List extends Component {
    static defaultProps = {
        onNumberSelected: () => {}
    };

    static propTypes = {
        numbers: PropTypes.arrayOf(PropTypes.number).isRequired
    };

    render() {
        return (
            <div className="list">
                {this.props.numbers.map(number => (
                    <Item key={number}
                          number={number}
                          isEven={number % 2 === 0}
                          onNumberSelected={this.props.onNumberSelected}
                    />
                ))}
            </div>
        );
    }
}