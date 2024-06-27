import {configureStore} from '@reduxjs/toolkit';
import UserReducer from "./reducer/User.reducer";
import thunk from "thunk";
// import { thunk  } from 'redux-thunk';
 const store = configureStore({
    reducer:{
        User: UserReducer,
    },
    
    middleware: (getdefaultMiddleware) => 
        getdefaultMiddleware({
            thunk,
        }),    
});

export default store

