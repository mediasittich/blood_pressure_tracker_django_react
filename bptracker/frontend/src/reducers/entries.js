import {
    GET_ENTRIES,
    DELETE_ENTRY
} from '../actions/types';

const initialState = {
    entries: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ENTRIES:
            return {
                ...state,
                entries: action.payload
            }
        case DELETE_ENTRY:
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload)
            }
        default:
            return state;
    }
}