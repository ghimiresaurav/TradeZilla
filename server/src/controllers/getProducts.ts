import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const getAllProducts = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get all the products from the database
  const products = await Product.find();

  // Send the product information to the client with a success message
  return res.json({ success: true, products });
};

const getProductsByCat = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  const category = req.params.cat;

  // Get all the products of the requesteed category from the database
  const products = await Product.find({ category });

  // Send the product information to the client with a success message
  return res.json({ success: true, products });
};

const getProductsBySubCat = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract category and subcategory
  const category = req.params.cat;
  const subCategory = req.params.subCat;

  // Get all the products of the requested category and subcategory from the database
  const products = await Product.find({ category, subCategory });

  return res.json({ success: true, products });
};

const getSpecificProductDetails = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id and user id
  const product_id = req.params.p_id;

  // Check if the product_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(product_id))
    return res.json({
      success: false,
      message: "Invalid product Id",
    });

  // Get the product
  const product = await Product.findById(product_id);

  // Send false message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  return res.json({ success: true, product });
};

export {
  getAllProducts,
  getProductsByCat,
  getProductsBySubCat,
  getSpecificProductDetails,
};
