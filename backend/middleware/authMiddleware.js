import {
    validateAccessToken
} from '../utils/index.js';
import {
    errorHandler
} from '../utils/error.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization || req.headers.Authorization;


        if (!authorizationHeader) {
            return next(errorHandler(401, err))
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            console.log('if accessToken failed');
            return next(errorHandler(401, err));
        }

        try {
            const userData = await validateAccessToken(accessToken)
            req.user = userData;
            next();

        } catch (error) {
            console.log('error catch:', error)
            return next(errorHandler(401, 'Unauthorized'))
        }


    } catch (err) {
        return next(errorHandler(401, err));
    }

}