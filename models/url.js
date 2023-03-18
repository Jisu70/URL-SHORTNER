const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  shortId:{
    type: String,
    required: true,
    unique: true,
  },
  redirectURL :{
    type: String,
    required: true,
  },
  visitHistory :[{timestamp :{type:Number}}]
},{ timestamp :true})

module.exports = mongoose.model('url',urlSchema);