import defaultState from "../defaultState";
import { GET_USER_REQUEST, GET_USER_SUCCESS, USER_LOGOUT } from "./actionTypes";

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, isLoading: true };
    }

    case GET_USER_SUCCESS: {
      return { ...state, user: action.user, isLoading: false };
    }
    case USER_LOGOUT: {
      return { ...state, user: action.payload, isLoading: false };
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
