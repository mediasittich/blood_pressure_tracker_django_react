// All HTTP requests here
import axios from "axios";

import {
    GET_ENTRIES,
    DELETE_ENTRY,
    ADD_ENTRY
} from './types';

import { returnErrors } from "./errors";
import { tokenConfig } from './auth';

// GET ENTRIES
export const getEntries = () => (dispatch, getState) => {
    axios
        .get('/api/entries/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE ENTRY
export const deleteEntry = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/entries/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_ENTRY,
                payload: id
            });
        })
        .catch(err => console.log(err));
};
// ADD ENTRY
export const addEntry = (entry) => (dispatch, getState) => {
    axios
        .post(`/api/entries/`, entry, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_ENTRY,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};