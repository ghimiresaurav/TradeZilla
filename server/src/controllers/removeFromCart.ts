import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

const removeFromCart = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get user and product id
  const user_id = res.locals.id;
  const cart_id = req.params.c_id;

  // Get the product and user id
  const user = await User.findById(user_id);

  // Send false message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  try {
    const checkCart = user.cart.id(cart_id);

    // If the item is not on cart, send an error message
    if (!checkCart)
      return res.json({ success: false, message: "This item is not on cart" });

    // Remove the item from cart
    user.cart.pull({ _id: cart_id });

    // Save the changes
    await user.save();

    // Send a success message
    return res.json({
      success: true,
      message: "Removed from cart",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default removeFromCart;
