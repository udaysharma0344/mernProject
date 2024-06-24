import axios from "axios";

export default login = async(email, password) => (dispactch) => {
    try {
        dispactch({
            type: "userLoginRequest",
        });
        const userLogin = await.post(/*api*/ , {email , password});
        if(!userLogin.success){
            throw new Error(userLogin.message);
        }
        dispactch({
            type: 'userLoginSuccess',
            payload: {
                user: userLogin.user,
                token: userLogin.token,
            }
        });
    } catch (error) {
        dispactch({
            type: "userLoginFailed",
            payload:{
                error,
            },
        });
    }
};