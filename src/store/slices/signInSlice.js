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
    data: ""
}

const singInSlice = createSlice({
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
            state.data = payload.data;
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

            toast.error()
        })
})

export default singInSlice.reducer;