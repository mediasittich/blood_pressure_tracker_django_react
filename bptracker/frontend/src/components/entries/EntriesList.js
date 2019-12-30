import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getEntries, deleteEntry } from "../../actions/entries";

export class EntriesList extends Component {
    static propTypes = {
        entries: PropTypes.array.isRequired,
        getEntries: PropTypes.func.isRequired,
        deleteEntry: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getEntries();
    }

    // https://stackoverflow.com/questions/58634980/format-created-at-date-in-reactjs
    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

    dateTimeFormatter = new Intl.DateTimeFormat('de-DE', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'numeric',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric'
    });

    render() {
        return (
            <Fragment>
                <h2>Entries</h2>
                <div className="table-container">
                    <table className="table is-striped is-hoverable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Systolic</th>
                                <th>Diastolic</th>
                                <th>Pulse</th>
                                <th>Created at</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.entries.map(entry => (
                                <tr key={entry.id}>
                                    <td>{entry.id}</td>
                                    <td>{entry.systolic}</td>
                                    <td>{entry.diastolic}</td>
                                    <td>{entry.pulse}</td>
                                    <td>{this.dateTimeFormatter.format(new Date(entry.created_at))}</td>
                                    <td>
                                        <button onClick={this.props.deleteEntry.bind(this, entry.id)} className="button is-danger is-small">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    entries: state.entries.entries
});

export default connect(
    mapStateToProps,
    { getEntries, deleteEntry }
    )(EntriesList);
