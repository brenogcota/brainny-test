const env = process.env.NODE_ENV

export default {
    baseUrl: env === 'development' ? `http://localhost:3000` : 'https://client-host.com.br', 
}