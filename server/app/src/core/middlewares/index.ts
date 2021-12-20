import { Request, Response, NextFunction } from 'express';
import { db } from '../../infra/database/knex';
import jwt from 'jsonwebtoken';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    req.errors = [...req.errors, error];
    next();
}

export const errorHandler = (req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);

    res.json({
        message: "500 - an error occurred",
        stack: process.env.NODE_ENV === 'production' ? '' : "500 - an error occurred",
        errors: JSON.stringify(req.errors) || []
    });
}

export const decorateHandler = (req: Request, res: Response, next: NextFunction) => {
    req.errors = req.errors || [];
    req.db = db;
    next();
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearerToken = req.headers.authorization;
        if(!bearerToken) return res.status(401).json({ auth: false, message: 'No token provided.' });

        const [_, token] = bearerToken.split(' ');
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.', error: err });
        
            req.user_id = decoded.id;
            next();
        });

    } catch(err) {
        next(err);
    }
}

export const emailVerified = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const [users] = await req.db('users').select('email_verified_at').where({ email });

    if(!users.email_verified_at) return res.status(403).json({ message: 'Please, verify email and try again.'});
    next();
}