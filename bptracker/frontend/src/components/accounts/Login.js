import React, { Component } from 'react';
import { Link as RouterLink , Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from "../../actions/auth";

import LoginForm from './LoginForm';
export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/dashboard" />
        }
        const { username, password } = this.state;
        return (
            <div>
                <div>
                <h2>Sign In</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Text input"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Text input"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary">Login</button>
                    </div>
                    <p>
                        Don't have an account? <RouterLink to="/register">Register</RouterLink>
                    </p>
                </form>
            </div>

                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
