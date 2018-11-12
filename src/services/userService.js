import Api from "../helpers/api"

export const userService = {

    register,

};


function register(user) {
    console.log("hello from register")
    // Api.sendRequest('/auth', 'POST', user).then(handleResponse)
    Api.sendRequest('/auth', 'POST', user).then(function (response) {
        return response.data

    })


}
function handleResponse(response) {
   console.log(response)
    return response
}