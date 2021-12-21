import { Request, Response } from "express";
import { RegisterService } from "../services/Register";
import { BaseController } from "./Base";

class RegisterController extends BaseController {
    constructor(){
        super(RegisterService)
    }
}

export default new RegisterController();