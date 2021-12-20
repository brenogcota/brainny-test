const port = process.env.PORT || 3001;

export default {
    origin: `http://localhost:3000`, 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}