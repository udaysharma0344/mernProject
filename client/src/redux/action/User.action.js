import axios from "axios";
import { userLoginFailed, userLoginRequest, userLoginSuccess } from "../reducer/User.reducer";

export const login = (email, password) => async (dispactch) => {
    try {
        dispactch({
            type: userLoginRequest,
        });


        const userLogin = await axios.post("http://localhost:8080/api/v1/user/singin" , {email , password});
        if(!userLogin.data.success){
            throw new Error(userLogin.data.message);
        }
        dispactch({
            type: userLoginSuccess,
            payload: {
                user: userLogin.data.user,
                token: userLogin.data.token,
            }
        });
    } catch (error) {
        dispactch({
            type: userLoginFailed,
            payload:{
                error,
            },
        });
    }
};