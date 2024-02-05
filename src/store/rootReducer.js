import { combineReducers } from "@reduxjs/toolkit";
import singUpReducer from './slices/signUpSlice';
import singInReducer from './slices/signInSlice';
import logoutReducer from './slices/logoutSlice';

export const rootReducer = combineReducers({
    signIn: singInReducer,  
    singUp: singUpReducer,
    logout: logoutReducer,
})