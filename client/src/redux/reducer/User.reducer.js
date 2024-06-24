import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false,
    error: "",
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers:{
        userLoginRequest: (state)=> {
            state.loading = true;
        },
        userLoginSuccess: (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        userLoginFailed: (state, action) =>  {
            state.loading = false;
            state.isAuth = false;
            state.error = action.payload.error;
        },
        clearMessage: (state) => {
            state.error = "";
        },
    },
});

export const { userLoginFailed , userLoginSuccess , userLoginRequest} = userSlice.action;

export default userSlice ;