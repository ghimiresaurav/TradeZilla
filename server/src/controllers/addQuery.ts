import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product, } from "../models/Product";

const addQuery = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id and user id
  const product_id = req.params.p_id;
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  // Get the product
  const product = await Product.findById(product_id);

  // Send false message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  try {
    const inquiries = product.inquiries;

    // Add question and other information to product
    inquiries.push({
      user: user_id,
      date: new Date,
      question: req.body.query,
      answer: "",
    });

    // Save added question
    product.save();

    // Send a success message
    return res.json({
      success: true,
      message: "Success", product
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }

}

export default addQuery;