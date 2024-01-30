import { configs } from "@/api/config";
import { generalPost } from "@/api/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { endpoint } = configs;

export const signInAction = createAsyncThunk(
    'signInSlice',
    async (values, { rejectWithValue }) => {
        try {
            return await generalPost(endpoint.auth.signIn, values); 
        } catch (error) {
            return rejectWithValue({
                status: error.statusCode,
                message: error.message,
                success: error.success,
            })
        }
    }
)