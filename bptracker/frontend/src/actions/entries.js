// All HTTP requests here
import axios from "axios";

import {
    GET_ENTRIES,
    DELETE_ENTRY
} from './types';

// GET ENTRIES
export const getEntries = () => dispatch => {
    axios
        .get('/api/entries/')
        .then(res => {
            dispatch({
                type: GET_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE ENTRY
export const deleteEntry = (id) => dispatch => {
    axios
        .delete(`/api/entries/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_ENTRY,
                payload: id
            });
        })
        .catch(err => console.log(err));
};