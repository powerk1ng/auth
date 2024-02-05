import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const refresh = async (req, res, next) => {
    const cookies = req.cookies;

    if (!cookies || !cookies.token) {
        return next(errorHandler(400, 'Unauthorized'));
    }

    const refresh_token = cookies.token;

    jwt.verify(
        refresh_token,
        process.env.VITE_REFRESH_JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "Forbidden"
                });
            }

            const user = await User.findOne({
                _id: decoded.id
            });

            if (!user) {
                return next(errorHandler(401, 'Unauthorized user'));
            }

            const access_token = jwt.sign({
                id: user._id,
                role: user.role,
            }, process.env.VITE_JWT_SECRET, {
                expiresIn: "1h"
            })

            res.json({
                access_token
            })
        }
    )
};