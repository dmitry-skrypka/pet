import defaultState from "../defaultState";
import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    DATA_UPDATE
} from './actionTypes';

export default (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case DATA_UPDATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}