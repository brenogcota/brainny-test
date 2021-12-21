import { RegisterRepository } from "../repositories/Register";
import { BaseService } from "./Base";


export class RegisterService extends BaseService {

    constructor() {
        super(RegisterRepository);
    }
}
