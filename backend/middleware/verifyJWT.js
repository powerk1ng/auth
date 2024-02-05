import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.cookie;

    if (!authHeader || !authHeader.startsWith('token=')) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const token = authHeader.split('token=')[1];

    jwt.verify(token, process.env.VITE_JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            return res.status(403).json({
                message: "Forbidden"
            });
        }
        req.id = decoded.id;
        req.role = decoded.role;
        console.log('JWT Decoded:', decoded);
        next();
    });
}