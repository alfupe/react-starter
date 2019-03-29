import React, { Component, Fragment } from 'react';

export default class SubscribeForm extends Component {
    state = {
        formData: {
            email: ''
        }
    };

    handleChange = event => {
        this.setState({formData: {...this.state.formData, [event.target.name]: event.target.value}});
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log('submit', this.state.formData);
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email"
                               name="email"
                               className="form-control"
                               required
                               value={this.state.formData.email}
                               onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" disabled={!this.state.formData.email}>Subscribe</button>
                </form>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </Fragment>
        );
    }
}