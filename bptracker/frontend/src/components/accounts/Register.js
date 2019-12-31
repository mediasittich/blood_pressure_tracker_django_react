import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { register } from "../../actions/auth";

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        // Check if passwords match
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            const newUser = {
                username,
                email,
                password
            };
            this.props.register(newUser);
        }
    };

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <h2>Register</h2>
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
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={this.onChange}
                                value={email}
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
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Text input"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary">Register</button>
                    </div>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { register }
)(Register);
