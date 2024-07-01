const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    password:String
  })

const User=mongoose.model('auth',userSchema);
module.exports= User;

