import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

const getCartItems = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get user and product id
  const user_id = res.locals.id;

  // Find the user in the database
  const user = await User.findById(user_id);

  if (!user) return res.json({ success: false, message: "User not found" });

  // Send the cart field of the user
  return res.json({ success: true, cart: user.cart });
};

export default getCartItems;
