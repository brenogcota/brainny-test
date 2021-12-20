"use-strict";

const node_env = process.env.NODE_ENV;
const extension = node_env === 'development' ? 'ts' : 'js';
const path = node_env === 'development' ? 'src' : 'build';
const synchronize = node_env === 'development' ? false : true;

module.exports = {
   "name": "default",
   "type": "postgres",
   "host": process.env.HOST,
   "port": process.env.DB_PORT,
   "username": process.env.USER,
   "password": process.env.PASS,
   "database": process.env.DATABASE,
   "synchronize": synchronize,
   "logging": false,
   "entities": [
      `${path}/data/entity/**/*.${extension}`
   ],
   "migrations": [
      `${path}/data/migration/**/*.${extension}`
   ],
   "subscribers": [
      `${path}/data/subscriber/**/*.${extension}`
   ],
   "cli": {
      "entitiesDir": `${path}/data/entity`,
      "migrationsDir": `${path}/data/migration`,
      "subscribersDir": `${path}/data/subscriber`
   }
}