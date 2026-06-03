import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://yuvanshmali:Yuv2115@cluster0.ftsoofg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
