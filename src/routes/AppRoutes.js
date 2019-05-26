import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../_pages/HomePage/HomePage';
import Error404Page from '../_pages/Error404Page/Error404Page';
import DetailPage from '../_pages/DetailPage/DetailPage';
import EventObserverPage from '../_pages/EventObserverPage/EventObserverPage';
import IndexedDBPage from '../_pages/IndexedDBPage/IndexedDBPage';

export default () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:idUser" exact component={DetailPage} />
        <Route path="/event-observer" exact component={EventObserverPage} />
        <Route path="/indexed-db" exact component={IndexedDBPage} />
        <Route component={Error404Page} />
    </Switch>
);