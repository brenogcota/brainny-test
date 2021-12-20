import { NextFunction, Request, Response } from "express";
import { sanitize } from "../../utils";
import { UserService } from "../services/User";
import { BaseController } from "./Base";

class UserController extends BaseController {

    constructor() {
        super(UserService);
    }

    save = async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.service.save(req.body);
        if(response.error) return res.status(403).json({ message: response.error });

        return res.status(201).json(sanitize(response));
    }

    updateAvatar = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
    
            if(!(req.image && req.image.url)) return res.status(403).json({ error: 'File not found!' });
            const { url } = req.image;
            const avatar_url = url;
            const user = await this.service.update(id, { avatar_url });
            return res.status(201).json(sanitize(user));
            
        } catch (error) {
            next(error)
        }
    }

}

export default new UserController();