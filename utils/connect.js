// Dependencies
import { connect } from 'mongoose';


const dbConnection = async () => {
  try {
    await connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }) ;
    console.log("Connection with database successfully ")
  } catch (error) {
    console.log("ERROR IS :", error)
  }
}


export default dbConnection
