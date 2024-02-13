import {
    errorHandler
} from "../utils/error.js";
import Token from "../models/token.model.js";
import {
    generateToken,
    saveToken,
    validateRefreshToken
} from "../utils/index.js";
import User from "../models/user.model.js";


export const refresh = async (req, res, next) => {
    try {
        const {
            refreshToken
        } = req.cookies;

        if (!refreshToken) {
            return next(errorHandler(401, "Unauthorized"))
        }

        try {
            const userData = await validateRefreshToken(refreshToken);
            const validId = userData.id;

            const TokenModel = await Token.findOne({
                refreshToken
            })

            const tokens = generateToken({
                id: validId
            });

            if (!TokenModel || !userData) {
                return next(errorHandler(401, "Unauthorized"))
            }

            await saveToken(validId, tokens.refreshToken);

            res.json({
                success: true,
                message: "Refresh was done successfully",
                statusCode: 200,
                data: {
                    user: validId,
                    tokens
                }
            });

        } catch (error) {
            console.log('error catch:', error)
            return next(errorHandler(401, 'error'))
        }
    } catch (error) {
        console.log(error)
    }
}