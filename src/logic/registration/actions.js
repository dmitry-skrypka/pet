import  {userService}  from '../../services';
import history from "../../history";
import {
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    DATA_UPDATE
} from "./actionTypes";
import Api from "../../helpers/api";

export function registerSubmit(payload) {
    // Saga
    return {
        type: REGISTER_SUBMIT,
        payload: payload
    };
}
export function dataUpdate(payload) {
    // Saga
    return {
        type: DATA_UPDATE,
        payload: payload
    };
}
export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
        }

}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload: {
            registerFeedback: {
                error: payload.error,
                message: payload.message
            }
        }
    }
}

export function register(user) {
    return dispatch => {
        // dispatch(request(user));
        Api.sendRequest('/auth', 'POST', user).then(function (response) {
            console.log(response.data)

        })
        .then(
                user => {
                    dispatch(registerSuccess(user));
                    console.log(user)
                    // dispatch(alertActions.success('Registration successful'));
                })
        //         error => {
        //             console.log(error)
        //             // dispatch(failure(error.toString()));
        //             // dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    // function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    // function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}