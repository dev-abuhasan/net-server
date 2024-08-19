import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
// import User from '../models/userModel'; // Adjust the import path as necessary

// Define the type for the user object added to the request
interface UserRequest extends Request {
    user?: {
        id: string;
        isAdmin?: boolean;
        superAdmin?: boolean;
    };
}

// Protect Route
export const protect = asyncHandler(async (req: UserRequest, res: Response, next: NextFunction) => {
    let token: string | undefined;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
            // req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (err) {
            res.status(401).json({ message: 'Not Authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not Authorized, No Token' });
    }
});

// Admin Route
export const admin = (req: UserRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Not Authorized as an Admin' });
    }
};

// Super Admin Route
export const superAdmin = (req: UserRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.superAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Not Authorized as a Super Admin' });
    }
};
