import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
   const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("mogooose connection error  " , error);
        process.exit(1) 
     }
}
//neha tanganuiya
 



export default connectDB 
 
