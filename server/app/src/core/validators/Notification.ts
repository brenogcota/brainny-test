import { NextFunction, Request, Response } from "express";
import { NotificationService } from "../services/Notification";
import { validate } from "./SchemaValidator";

export const notificationValidator = async (req: Request, res: Response, next: NextFunction) => {
    return validate(req, res, next)(NotificationService, 'notifications');
}