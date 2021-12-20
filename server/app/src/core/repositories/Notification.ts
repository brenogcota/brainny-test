import { Notifications } from "../../data/entity/Notifications";
import { BaseRepository } from "./Base";


export class NotificationRepository extends BaseRepository<Notifications> {
    constructor() {
        super(Notifications)
    }
}