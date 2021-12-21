import { NextFunction, Request, Response } from "express";
import { sanitize } from "../../utils";

export class BaseController {

    protected readonly service;

    constructor(Service) {
        this.service = new Service();
    }

    all = async (req: Request, res: Response, next: NextFunction) => {
       try {
            const { order, page: skip, limit: take, ...query} = req.query;
            const response = await this.service.all({ where: query, orderBy: order, take, skip });
            return res.status(200).json(sanitize(response));
        } catch (error) {
            req.errors = [...req.errors, error];
            next();
        }
    }

    one = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.service.one(req.params.id);
            return res.status(200).json(sanitize(response));
        } catch (error) {
            req.errors = [...req.errors, error];
            next();
        }
    }

    save = async (req: Request, res: Response, next: NextFunction) => {
        // try {
            const response = await this.service.save(req.body);
            return res.status(201).json(sanitize(response));
            
        // } catch (error) {
        //     req.errors = [...req.errors, error];
        //     next();
        // }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedReponse = await this.service.update(req.params.id, req.body);
            return res.status(201).json(sanitize(updatedReponse));
        } catch (error) {
            req.errors = [...req.errors, error];
            next();
        }
    }

    remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.service.remove(req.params.id);
            await res.status(200).json(sanitize(response));
        } catch (error) {
            req.errors = [...req.errors, error];
            next();
        }
    }

}