import {
    GET_ENTRIES,
    DELETE_ENTRY,
    ADD_ENTRY,
    LOGOUT_SUCCESS
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
        case ADD_ENTRY:
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                entries: []
            }
        default:
            return state;
    }
}