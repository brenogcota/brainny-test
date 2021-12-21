import express from 'express';
import { Request, Response, NextFunction } from 'express';
import userRouter from './user';
import authRouter from './auth';
import notificationRouter from './notification';
import registerRouter from './register';

import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { decorateHandler } from '../middlewares';

const routes = [...userRouter, ...authRouter, ...notificationRouter, ...registerRouter];

const router = express.Router();

const limiter = rateLimit({
    windowMs: 10,
    max: 10
});

const speedLimiter = slowDown({
    windowMs: 10,
    delayAfter: 1,
    delayMs: 500
})

router.all('*', limiter, speedLimiter, decorateHandler, (req: Request, res: Response, next: NextFunction) => next());
router.get('/', (req, res) =>  res.json({ message: 'healthcheck - 200'}));

routes.map(route => {
    route.middlewares ? router[route.method](route.path, ...route.middlewares, route.handler) 
                      : router[route.method](route.path, route.handler)

})

export { router };