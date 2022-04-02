import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";


const searchProducts = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract search query from parameters
  const searchQuery = req.params.searchQuery;

  // Create a regex that matches any string that has search query
  const query = new RegExp("[a-zA-Z0-9]*" + searchQuery + "[a-zA-Z0-9]*", "i");

  // Use that regex to find products with matching title
  const products = await Product.find({ title: { $regex: query } })

  return res.json({ success: true, products });
};

export { searchProducts };
