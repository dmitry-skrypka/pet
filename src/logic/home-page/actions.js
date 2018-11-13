import Api from "../../helpers/api";
import CookieTool from "../../helpers/cookie-tool";

import {
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  USER_LOGOUT
} from "./actionTypes";

export function UserLogetOut(payload) {
  return {
    type: USER_LOGOUT,
    payload: payload
  };
}
export function getUser() {
  console.log('hello')
  return dispatch => {

    if (CookieTool.getAccessToken()) {
        dispatch(requestUSER())

      Api.sendAuthRequest("/user", "GET")
        .then(response => {
          if (response.status === 200) {
            dispatch(success(response.data));
          }
        })
        .catch(error => {
          dispatch(failure(error));
        });
    }
  };
  function requestUSER() {
    return { type: GET_USER_REQUEST };
  }
  function success(user) {
    return { type: GET_USER_SUCCESS, user };
  }
  function failure(error) {
    return {
      type: GET_USER_FAILURE,
      payload: {
        registerFeedback: {
          error: error.error,
          message: error.message
        }
      }
    };
  }
}

export function LogOut() {
  return dispatch => {
    dispatch(UserLogetOut({}));
    CookieTool.clearTokens();
  };
}
