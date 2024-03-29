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

  // Check if the item is already is in cart of the user
  const itemWithSameId = user.cart.filter((cartItem) =>
    cartItem.item_id.equals(product_id)
  );
  // itemWithSameId would have the the items in the cart that have the same id as the product that user is trying to add to cart
  // So if the item is already in the user's cart, itemWithSameId.length should return non-zero(truthy) value
  if (itemWithSameId.length)
    // If the product is already on cart, send an error message
    return res.json({ success: false, message: "This item already on cart" });

  const image = product.images.split(", ")[0];

  try {
    // Get the items in the cart of the requesting user
    const itemsInCart = user.cart;

    // Add the new item to the user's cart
    itemsInCart.push({
      item_id: product_id,
      quantity: req.body.quantity,
      addedOn: new Date(),
      price: product.price,
      name: product.title,
      image,
    });

    // Save the changes
    await user.save();

    // Send a success message
    return res.json({
      success: true,
      message: "Product added to cart",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default addToCart;
