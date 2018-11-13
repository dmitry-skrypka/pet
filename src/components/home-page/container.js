import {

    getUser,
    LogOut,

} from "../../logic/home-page/actions";

export function mapStateToProps(state) {
    return {
        ...state.homepage
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUser() {
            dispatch(getUser());
        },
        LogOut(){
            dispatch(LogOut());
        }
    };
}