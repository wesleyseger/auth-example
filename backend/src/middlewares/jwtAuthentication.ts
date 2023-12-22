import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: any;
}

export const Authorization = (req: CustomRequest, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(' ')[1];

    if (!token)
        return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, 'PLEASE_SET_JWTSECRET_ON_.ENV');
        req.user = decoded;
        console.log(decoded)
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
