import { config } from 'dotenv';
config();

export default {
    host: "smtp.google.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
}