import defaultState from "../defaultState";
import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    DATA_UPDATE,
    LOGIN_REQUEST
} from './actionTypes';

export default (state = defaultState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST: {
            return {
                ...state,
                // isLoading: true
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        }

        case DATA_UPDATE: {
            return {
                ...state,
                ...action.payload,
                feedback: ''
            }
        }
        default: {
            return state;
        }
    }
}