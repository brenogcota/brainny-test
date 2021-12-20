import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/Auth";
import { BaseController } from "./Base";
import client from "../../infra/config/client";
import { sanitize } from "../../utils";

class AuthController extends BaseController {
    constructor() {
        super(AuthService);
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        const { auth, token, user, error } = await this.service.create(req.body);

        if(error) return res.status(403).json({ error });
        if(!auth) return res.status(403).json({ message: 'Error validating data, try again later' });
        
        return res.status(201).json({ token, user, auth });
    }

    verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.params.token;

        const { error } = await this.service.verifyEmail(token);
        if(error) return res.status(403).json(error);

        return res.render('templates/confirm-email', { loginUrl: client.baseUrl + '/login'});
    }

    resetPassword = async (req: Request, res: Response, next: NextFunction) => {
        const { email } = req.body;

        const { error } = await this.service.resetPassword(email);
        if(error) return res.status(404).json(error);

        return res.status(200).json({ success: true });
    }

    updatePassword = async (req: Request, res: Response, next: NextFunction) => {
        const { token } = req.query;
        const { password } = req.body;

        const response = await this.service.updatePassword(token, password);
        if(response.error) return res.status(404).json(response.error);

        return res.status(200).json(sanitize(response));
    }
}

export default new AuthController();