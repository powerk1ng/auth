import {
    Schema,
    model
} from 'mongoose';

const TokenSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    }
})

const Token = model("Token", TokenSchema)
export default Token