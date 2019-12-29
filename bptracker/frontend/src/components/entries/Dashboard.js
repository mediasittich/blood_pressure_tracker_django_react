import React, { Fragment } from 'react';

import Form from './Form';
import EntriesList from './EntriesList';

const Dashboard = () => {
    return (
        <Fragment>
            <Form />
            <EntriesList />
        </Fragment>
    );
}

export default Dashboard;
