import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order";

const getOrderHistories = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract user id
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  try {
    // Find pending and dispatched orders separately
    const pendingOrderHistories = await Order.find({
      customer_id: user_id,
      status: "pending",
    });

    const dispatchedOrderHistories = await Order.find({
      customer_id: user_id,
      status: "dispatched",
    });

    const rejectedOrderHistories = await Order.find({
      customer_id: user_id,
      status: "rejected",
    });

    // Send a success message
    return res.json({
      success: true,
      rejectedOrderHistories,
      dispatchedOrderHistories,
      pendingOrderHistories,
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default getOrderHistories;
