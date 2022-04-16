import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

const checkEmailVerified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Find the user in the database
  const user = await User.findById(res.locals.id);

  // If user is not found, send an error message
  if (!user)
    return res.json({
      success: false,
      message: "User not found",
    });

  // If user is not active(i.e. user has not verified their email)
  // Send an error message
  if (!user.isActive)
    return res.json({
      success: false,
      message: "You need to verify your email to continue",
    });

  // Invoke the next function if everything is fine
  next();
};

export default checkEmailVerified;
