import axios from "axios";
import { userLoginFailed,userLoginRequest , userLoginSuccess } from "../reducer/User.reducer";

export const login = (email , password) => async (dispatch)=>{
    try{
        dispatch({
         type: userLoginRequest
        });
       
       
       
       const {data} = await axios.post("http://localhost:8080/api/v1/user/singin", { email , password })
      console.log(data.code)
         
        if(!data.success){
        console.log(data.message)
         throw new Error(data.message)
        }
        dispatch({
         type: userLoginSuccess,
         payload:{
             user: data.user,
             token:data.token,
         }
        })
 }catch(error){
     dispatch({
         type: userLoginFailed,
         payload:{
             error
         }
     })
 }
}