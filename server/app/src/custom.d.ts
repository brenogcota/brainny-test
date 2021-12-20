declare namespace Express {
    export interface Request {
       errors?: Array<string | Error>,
       email_checked?: boolean,
       db?: any;
       file?: any;
       image?: any;
       user?: any;
       user_id?: any;
    }
 }