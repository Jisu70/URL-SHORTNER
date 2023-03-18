const express = require ('express'); 
const {connectToMongoDB} = require('./connect')
const urlRoute = require('./routes/url')

const app = express();
const port = 6500;

connectToMongoDB("mongodb://0.0.0.0:27017/short-url")
.then(()=>console.log('mongo db connected'))
app.use(express.json());
app.use('/url',urlRoute)

app.listen(port,()=>console.log(`server started at PORT:${port}`))


