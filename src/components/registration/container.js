import {
    register,
    // registerSubmit,
    dataUpdate,
} from "../../logic/registration/actions";

export function mapStateToProps(state) {
    return {
        ...state.registration
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        // getData(data) {
        //     dispatch(getClientsInfo(data));
        // },
        onSubmit(user) {
            // dispatch(registerSubmit(user));
            dispatch(register(user))
        },
        onInputChange(data) {
            dispatch(dataUpdate(data));
        }
    };
}