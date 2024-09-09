import dotenv from "dotenv";
dotenv.config();
import mongoose  from "mongoose";
//  import { DB_NAME } from "./constants";
//  import connectDB from "./db/index.js";
 import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
// import dotenv from "dotenv"
 
connectDB();



















 /*
import express from "express"
const app = express()
(async() =>{
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error", (error )=>{
  console.log("error :", error  );
            throw error
        })
        app.listen(process.env.PORT ,()=> {
            console.log('app is listening ${process.env.PORT}');
        })
    }
    catch(error){
        console.log("errpe", error);
        throw err  
    }
 
})()



*/


