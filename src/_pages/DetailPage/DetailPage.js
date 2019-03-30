import React, { Component, Fragment } from 'react';
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm';
import { AppContext } from '../../context/AppProvider';

export default class DetailPage extends Component {
    state = {
        user: {}
    };

    idUser = this.props.match.params.idUser;

    static contextType = AppContext;

    componentDidMount() {
        this.findUser(this.idUser);
    }

    findUser(idUser) {
        this.context
            .services
            .user
            .findUser(idUser)
            .then(user => this.setState({user}));
    }

    render() {
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state.user, null, 4)}</pre>
                <SubscribeForm />
            </Fragment>
        );
    }
}