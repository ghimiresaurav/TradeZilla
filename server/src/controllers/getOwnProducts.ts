import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const getOwnProducts = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get the product
  const products = await Product.find({ vendor: res.locals.id });

  // Send false message if product not found
  if (!products)
    return res.json({
      success: false,
      message: "Product not found",
    });

  return res.json({ success: true, products });
};

export default getOwnProducts;
