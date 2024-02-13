import {
    createAsyncThunk
} from "@reduxjs/toolkit"
import {
    configs
} from "@/api/config";
import {
    generalPost
} from "@/api/requests";

const {
    endpoint
} = configs;

export const logoutAction = createAsyncThunk('logoutSlice', async (_, {
    rejectWithValue
}) => {
    try {
        return generalPost(endpoint.auth.logOut);
    } catch (error) {
        console.log(error);

        return rejectWithValue({
            status: error.statusCode,
            message: error.message,
            success: error.success,
        });
    }
})