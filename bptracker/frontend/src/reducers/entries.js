import { GET_ENTRIES } from '../actions/types';

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
        default:
            return state;
    }
}