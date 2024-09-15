import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Add '.js' extension if needed
const router = Router();

router.route("/register").post(registerUser);
// If you add a login route later, you can uncomment the following line
// router.route("/login").post(login);

export default router;
