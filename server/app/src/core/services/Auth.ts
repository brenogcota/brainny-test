import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { sanitize } from '../../utils';
import { UserRepository } from '../repositories/User';
import { BaseService } from './Base';
import Mailer from './Mailer';
import config from '../../infra/config/client';

export class AuthService extends BaseService {

    constructor() {
        super(UserRepository)
    }

    async create({ email, password }) {
        let user = await super.one(undefined, { where: { email }});
    
        if(!user) return { error: 'User does not exists.' };

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) return { error: 'Incorrect password.' }
    
        const { id } = user;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: Number(process.env.expiresIn) * 60
        });

        return { auth: true, token, user: sanitize(user) };
    }

    async verifyEmail(token) {
        const user = await super.one(undefined, { where: { token }});

        if(!user) return { error: 'Token expired.'};

        return super.update(user.id, {
            token: uuidv4(),
            email_verified_at: new Date()
        });
    }

    async resetPassword(email) {
        const repository = new UserRepository();
        const user = await repository.findByEmail(email);
        if(!user) return { error: 'User not found, please verify e-mail' };

        const remember_token = uuidv4();
        await repository.update(user.id, {
            remember_token
        });

        const url = `${config.baseUrl}/reset-password?token=${remember_token}`

        Mailer.resetPassword(email, { name: user.name, email, remember_token, url });
        return { email };
    }

    async updatePassword(token, password) {
        const repository = new UserRepository();
        const user = await repository.findBy('remember_token', token);
        if(!user) return { error: 'User not found, please verify e-mail' };

        password = await bcrypt.hash(password, Number(process.env.salts));
        await repository.update(user.id, {
            password,
            remember_token: null
        });

        return user;
    }
}
