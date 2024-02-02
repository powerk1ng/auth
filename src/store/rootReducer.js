import { combineReducers } from "@reduxjs/toolkit";
import singUpReducer from './slices/signUpSlice';
import singInReducer from './slices/signInSlice';

export const rootReducer = combineReducers({
    signIn: singInReducer,  
    singUp: singUpReducer,
})