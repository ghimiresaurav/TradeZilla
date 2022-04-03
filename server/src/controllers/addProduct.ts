import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import { Multer } from "multer";
import cloudinary from "cloudinary";

// console.log("This is working!!")

const addProduct = async (req: Request, res: Response) => {
  // Extract user-inputted information from request object
  console.log("This is working!!");
  const {
    title,
    postedOn,
    quantity,
    mfgDate,
    category,
    subcategory,
    description,
  }: {
    title: string;
    postedOn: Date;
    quantity: Number;
    mfgDate: Date;
    category: string;
    subcategory: string;
    description: string;
  } = req.body;

  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Config cloudinary
  // cloudinary.config({
  //   cloud_name: "tradezilla",
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   api_secret: process.env.CLOUDINARY_API_SECRET,
  // });

  try {
    // Send a success message
    return res.json({
      success: true,
      message: "User Registration Complete :)",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default addProduct;
