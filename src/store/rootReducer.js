import { combineReducers } from "@reduxjs/toolkit";
import singUpReducer from './slices/signUpSlice';

export const rootReducer = combineReducers({
    singUpReducer,
})