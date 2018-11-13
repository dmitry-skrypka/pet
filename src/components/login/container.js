import {
    login,

    dataUpdate,
} from "../../logic/login/actions";

export function mapStateToProps(state) {
    return {
        ...state.registration
    };
}

export function mapDispatchToProps(dispatch) {
    return {

        onSubmit(user) {

            dispatch(login(user))
        },
        onInputChange(data) {
            dispatch(dataUpdate(data));
        }
    };
}