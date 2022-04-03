import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import { User } from "../models/User";

const buy = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get product and user id
  const product_id = new mongoose.Types.ObjectId(req.params.p_id);
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  // Find the user in database
  const user = await User.findById(user_id);

  // Send an error message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  try {
    const boughtItems = user.boughtItems;

    // Add item/product data to boughtItems
    boughtItems.push({
      item_id: product_id,
      quantity: req.body.quantity,
      addedOn: new Date(),
    });

    // Update user info in database
    user.save();

    // Decrement the total product quantity by amount bought
    await Product.findByIdAndUpdate(product_id, { $inc: { quantity: -req.body.quantity } });

    // Send a success message
    return res.json({
      success: true,
      message: "Success", user
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }

}

export default buy;