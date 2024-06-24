import {configureStore} from '@reduxjs/toolkit'
import UserReducer from "./reducer/User.reducer"
import thunk from "redux-thunk"
export const store = configureStore({
    reducer:{
        User: UserReducer,
    },
    middleware: (getdefaultMiddleware) => 
        getdefaultMiddleware({
            thunk,
        }),
});