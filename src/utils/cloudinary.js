import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Add 'process.env'
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File is uploaded on Cloudinary:", response.url);

    // Return the response object
    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    // Remove the locally saved temporary file if the upload fails
    fs.unlinkSync(localFilePath);
    throw error; // Rethrow the error to handle it elsewhere if necessary
  }
};
