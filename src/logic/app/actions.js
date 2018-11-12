import {
    GET_CLIENT_INFO,

} from "./actionTypes";

export function getClientsInfo(payload) {
    return {
        type: GET_CLIENT_INFO,
        payload
    };


}