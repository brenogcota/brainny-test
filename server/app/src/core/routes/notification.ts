import NotificationController from '../controllers/Notification';
import { auth } from '../middlewares';

const routes = [
    {
        path: '/notification/:id',
        handler: NotificationController.getAll,
        method: 'get',
        middlewares: [auth]
    }
]

export default routes;