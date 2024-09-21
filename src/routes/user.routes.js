import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js"; 
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

router.route("/login").post(loginUser)
//secure route
router.route("/logout").post(verifyJWT ,  logoutUser)
 

export default router;



















// If you add a login route later, you can uncomment the following line
// router.route("/login").post(login);

