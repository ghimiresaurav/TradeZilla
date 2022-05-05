import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
import { Product } from "../models/Product";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const answerQuery = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id and query id
  const product_id = req.params.p_id;
  const user_id = new mongoose.Types.ObjectId(res.locals.id);
  const query_id = req.body.query_id;

  // Check if the product_id, query_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(product_id) || !checkValidObjectId(query_id))
    return res.json({
      success: false,
      message: "Invalid product or query Id",
    });

  // Find the product in the database
  const product = await Product.findById(product_id);

  // Send an error message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  // Check if the query answer is attempted by the vendor
  if (product.vendor != res.locals.id)
    return res.json({
      success: false,
      message: "You can not have access to reply.",
    });

  // Find the query on the product
  const query = product.inquiries.id(query_id);

  // If the query is not found, send an error message
  if (!query) return res.json({ success: false, message: "Query not found" });

  // Update the query by adding an answer
  query.answer = req.body.answer;
  query.answeredOn = new Date();

  // Save the changes made
  await product.save();

  return res.json({ success: true, message: "Query replied." });
};

export default answerQuery;
