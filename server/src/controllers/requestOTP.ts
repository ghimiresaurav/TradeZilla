import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

import sendOTP from "./email";

const requestOTP = async (req: Request, res: Response) => {
  // Connect to atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Find the requesting user in the database
  const requestingUser = await User.findById(res.locals.id);
  // Send an error message if no user is found
  if (!requestingUser)
    return res.json({ success: false, message: "User not found" });

  // Invoke the function to sent the email
  sendOTP(requestingUser.email.toString(), res.locals.id.toString());

  // Send a success message
  return res.json({
    success: true,
    message: `New OTP has been sent`,
  });
};

export default requestOTP;
