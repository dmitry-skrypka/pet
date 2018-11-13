import homepage from './home-page/reducer'
import registration from './registration/reducer'
import login from './login/reducer'
import { combineReducers } from "redux";

export default combineReducers({
homepage,
    registration,
    login
});