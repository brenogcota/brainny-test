import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
import multer from 'multer';
import config from '../../infra/config/api'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, join(__dirname, '../..', '/public/uploads/'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.fieldname + '-' + file.originalname)
    }
})
  
const upload = multer({ storage: storage });

export default async (req: Request, res: Response, next: NextFunction) => {
    upload.single('file')(req, res, err => {
        if (err) return res.status(500).json({ payload: err });
        
        const filename = req.file.filename, 
              url = `${config.baseUrl}/uploads/${filename}`;
        req.image = { filename, url }

        next();
    });
}