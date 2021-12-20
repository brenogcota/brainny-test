import AuthController from '../controllers/Auth';
import { emailVerified } from '../middlewares';
import { authValidator } from '../validators/Auth';

const routes = [
    {
        path: '/auth',
        handler: AuthController.create,
        method: 'post',
        middlewares: [authValidator, emailVerified]
    },
    {
        path: '/auth/confirm-email/:token',
        handler: AuthController.verifyEmail,
        method: 'get',
    },
    {
        path: '/auth/reset-password',
        handler: AuthController.resetPassword,
        method: 'post'
    },
    {
        path: '/auth/reset-password',
        handler: AuthController.updatePassword,
        method: 'put'
    }
]

export default routes;