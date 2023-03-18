const mongoose = require('mongoose');
// mongoose.set("strctQuery",true);
async function connectToMongoDB(url){
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDB
}


