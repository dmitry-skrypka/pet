
import history from "../../history";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  DATA_UPDATE
} from "./actionTypes";
import Api from "../../helpers/api";
import CookieTool from "../../helpers/cookie-tool";

export function dataUpdate(payload) {
  return {
    type: DATA_UPDATE,
    payload: payload
  };
}

export function login(user) {
  return dispatch => {
    dispatch(request());
    Api.sendRequest("/login", "POST", user)
      .then(response => {
        if (response.status === 200) {
          dispatch(success(user));
          CookieTool.setTokens(response.data.token, response.data.exp);
          history.push(`/`);
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: LOGIN_REQUEST };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return {
      type: LOGIN_FAILURE,
      payload: {
        feedback: {
          error: error.error,
          message: error.message
        }
      }
    };
  }
}
