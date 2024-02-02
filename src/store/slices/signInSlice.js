import {
    createSlice
} from "@reduxjs/toolkit";
import {
    signInAction
} from "../actions/singInAction";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    success: false,
    statusCode: "",
    message: "",
    currentUser: ""
}

export const singInSlice = createSlice({
    name: "signInSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
        .addCase(signInAction.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(signInAction.fulfilled, (state, {
            payload
        }) => {
            state.isLoading = false;
            state.currentUser = payload.currentUser;
            state.success = payload.success;
            state.message = payload.message;
            state.statusCode = payload.statusCode;
        })
        .addCase(signInAction.rejected, (state, {
            payload
        }) => {
            state.isLoading = false;
            state.message = payload.message
            state.statusCode = payload.statusCode
            state.success = payload.success

            toast.error(payload.message, {
                theme: "light",
                toastId: 'toast'
            })
        })
})

export default singInSlice.reducer;