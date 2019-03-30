import React from 'react';
import Layout from '../components/Layout/Layout';

export const withLayout = Component => props => (
    <Layout {...props}>
        <Component {...props} />
    </Layout>
);