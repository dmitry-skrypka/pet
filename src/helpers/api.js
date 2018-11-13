import axios from "axios";
import cookies from "./cookie-tool";
import { baseUrl } from "./config";
// TODO: implement servers url


class Api {
    constructor() {
        this.adapter = axios.create({
            baseURL: baseUrl
        });
    }

    sendAuthRequest = (url, type, payload) => {
        return this.checkAccessToken().then(() =>
            this.adapter.request({
                url: url, // url
                method: type.toUpperCase(), // 'get' -> 'GET'
                data: payload, // body
                headers: {
                    ...this.getAuthHeader()
                }
            })

        ).catch(this.handleApiError);
    }

    sendRequest = (url, type, payload) => {
        return this.adapter.request({
            url: url, // url
            method: type.toUpperCase(), // 'get' -> 'GET'
            data: payload // body
        }).catch(this.handleApiError);
    }

    getAuthHeader() {
        const accessToken = cookies.getAccessToken();
        if (!accessToken) {
            return {};
        }

        return {
            Authorization: `Bearer ${accessToken}`
        };
    }

    checkAccessToken() {
        const accessToken = cookies.getAccessToken();
        if (!accessToken) {
            return console.log('token is dead');
        }

        return Promise.resolve();
    }


    handleApiError(err) {
        if (err.response && err.response.data) {
            console.log(err.response.data.error)
            return Promise.reject(new Error(err.response.data.error))
        }

        return Promise.reject(new Error(err.response.data.error));
    }
}

export default new Api();