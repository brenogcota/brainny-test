import socket from "../../lib/socket";
import { NotificationRepository } from "../repositories/Notification";
import { RegisterRepository } from "../repositories/Register";
import { UserRepository } from "../repositories/User";
import { BaseService } from "./Base";
import { NotificationService } from "./Notification";


export class RegisterService extends BaseService {

    constructor() {
        super(RegisterRepository);
    }

    async all(options?) {
        return super.all({ order: { created_at: "DESC" }, relations: ['user'], ...options })
    }

    async save(body) {
        const { user_id } = body
        const register = super.save(body)
        const notificationService = new NotificationService();

        notificationService.save({ user_id, register })

        return register;
    }

    

}
