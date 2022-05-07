import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import { User } from "../models/User";
import sendEmail from "./email";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const addQuery = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id & user id
  const product_id = req.params.p_id;
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

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

  // Extract vendor id
  const vendor_id = product.vendor;

  // Check if the vendor id is valid or not
  if (!checkValidObjectId(vendor_id.toString()))
    return res.json({
      success: false,
      message: "Invalid vendor Id",
    });

  // Extract vendor
  const vendor = await User.findById(vendor_id);

  // Send false message if vendor not found
  if (!vendor)
    return res.json({
      success: false,
      message: "Vendor not found",
    });

  try {
    const inquiries = product.inquiries;
    const user = await User.findById(user_id);

    // Add question and other information to product
    inquiries.push({
      user: user_id,
      date: new Date(),
      question: req.body.query,
      answer: "",
      name: user?.name,
    });

    // Save added question
    product.save();

    const mailOptions = {
      subject: "New Query",

      text: `DO NOT REPLY TO THIS EMAIL.\n
      You product ${product.title} has received a new query.\n`,

      html: `<h1>DO NOT REPLY TO THIS EMAIL.</h1><br/>
      You product <b>${product.title}</b> has received a new query.<br/>
      <p>Click <a href="http://localhost:3000/product/${product.id}/#inquiries" target="_blank">here</a> to view!<p>`,
    };

    // Send the email if vendor did not add query
    if (!vendor_id.equals(user_id)) {
      sendEmail(vendor.email, mailOptions);
    }

    // Send a success message
    return res.json({
      success: true,
      message: "You query has been added",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default addQuery;
