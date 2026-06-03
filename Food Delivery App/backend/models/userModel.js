import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    cartData:{type:Object, default:{}}
}, {minimize:false})

// Here cartData is for storing information when user places some order, the default {} is so that when new user comes cart should exist but empty now the work of minimize:false is that mongoDB does not store empty values ​​so this will tell mongoDB to store empty values ​​also  

// const userModel = mongoose.model("user", userSchema);
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;