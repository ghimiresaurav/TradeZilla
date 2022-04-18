import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const getOrders = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract user id
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  try {
    const orders = await Order.find({ vendor_id: user_id });

    // Send a success message
    return res.json({
      success: true,
      orders,
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default getOrders;
