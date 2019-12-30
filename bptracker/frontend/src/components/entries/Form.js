import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addEntry } from "../../actions/entries";

export class Form extends Component {
    state = {
        systolic: null,
        diastolic: null,
        pulse: null,
        // created_at: ''
    };

    static propTypes = {
        addEntry: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = e => {
        e.preventDefault();
        const { systolic, diastolic, pulse } = this.state;
        const entry = { systolic, diastolic, pulse };
        this.props.addEntry(entry);
    };

    render() {
        const { systolic, diastolic, pulse, created_at } = this.state;
        return (
            <div>
                <h2>Add Entry</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="label">Systolic</label>
                        <div className="control">
                            <input
                            className="input"
                            type="number"
                            placeholder="e.g 110"
                            name="systolic"
                            onChange={this.onChange}
                            value={systolic}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Diastolic</label>
                        <div className="control">
                            <input
                            className="input"
                            type="number"
                            placeholder="e.g 86"
                            name="diastolic"
                            onChange={this.onChange}
                            value={diastolic}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Pulse</label>
                        <div className="control">
                            <input
                            className="input"
                            type="number"
                            placeholder="e.g 76"
                            name="pulse"
                            onChange={this.onChange}
                            value={pulse}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Date and Time</label>
                        <div className="control">
                            <input
                            className="input"
                            type="datetime-local"
                            placeholder="e.g 76"
                            name="created_at"
                            onChange={this.onChange}
                            value={created_at}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success">
                                Submit
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addEntry })(Form);
