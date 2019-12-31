import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        const { username, password } = this.state;
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
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login;
