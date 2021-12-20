import { NextFunction, Request, Response } from "express";
import { validationResult, check, oneOf, ValidationChain } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    return async (Service, tableName, ignoreFields?) => {
        const service = new Service();
        const columns = await service.getColumns(tableName);
    
        const schemas = columns.map(async ({ column_name }) => {
            if(ignoreFields && ignoreFields.includes(column_name)) return;
            return await check(column_name).exists().run(req);
        });
    
        await Promise.all(schemas);
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ error: 'Missing fields', fields: parseErrors(errors) });
        }
    
        next();
    }
}

const parseErrors = (errors) => {
    return errors.array().reduce((acc, curr) => ({ ...acc, [curr.param]: "" }), {})
}