// import { asyncHandler } from "../utils/asycHandler";
import asyncHandler from '../utils/asyncHandler.js';

const registerUser = asyncHandler (async(req,res)=> {

   
               res.status(200).json({
    message:"ok"
 })
    
})
export  { registerUser }

  // user detail form user frontend
    //validation - not empty
    //check if user is already exits username ,email
    // check for image check for avatar
    // upload them to cloudinary , avaatar
    // create user obj - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // respone



    //get user details from frontend
// const {fullname , email , username , password}=  req.body
//   console.log("email");