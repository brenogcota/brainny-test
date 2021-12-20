import { Request, Response } from "express";
import { NotificationService } from "../services/Notification";
import { BaseController } from "./Base";

class NotificationController extends BaseController {
    constructor(){
        super(NotificationService)
    }

    async getAll(req: Request, res: Response) {
        const { id } = req.params;
        const service = new NotificationService();

        const notifications = await service.all({ user_id: id });
        return res.status(200).json(notifications);
    } 
}

export default new NotificationController();