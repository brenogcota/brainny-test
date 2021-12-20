import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/User";
import { validate } from "./SchemaValidator";

export const userValidator = async (req: Request, res: Response, next: NextFunction) => {
    return validate(req, res, next)(UserService, 'users', ['token', 'roles', 'permissions']);
}

