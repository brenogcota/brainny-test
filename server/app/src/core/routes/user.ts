import UserController from '../controllers/User';
import { auth } from '../middlewares';
import upload from '../middlewares/upload';
import { userValidator } from '../validators/User';

const routes = [
    {
        path: '/user',
        handler: UserController.all,
        method: 'get',
        middlewares: [auth]
    },
    {
        path: '/user/:id',
        handler: UserController.one,
        method: 'get',
        middlewares: [auth]
    },
    {
        path: '/user',
        handler: UserController.save,
        method: 'post',
        middlewares: [userValidator]
    },
    {
        path: '/user/:id',
        handler: UserController.update,
        method: 'put',
        middlewares: [auth]
    },
    {
        path: '/user/avatar/:id',
        handler: UserController.updateAvatar,
        method: 'put',
        middlewares: [auth, upload]
    }
]

export default routes;