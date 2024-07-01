const bcrypt=require('bcrypt');
const User = require("../models/signup-loginDetails");

const signup =async(req,resp)=>{
    const user = new User();
    const {name,mobile,email,password}=req.body;

    const hashedPassword=await bcrypt.hash(password , 10);

    user.name=name;
    user.mobile=mobile;
    user.email=email;
    user.password=hashedPassword;

    const doc=await user.save();
    if(!doc){
      resp.status(404);
      resp.send("Registration Failed")
    }
    console.log("Register Succesfully");
    resp.send('Register Succesfully');
}

const login=async(req,resp)=>{

    const { email, password } = req.body;
  
    const user=await User.findOne({email});
    if(!user){
      return resp.status(404).json({ message: "User not found" });
    }
    
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
      return resp.json({message:"invalid credential"})
    }
    resp.status(200).send('Login successful');
  }

module.exports={login,signup}