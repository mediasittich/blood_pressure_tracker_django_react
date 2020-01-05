import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import IntroPage from './layout/IntroPage';
import Dashboard from './entries/Dashboard';
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/" component={IntroPage} />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);