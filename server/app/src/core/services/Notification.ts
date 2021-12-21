import socket from "../../lib/socket";
import { db } from "../../infra/database/knex";
import { sanitize } from "../../utils";

export class NotificationService {

    async all() {
        let notifications = await db('notifications').join('users', 'notifications.user_id', '=', 'users.id').select('*');
        
        notifications = notifications.map(notification => {
            notification.subscriber = {
                email: notification.email, 
                name: notification.name, 
                id: notification.subscriber_id, 
                avatar_url: notification.avatar_url, 
                avatar_color: notification.avatar_color, 
                type: notification.type
            }

            return sanitize(notification)
        })

        return notifications;
    }

    async save({ user_id, register }) {
        const [user] = await db('users').select('name').where({ id: user_id });
        const message =  `The user ${user.name} registered the point`;

        await db('notifications').insert({
            user_id,
            message
        });

        socket.emit('new_register', {
            message,
            user: sanitize(user),
            register
        });
    }
}