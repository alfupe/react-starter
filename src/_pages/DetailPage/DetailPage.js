import React, { Component, Fragment } from 'react';
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm';

export default class DetailPage extends Component {
    idItem = this.props.match.params.idItem;

    render() {
        return (
            <Fragment>
                {this.idItem}

                <SubscribeForm />
            </Fragment>
        );
    }
}