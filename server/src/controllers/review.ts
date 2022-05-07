import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import { User } from "../models/User";

// Import function to check if the id from parameter is valid
import checkValidObjectId from "../utils/checkValidObjectId";

const addReview = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract product id and user id
  const product_id = req.params.p_id;
  // const product_id = new mongoose.Types.ObjectId(req.params.p_id);
  const user_id = new mongoose.Types.ObjectId(res.locals.id);

  // Check if the product_id in parameter is valid
  // If the id is invalid, return an error message
  if (!checkValidObjectId(product_id))
    return res.json({
      success: false,
      message: "Invalid product Id",
    });

  // Find the product and user in database
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

  // Check if the vendor is trying to review own product
  if (product.vendor.equals(user_id)) {
    return res.json({
      success: false,
      message: "Review cannot be done by the vendor",
    });
  }

  // Check if the user has bought the product they are trying to review
  const userHasBought = user.boughtItems.some((i) =>
    i.item_id.equals(product_id)
  );
  if (!userHasBought) {
    return res.json({
      success: false,
      message: "Review can only be done if you have bought the product",
    });
  }

  try {
    // Get all the reviews from the product
    const reviews = product.reviews;

    // Check if the user has already reviewed
    const review = reviews.filter((r) => r.user.equals(user_id));

    // If yes then update the previous review
    if (review.length) {
      let reviewToUpdate = review[0];
      reviewToUpdate.date = new Date();
      reviewToUpdate.rating = req.body.rating;
      reviewToUpdate.body = req.body.review;
    } else {
      // Else add review to product
      reviews.push({
        user: user_id,
        date: new Date(),
        body: req.body.review,
        rating: req.body.rating,
        name: user.name,
      });
    }

    // Calculate the rating of the product
    const sumRating = reviews.reduce((acc, elem) => acc + elem.rating, 0);
    product.rating = sumRating / reviews.length;

    // Save the added review and update the rating
    product.save();

    // Send a success message
    return res.json({
      success: true,
      message: "Your review has been added.",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default addReview;
