<p align="center">
  <img src="https://user-images.githubusercontent.com/46490801/146956903-8ca6f3e7-633c-4928-b740-6c7212937085.png" width="120" />
</p>

---

# Brainny test - Fullstack

![image](https://user-images.githubusercontent.com/46490801/146957080-2f2115a6-12d0-4826-9558-90939632949c.png)

## [print screens](https://github.com/brenogcota/brainny-test/issues/1)

[Brainny test - Fullstack](https://github.com/brenogcota/brainny-test/) is an Acess Control Register alternative. We're building the features of register users time registers.

## Documentation

For full documentation, visit [docs](https://github.com/brenogcota/brainny-test/tree/master/docs)

## How it works

### Create database
```bash
➜  repo git:(master) ✗ sudo -u breno psql postgres
psql (12.9 (Ubuntu 12.9-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# CREATE table brainny
```

### Config server/app
```bash
➜  repo git:(master) ✗ cp .env.example .env
➜  repo git:(master) ✗ npm i
```

### Config client/app
```bash
➜  repo git:(master) ✗ npm i
```

### Run migrations
```bash
➜  repo git:(master) ✗ npm run build
➜  repo git:(master) ✗ npm run migration:run
```

### Run project
```bash
➜  client/app git:(master) ✗ npm start
➜  server/app git:(master) ✗ npm run dev
```


#### Client libraries
```json
{
  "@ant-design/icons": "^4.7.0",
  "@craco/craco": "^6.3.0",
  "antd": "^4.16.13",
  "axios": "^0.24.0",
  "immer": "^9.0.6",
  "lodash": "^4.17.21",
  "moment": "^2.29.1",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^5.3.0",
  "socket.io-client": "^4.4.0",
  "styled-components": "^5.3.3"
}

```

#### Server libraries
```json
{
  "bcrypt": "^5.0.1",
  "cors": "^2.8.5",
  "dotenv": "^10.0.0",
  "ejs": "^3.1.6",
  "express": "^4.17.1",
  "express-rate-limit": "^5.5.0",
  "express-slow-down": "^1.4.0",
  "express-validator": "^6.13.0",
  "helmet": "^4.6.0",
  "jsonwebtoken": "^8.5.1",
  "knex": "^0.95.14",
  "morgan": "^1.10.0",
  "multer": "^1.4.3",
  "nodemailer": "^6.7.0",
  "pg": "^8.7.1",
  "pino": "^7.1.0",
  "pino-http": "^6.0.0",
  "reflect-metadata": "^0.1.10",
  "socket.io": "^4.4.0",
  "typeorm": "0.2.37",
  "uuid": "^8.3.2"
}

```

## Translations

- [English](https://github.com/brenogcota/brainny-test/)
- [Portuguese (Brazilian) / Português Brasileiro](https://github.com/brenogcota/brainny-test/)


---



