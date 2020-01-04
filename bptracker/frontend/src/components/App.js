import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import Header from './layout/Header';
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
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={IntroPage} />
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));