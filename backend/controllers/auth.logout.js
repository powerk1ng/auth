import Token from "../models/token.model.js";

export const logOut = async (req, res) => {
    const {
        refreshToken
    } = req.cookies;

    if (!refreshToken) {
        return res.status(204).json({
            message: 'No content',
            success: false,
            statusCode: 204
        });
    }

    const tokenData = await Token.deleteOne({
        refreshToken: refreshToken
    })

    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
    }).json({
        message: 'Cookie cleared successfully',
        success: true,
        statusCode: res.statusCode
    });

    return tokenData;
};
