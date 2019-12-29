// All HTTP requests here
import axios from "axios";

import { GET_ENTRIES } from './types';

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
}