import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
import { Product } from "../models/Product";
import { Order } from "../models/Order";

const userInfo = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get user id and user
  const user_id = res.locals.id;
  const user = await User.findById(user_id);

  // Send false message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  // For vendor
  // Get the count of own products
  const vendorProductsCount = await Product.count({ vendor: user_id });
  const vendorDispatchedOrdersCount = await Order.count({
    vendor_id: user_id,
    status: "dispatched",
  });
  const vendorPendingOrdersCount = await Order.count({
    vendor_id: user_id,
    status: "pending",
  });

  // For customer
  const customerDispatchedOrdersCount = await Order.count({
    customer_id: user_id,
    status: "dispatched",
  });
  const customerPendingOrdersCount = await Order.count({
    customer_id: user_id,
    status: "pending",
  });

  const extras = {
    vendorProductsCount,
    vendorPendingOrdersCount,
    vendorDispatchedOrdersCount,
    customerDispatchedOrdersCount,
    customerPendingOrdersCount,
  };

  return res.json({
    success: true,
    user,
    extras,
  });
};

export default userInfo;
