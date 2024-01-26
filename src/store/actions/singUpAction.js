import {
    configs
} from "@/api/config"
import {
    fetchData
} from "@/api/requests"
import {
    createAsyncThunk
} from "@reduxjs/toolkit";

const {
    endpoint
} = configs;

export const signUpAction = createAsyncThunk(
    'singUpSlice',
    async (values, {
        rejectWithValue
    }) => {
        try {
            return await fetchData(`${endpoint.auth.signUp}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

        } catch (error) {
            console.log('error', error);

            return rejectWithValue({
                status: error.statusCode,
                message: error.message,
                success: error.success,
            });
        }
    }
);