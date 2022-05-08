import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import sendEmail from "./email";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const rejectOrder = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error:${e.message}`));

  // Get the order id
  const order_id = req.params.o_id;

  // Check if the order_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(order_id))
    return res.json({
      success: false,
      message: "Invalid order Id",
    });

  // Find the order in database
  const order = await Order.findById(order_id);

  // Send an error message if order not found
  if (!order)
    return res.json({
      success: false,
      message: "Order not found",
    });

  if (order.status === "dispatched")
    return res.json({
      success: false,
      message: "This order is already dispatched",
    });

  // Get vendor id from database
  const vendor_id = new mongoose.Types.ObjectId(order.vendor_id);

  // Check if requesting user is the vendor themselves
  if (!vendor_id.equals(res.locals.id))
    return res.json({
      success: false,
      message: "You can not dispatch this product.",
    });

  // Get customer and product id from database
  const customer_id = new mongoose.Types.ObjectId(order.customer_id);
  const product_id = new mongoose.Types.ObjectId(order.product_id);

  // Find the customer and product in database
  const customer = await User.findById(customer_id);
  const product = await Product.findById(product_id);

  // Send an error message if user not found
  if (!customer)
    return res.json({
      success: false,
      message: "Customer not found",
    });

  // Send an error message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  try {
    // Set order status to 'rejected'
    order.status = "rejected";
    order.dispatchedOn = new Date();
    await order.save();

    const currentDate = new Date();
    // Send an email to the buyer so that they know their product has been dispatched
    // Create mail options for sending the email
    // This object specifies the sender, receiver, subject and email body
    const mailOptions = {
      subject: "PRODUCT REJECTED",

      text: `DO NOT REPLY TO THIS EMAIL.\nYour order ${order.quantity} of ${
        product.title
      } has been rejected on ${currentDate.getFullYear()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()} - ${currentDate.getHours()}:${currentDate.getMinutes()}.\n.`,

      html: `<h1>DO NOT REPLY TO THIS EMAIL</h1><br/>
      <img style="height: 200px; width: 300px; object-fit:cover" src=${
        product.images.split(", ")[0]
      }><br/>
    <p>Your order <b>${order.quantity}</b> of <b>${
        product.title
      }</b> has been rejected on <b>${currentDate.getFullYear()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()} - ${currentDate.getHours()}:${currentDate.getMinutes()}</b></p>
    <strong>-TradeZilla</strong>`,
    };

    // Send the email
    sendEmail(customer.email, mailOptions);

    // Send a success message
    return res.json({
      success: true,
      message: "The order was rejected.",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default rejectOrder;
