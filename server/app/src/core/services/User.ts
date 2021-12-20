import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from "../repositories/User";
import { BaseService } from "./Base";
import MailerService from './Mailer';
import api from '../../infra/config/api'

export class UserService extends BaseService {

    constructor() {
        super(UserRepository);
    }

    async one(id) {
        const repository = new UserRepository();
        return repository.one(id, { relations: ['accounts']});
    }

    async save(body) {
        const { email, password, name } = body;
        const userRepository = new UserRepository();
        const user = await userRepository.findByEmail(email);
        if(user) return { error: 'User already exists.' };

        const hash = await bcrypt.hash(password, Number(process.env.salts));
        body.password = hash;
        body.token = uuidv4();
        body.roles = ['user'];
        body.permissions = ['basic'];
        const response = userRepository.save(body);


        const verify_token_url = `${api.baseUrl}/auth/confirm-email/${body.token}`; 
        MailerService.welcome(email, { name, verify_token_url });
        
        return response;
    }

    async update(id, body) {
        const { password } = body;

        if(password) {
            const hash = await bcrypt.hash(password, Number(process.env.salts));
            body.password = hash;
        }

        return super.update(id, body);
    }

}
