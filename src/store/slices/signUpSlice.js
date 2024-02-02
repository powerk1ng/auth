import {
    createSlice
} from "@reduxjs/toolkit";
import {
    signUpAction
} from "../actions/singUpAction";
import {
    toast
} from "react-toastify";

const initialState = {
    isLoading: false,
    message: '',
    statusCode: 0,
    success: false,
}

const singUpSlice = createSlice({
    name: 'singUpSlice',
    initialState,
    reducers: {
        resetSignUpSlice: (state) =>
            state = initialState
    },

    extraReducers: builder =>
        builder
        .addCase(signUpAction.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(signUpAction.fulfilled, (state, {
            payload
        }) => {
            state.isLoading = false;
            state.message = payload.message
            state.success = payload.success
            state.statusCode = payload.statusCode

            toast.success(`${payload.message}`, {
                theme: "light",
                toastId: "toast",
            });
        })

        .addCase(signUpAction.rejected, (state, {
            payload
        }) => {
            state.isLoading = false;
            state.message = payload.message
            state.statusCode = payload.statusCode
            state.success = payload.success

            toast.error(`${payload.message}`, {
                theme: "light",
                toastId: "toast",
            });
        })
})

export const {
    resetSignUpSlice
} = singUpSlice.actions;
export default singUpSlice.reducer;