import { combineReducers } from "redux";
import entries from './entries';
import errors from './errors';
import auth from './auth';

export default combineReducers({
    entries,
    errors,
    auth
});