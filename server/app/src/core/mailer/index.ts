import config from '../../infra/config/mailer';

export class Mailer {
    protected readonly transporter;
    protected readonly from = config.auth.user;

    constructor(mailer) {
        this.transporter = mailer.createTransport(config);
    }

    async sendMail (to, subject, text, html) {
        try {
            const info = await this.transporter.sendMail({ from: this.from, to, subject, text, html });
            console.log("Message sent: %s", info.messageId);
            return { success: true, id: info.messageId };
        } catch (error) {
            console.log({ error: error })
            return { error: error }
        }
    }
}