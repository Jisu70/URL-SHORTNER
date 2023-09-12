// Dependencies
import express, { urlencoded, json } from 'express'; 
const app = express();
import dotenv from 'dotenv';
// Load environment variables from .env
dotenv.config();;
// Body Parser  
app.use(urlencoded({ extended: true }));
app.use(json());
// Impoting Db connection 
import dbConnection from './utils/connect.js';
dbConnection()
//Impoting routes
import urlRoute from './routes/url.js';
// Using routes
app.use('/url',urlRoute)
app.get('/',(req, res) => {
    res.status(200).json({ message : "Hello world"})
})

app.listen(process.env.PORT, (err) => {
    if(err){
        throw err
    }
    console.log(`server started at PORT:${process.env.PORT}`)
})


