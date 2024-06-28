import {configureStore} from "@reduxjs/toolkit"
import thunk from 'thunk'
import UserReducer from "./reducer/User.reducer";

const store = configureStore({
    reducer:{
        user: UserReducer
    },
    middleware:(getdefaultMiddleware)=> getdefaultMiddleware({thunk})
})

export default store;