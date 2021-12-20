import { NextFunction, Request, Response } from "express";
import { validationResult, check } from "express-validator";

export const authValidator = async (req: Request, res: Response, next: NextFunction) => {
    await check('email').exists().isEmail().run(req); 
    await check('password').exists().run(req); 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

