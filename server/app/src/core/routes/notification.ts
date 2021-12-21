import NotificationController from '../controllers/Notification';
import { auth, performAction } from '../middlewares';

const routes = [
    {
        path: '/notification',
        handler: NotificationController.all,
        method: 'get',
        middlewares: [auth, performAction("roles", ["admin"])]
    }
]

export default routes;