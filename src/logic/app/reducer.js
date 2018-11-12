import defaultState from "../defaultState";
import {
    GET_CLIENT_INFO,

} from "./actionTypes";

function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CLIENT_INFO: {
            return {
                ...state,
                data: action.payload,
                data_to_render: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export default rootReducer;