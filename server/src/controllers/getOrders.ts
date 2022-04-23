import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order";

const getOrders = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract user id
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  try {
    // Find pending and dispatched orders separately
    const pendingOrders = await Order.find({
      vendor_id: user_id,
      dispatched: false,
    });

    const dispatchedOrders = await Order.find({
      vendor_id: user_id,
      dispatched: true,
    });

    // Send a success message
    return res.json({
      success: true,
      dispatchedOrders,
      pendingOrders,
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default getOrders;
