import RegisterController from '../controllers/Register';
import { auth, count, performAction } from '../middlewares';
import { registerValidator } from '../validators/Register';

const routes = [
    {
        path: '/register',
        handler: RegisterController.all,
        method: 'get',
        middlewares: [auth, performAction("roles", ["admin"]), count('registered_times')]
    },
    {
        path: '/register/:id',
        handler: RegisterController.one,
        method: 'get',
        middlewares: [auth, count('registered_times')]
    },
    {
        path: '/register',
        handler: RegisterController.save,
        method: 'post',
        middlewares: [registerValidator]
    },
    {
        path: '/register/:id',
        handler: RegisterController.update,
        method: 'put',
        middlewares: [auth]
    }
]

export default routes;