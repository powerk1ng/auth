import {
    createSlice
} from "@reduxjs/toolkit";
import {
    logoutAction
} from "../actions/logoutAction";


const initialState = {
    isLoading: false,
    message: '',
    statusCode: 0,
    success: false,
}

const logoutSlice = createSlice({
    name: 'logoutSlice',
    initialState,
    reducers: {
        resetLogoutSliceSlice: (state) =>
            state = initialState
    },

    extraReducers: builder =>
        builder
        .addCase(logoutAction.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(logoutAction.fulfilled, (state, {
            payload
        }) => {
            state.isLoading = false;
            state.message = payload.message
            state.success = payload.success
            state.statusCode = payload.statusCode

            localStorage.clear();
        })

        .addCase(logoutAction.rejected, (state, {
            payload
        }) => {
            console.log('payload', payload);
            state.isLoading = false;
            state.message = payload.message
            state.success = payload.success
            state.statusCode = payload.statusCode
        })
})

export const {
    resetLogOutSlice
} = logoutSlice.actions;
export default logoutSlice.reducer;