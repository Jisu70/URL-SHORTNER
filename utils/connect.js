// Dependencies
const mongoose = require('mongoose');


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }) ;
    console.log("Connection with database successfully ")
  } catch (error) {
    console.log("ERROR IS :", error)
  }
}


module.exports = dbConnection
