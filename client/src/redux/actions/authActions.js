import axios from "axios";
import { AUTH_URL } from "../../utils/urlProperties";

export const loginUserAction = async (loginData) => {
   await axios.post(AUTH_URL, loginData)
   .then(res => {
        const { token } = res.data;
        sessionStorage.setItem("token", token);
   })
   .catch(e => {
        console.error("Error occured while logging user", e);
        throw new Error("Invalid credentials!");
   })
};

export const logoutUserAction = () => {
    sessionStorage.removeItem("token");
}
