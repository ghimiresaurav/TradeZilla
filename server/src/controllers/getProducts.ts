import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";

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

export { getAllProducts, getProductsByCat, getProductsBySubCat };
