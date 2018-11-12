import {
    getClientsInfo,
    selectedClientUpdate,
    dataUpdate
} from "../../logic/app/actions";

export function mapStateToProps(state) {
    return {
        ...state.app
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getData(data) {
            dispatch(getClientsInfo(data));
        },
        onSelect(client) {
            dispatch(selectedClientUpdate(client));
        },
        onInputChange(data) {
            dispatch(dataUpdate(data));
        }
    };
}