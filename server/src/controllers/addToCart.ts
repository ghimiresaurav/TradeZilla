import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
import { Product } from "../models/Product";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const addToCart = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get user and product id
  const user_id = res.locals.id;
  const product_id = req.params.p_id;

  // Check if the product_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(product_id))
    return res.json({
      success: false,
      message: "Invalid product Id",
    });

  // Get the product and user id
  const product = await Product.findById(product_id);
  const user = await User.findById(user_id);

  // Send false message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  // Send false message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  const vendor_id = product.vendor;

  if (vendor_id.equals(user_id))
    return res.json({
      success: false,
      message: "You can not add your own product to cart.",
    });
  try {
    const itemsToAdd = user.cart;

    itemsToAdd.push({
      item_id: product_id,
      quantity: req.body.quantity,
      addedOn: new Date(),
    });

    // Send a success message
    return res.json({
      success: true,
      message: "Success",
      user,
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default addToCart;
