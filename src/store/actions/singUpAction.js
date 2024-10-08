import { configs } from "@/api/config"
import { generalPost } from "@/api/requests"
import { createAsyncThunk } from "@reduxjs/toolkit";

const { endpoint } = configs;

export const signUpAction = createAsyncThunk(
    'singUpSlice',
    async (values, { rejectWithValue }) => {
        try {
            return await generalPost(endpoint.auth.signUp, values)
        } catch (error) {
            return rejectWithValue({
                status: error.statusCode,
                message: error.message,
                success: error.success,
            });
        }
    }
);