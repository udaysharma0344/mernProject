import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    isAuth: false,
    error: "",
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducer:{
        userLoginRequest: (state)=> {
            state.isLoading = true;
        },
        userLoginSuccess: (state, action) =>{
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        userLoginFailed: (state, action) =>  {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action.payload.error;
        },
        clearMessage: (state) => {
            state.error = "";
        },
    },
});

export const { userLoginFailed , userLoginSuccess , userLoginRequest, clearMessage} = userSlice.actions;

export default userSlice.reducer ;