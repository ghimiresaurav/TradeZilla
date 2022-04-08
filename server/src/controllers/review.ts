import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import { User } from "../models/User";

const addReview = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id and user id
  const product_id = new mongoose.Types.ObjectId(req.params.p_id);
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  // Find the product in database
  const product = await Product.findById(product_id);

  // Send false message if product not found
  if (!product)
    return res.json({
      success: false,
      message: "Product not found",
    });

  // Find the user in database
  const user = await User.findById(user_id);

  // Send false message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  // Check if the user has bought the item they are trying to review
  console.log(user.boughtItems, product_id)
  const userHasBought = user.boughtItems.some(i => i.item_id.equals(product_id))
  if (!userHasBought) {
    return res.json({
      success: false,
      message: "Review can only be done if you have bought the product",
    });
  }

  try {
    const reviews = product.reviews;

    // Add question and other information to product
    reviews.push({
      user: user_id,
      date: new Date,
      body: req.body.review,
      rating: req.body.rate,
    });

    const sumRating = reviews.reduce((acc, elem) => acc + elem.rating, 0);
    product.rating = sumRating / reviews.length;

    // Save the added review and update the rating
    product.save();

    // Send a success message
    return res.json({
      success: true,
      message: "You review has been added."
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }

}

export default addReview;