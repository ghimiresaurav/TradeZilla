import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const order = async (req: Request, res: Response) => {
  // Extract user-inputted information from request object
  const {
    quantity,
    location,
    message,
    paid,
  }: {
    quantity: number;
    location: string;
    message: string;
    paid: boolean;
  } = req.body;

  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get product and customer id
  const product_id = req.params.p_id;
  // const product_id = new mongoose.Types.ObjectId(req.params.p_id);
  const customer_id = new mongoose.Types.ObjectId(res.locals.id);

  // Check if the product_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(product_id))
    return res.json({
      success: false,
      message: "Invalid product Id",
    });

  // Find the product in database
  const product = await Product.findById(product_id);

  // Send an error message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found.",
    });

  // Get the vendor id from database
  const vendor_id = new mongoose.Types.ObjectId(product.vendor);

  // Check if the vendor and customer have same id
  if (vendor_id.equals(customer_id))
    return res.json({
      success: false,
      message: "You can not order your own product.",
    });

  try {
    // Create an instance of Order
    const createOrder = await Order.create({
      title: product.title,
      price: product.price,
      image: product.images,
      status: "pending",
      vendor_id,
      product_id,
      customer_id,
      quantity,
      location,
      message,
      paid,
    });

    // Save the order to the database
    await createOrder.save();

    // Send a success message
    return res.json({
      success: true,
      message: "Order has been sent.",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default order;
