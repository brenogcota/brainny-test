import RegisterController from '../controllers/Register';
import { auth, performAction } from '../middlewares';
import { registerValidator } from '../validators/Register';

const routes = [
    {
        path: '/register',
        handler: RegisterController.all,
        method: 'get',
        middlewares: [auth, performAction("roles", ["admin"])]
    },
    {
        path: '/register/:id',
        handler: RegisterController.one,
        method: 'get',
        middlewares: [auth]
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