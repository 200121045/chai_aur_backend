import mongoose, { Schema } from "mongoose";
// npm install mongoose-aggregate-paginate-v2
import jwt from "jsonwebtoken"; // This is imported but not used in this specific file
import bcrypt from "bcrypt";     // This is imported but not used in this specific file
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // Pagination plugin

// Define the video schema
const videoSchema = new Schema(
  {
    videoFile: { 
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);



/*
createdAt: This field is automatically set to the date and time when the document is created.
updatedAt: This field is automatically updated to the current date and time whenever the document is modified.
*/
/* 
Pagination allows you to divide large sets of data into smaller chunks, making it easier to handle and display on your front-end.
MongoDB's aggregation framework is powerful for creating advanced queries that can filter, group, and sort data. However, manually adding pagination to these queries can be tricky.
mongooseAggregatePaginate simplifies the pagination process, allowing you to easily paginate the results of your aggregation queries.
*/

// Attach pagination plugin
videoSchema.plugin(mongooseAggregatePaginate);

// Create and export the Video model
export const Video = mongoose.model("Video", videoSchema);
