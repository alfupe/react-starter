import React, { Component } from 'react';
import { withLayout } from '../../HOC/WithLayout';
import { AppContext } from '../../context/AppProvider';
import EventPublisher from './EventPublisher';
import EventListener from './EventListener';

class EventObserverPage extends Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <EventPublisher />
                <EventListener />
                <pre>{JSON.stringify(this.context, null, 4)}</pre>
            </div>
        );
    }
}
export default withLayout(EventObserverPage);