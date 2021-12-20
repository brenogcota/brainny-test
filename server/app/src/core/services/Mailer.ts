import { Mailer } from "../mailer";
import { renderFile } from 'ejs';
import { join } from 'path'
import nodemailer from 'nodemailer';

import client from "../../infra/config/client";

class MailerService extends Mailer {

    constructor() {
        super(nodemailer);
    }

    async render(file, data) {
        const templateFile = join(__dirname, '..', `/views/templates/${file}.ejs`);
        return await renderFile(templateFile, data);
    }

    async welcome(to, { name, verify_token_url }) {
        const subject = 'Welcome', text = `Hello, ${name}`;
        const template = await this.render('welcome', { name, verify_token_url });

        super.sendMail(to, subject, text, template);
    }

    async resetPassword(to, { name, email, remember_token, url }) {
        const  subject = 'Reset Password', text = 'Hi, we received your request to change your password.';
        const template = await this.render('reset-password', { name, email, remember_token, url });

        super.sendMail(to, subject, text, template);
    }

    async inviteUser(to, { id, project }) {
        const  subject = 'Project invite', text = `Hello, you have received an invitation to participate in a project.`;
        const url = `${client.baseUrl}/signup/?account=${id}`;
        const template = await this.render('invite', { email: to, project, url });

        super.sendMail(to, subject, text, template);
    }

    
}

export default new MailerService();