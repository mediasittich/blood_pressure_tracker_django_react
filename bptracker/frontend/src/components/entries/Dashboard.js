import React, { Fragment } from 'react';

import Header from '../layout/Header';
import Form from './Form';
import EntriesList from './EntriesList';
import NavBar from '../layout/NavBar';

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Form />
            <EntriesList />
        </Fragment>
    );
}

export default Dashboard;
