import { NextFunction, Request, Response } from "express";
import { RegisterService } from "../services/Register";
import { validate } from "./SchemaValidator";

export const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    return validate(req, res, next)(RegisterService, 'registered_times');
}

