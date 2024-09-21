import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // Retrieve token from cookies or Authorization header
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      throw new ApiError(401, "Unauthorized request. Access token is missing.");
    }

    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    // Find the user based on the token's payload (_id)
    const user = await User.findById(decodedToken._id).select("-password -refreshToken");
    
    if (!user) {
      throw new ApiError(401, "Invalid access token. User not found.");
    }

    // Attach the user to the request object
    req.user = user;
    
    // Call the next middleware or route handler
    next();
    
  } catch (error) {
    // Handle token verification or any other errors
    throw new ApiError(401, error.message || "Invalid access token");
  }
});
