import defaultState from "../defaultState";
import {
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    DATA_UPDATE
} from './actionTypes';


export default (state = defaultState, action) => {
    switch (action.type) {

        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }


        case REGISTER_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        }
        case REGISTER_FAILURE: {
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