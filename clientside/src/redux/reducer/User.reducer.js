import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoadig: false , 
    isAuth: false,
    error: "",
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userLoginRequest:(state)=>{
            state.isLoading = true;
        },
        userLoginSuccess:(state,action)=>{
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        userLoginFailed:(state,action)=>{
            state.isLoading = false;
            state.isAuth = false;
            const {error:{message}} = action.payload
            state.error = message;
        },
        userLogout:(state)=>{
            state.isLoading = false;
            state.error = "";
            state.isAuth = false;
            state.token = ""
            console.log(state)
        },
        clearMessage: (state)=>{
            state.error = ''
            console.log('remove error')
        }
    }
})

export const {userLoginFailed , userLoginRequest , userLoginSuccess , userLogout , clearMessage } = userSlice.actions;
export default userSlice.reducer;