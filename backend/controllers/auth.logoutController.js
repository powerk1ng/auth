export const logOut = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies || !cookies.token) {
        return res.status(204).json({
            message: 'No content',
            success: false,
            statusCode: 204
        });
    }

    res.clearCookie('token', {
        httpOnly: true,
        secure: false,
    }).json({
        message: 'Cookie cleared successfully',
        success: true,
        statusCode: res.statusCode
    });
};