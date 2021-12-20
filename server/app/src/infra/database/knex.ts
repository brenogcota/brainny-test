import knex from 'knex';

export const db = knex({
    client: 'pg',
    connection: {
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.USER,
      password: process.env.PASS,
      database: process.env.DATABASE
    }
});