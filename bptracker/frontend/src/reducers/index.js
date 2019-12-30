import { combineReducers } from "redux";
import entries from './entries';
import errors from './errors';

export default combineReducers({
    entries,
    errors
});