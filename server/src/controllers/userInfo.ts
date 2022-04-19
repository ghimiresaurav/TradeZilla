import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

const userInfo = async (req: Request, res: Response) => {
  console.log("Working!");
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get user and product id
  const user_id = res.locals.id;

  // Get the user id
  const user = await User.findById(user_id);

  // Send false message if user not found
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  return res.json({
    success: true,
    user,
  });
};

export default userInfo;
