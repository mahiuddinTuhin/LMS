import mongoose from "mongoose";
require("dotenv").config();

const dbUri: string = process.env.DB_URI || "";

/* connecting to db */

export const connectDB = async () => {
  try {
    await mongoose.connect(dbUri).then((data: any) => {
      console.log("Successfully connected to DB");
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};
