import { userService } from "../../services";
import history from "../../history";
import {
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
    REGISTER_REQUEST,
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


export function register(user) {
  return dispatch => {
    dispatch(request());
    Api.sendRequest("/auth", "POST", user)
      .then(response => {

        if (response.status === 200) {
          dispatch(success(user));
          CookieTool.setTokens(response.data.token, response.data.exp);
          history.push(`/`);
        } else {
            console.log(response)
            dispatch(failure(response))
        }
      })
      .catch(error => {

        dispatch(failure(error));

      });
  };

  function request() {
    return { type: REGISTER_REQUEST };
  }
  function success(user) {
    return { type: REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return {
      type: REGISTER_FAILURE,
      payload: {
        feedback: {
          error: error.error,
          message: error.message
        }
      }
    };
  }
}
