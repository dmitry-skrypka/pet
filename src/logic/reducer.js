import app from './app/reducer'
import registration from './registration/reducer'
import { combineReducers } from "redux";

export default combineReducers({
app,
    registration
});