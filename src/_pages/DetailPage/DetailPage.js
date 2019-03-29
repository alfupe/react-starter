import React, { Component, Fragment } from 'react';

export default class DetailPage extends Component {
    idItem = this.props.match.params.idItem;

    render() {
        return (
            <Fragment>
                {this.idItem}
            </Fragment>
        );
    }
}