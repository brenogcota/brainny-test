const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV

export default {
    baseUrl: env === 'development' ? `http://localhost:${port}` : 'https://api-host.com.br', 
}