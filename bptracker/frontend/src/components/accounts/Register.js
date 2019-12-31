import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <h2>Register</h2>
                <from onSubmit={this.onSubmit}>
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
                    <div class="control">
                        <button className="button is-primary">Register</button>
                    </div>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </from>
            </div>
        )
    }
}

export default Register
