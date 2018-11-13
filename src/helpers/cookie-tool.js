// import cookies from "browser-cookies";
import cookies from "js-cookie";
class CookieTool {

    setTokens(accessToken,  accessExpiryDate) {
        cookies.set('accessToken', accessToken, {
            expires: accessExpiryDate
        });
        // cookies.set("refreshToken", refreshToken);
        // console.log(cookies.getTokens())
    }

    getTokens() {
        return {
            accessToken: cookies.get("accessToken")
            // refreshToken: cookies.get("refreshToken")
        };
    }

    getAccessToken() {
        return cookies.get("accessToken");
    }

    getRefreshToken() {
        return cookies.get("refreshToken");
    }

    clearTokens() {
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
    }
}

export default new CookieTool();