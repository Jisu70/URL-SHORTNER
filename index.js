// Dependencies
const express = require ('express'); 
const app = express();
require('dotenv').config() ;
// Body Parser  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Impoting Db connection 
const dbConnection = require('./utils/connect')
dbConnection()
//Impoting routes
const urlRoute = require('./routes/url')
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


