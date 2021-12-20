import socket from "../../lib/socket";
import { db } from "../../infra/database/knex";
import { sanitize } from "../../utils";

export class NotificationService {

    async all({ user_id }) {
        let notifications = await db('notifications').join('users', 'notifications.subscriber_id', '=', 'users.id').select('*').where({ user_id });
        
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

    async save({ user_id, task, project_id, subscriber }) {
        const [user_subscriber] = await db('users').select('email', 'name', 'id', 'avatar_url', 'avatar_color', 'type').where({ id: subscriber.id });
        const message = `${user_subscriber.name} signed you on task ${task.title}.`;

        const [notification] = await db('notifications').select('*').where({ user_id, task_id: task.id, project_id, message });

        if(notification) return;

        await db('notifications').insert({
            user_id,
            task_id: task.id,
            project_id,
            message,
            subscriber_id: user_subscriber.id
        });

        socket.emit(user_id, {
            user_id,
            task_id: task.id,
            project_id,
            message,
            read: false,
            created_at: new Date(),
            subscriber: sanitize(user_subscriber)
        });
    }
}