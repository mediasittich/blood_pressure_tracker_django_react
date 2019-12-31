import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div>
                <span>
                    <strong>
                        { user ? `Welcome back ${user.username}` : '' }
                    </strong>
                </span>
                <button onClick={this.props.logout} className="button is-primary">
                    Logout
                </button>
            </div>
        );
        const guestLinks = (
            <div className="buttons">
                <Link to="/register" className="button is-primary">
                    <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-primary">
                    Log in
                </Link>
            </div>
        );

        return (
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <h2>BPTracker</h2>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            { isAuthenticated ? authLinks : guestLinks }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Header);
