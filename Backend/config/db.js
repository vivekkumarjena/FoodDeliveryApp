import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://cst22bctc74_db_user:QHmLYmFYvsuesWhW@cluster0.l7eer72.mongodb.net/food-del").then(()=>{console.log("DB Connnected")})
}