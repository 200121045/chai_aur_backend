import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; 
// Add '.js' extension if needed
// import {upload} from "../middlewares/multer.middleware.js"
import {upload} from "../middlewares/multer.middleware.js";
const router = Router();
 



router.route("/register").post( 

upload.fields([
    {
    // maxcount:1,
    name :"avatar",
     maxCount:1
    },
    {
        name: "coverImage",
        maxCount:1
    }

]),// If you add a login route later, you can uncomment the following line
// router.route("/login").post(login);

registerUser)



export default router;



















// If you add a login route later, you can uncomment the following line
// router.route("/login").post(login);

