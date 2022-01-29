import { combineReducers } from "redux";
import {requestsReducer} from 'redux-requests';
import app from './app';

export default combineReducers({
    requests: requestsReducer,
    app
})