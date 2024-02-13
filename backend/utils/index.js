import Token from "../models/token.model.js"
import jwt from 'jsonwebtoken';
import {
    errorHandler
} from "./error.js";

export const generateToken = (payload) => {
    const accessToken = jwt.sign(payload, process.env.VITE_ACCESS_JWT_SECRET, {
        expiresIn: '1m' // 15 minutes
    });

    const refreshToken = jwt.sign(payload, process.env.VITE_REFRESH_JWT_SECRET, {
        expiresIn: '3m' // 15 days
    });

    return {
        accessToken,
        refreshToken
    };
};

export const saveToken = async (userId, token) => {
    try {
        const existingToken = await Token.findOne({
            user: userId
        });

        if (existingToken) {
            existingToken.refreshToken = token;
            return existingToken.save();
        }

        const newToken = new Token({
            user: userId,
            refreshToken: token
        });

        return newToken.save();
    } catch (error) {
        console.error('Error saving token:', error);
        throw error;
    }
};

export const validateAccessToken = async (token) => {
    try {
        const userData = jwt.verify(token, process.env.VITE_ACCESS_JWT_SECRET);
        return Promise.resolve(userData);
    } catch (err) {
        throw new Error(err);
    }
};

export const validateRefreshToken = async (token) => {
    try {
        const userData = jwt.verify(token, process.env.VITE_REFRESH_JWT_SECRET);
        return Promise.resolve(userData);
    } catch (err) {
        throw new Error(err);
    }
}