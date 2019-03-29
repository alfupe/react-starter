import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../_pages/HomePage/HomePage';
import Error404Page from '../_pages/Error404Page/Error404Page';
import DetailPage from '../_pages/DetailPage/DetailPage';

export default () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:idItem" exact component={DetailPage} />
        <Route component={Error404Page} />
    </Switch>
);