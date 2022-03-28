import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Import database models
import { User, UserType } from "../models/User";

// Import Controllers
import sendOTP from "./email";

const login = async (req: Request, res: Response) => {
  // Extract user inputs
  const { email, password }: { email: string; password: string } = req.body;
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Find if the user exists
  const user = await User.findOne({ email });

  //If the user does not exist, send an error message
  if (!user)
    return res.json({ success: false, message: "The email address you entered isn't connected to an account" });

  // Check if the user entered correct password
  const isPasswordCorrect: boolean = await bcrypt.compare(
    password,
    <string>user.password
  );

  // If password is incorrect, send an error message
  if (!isPasswordCorrect)
    return res
      .status(401)
      .json({ success: false, message: "The password that you've entered is incorrect." });

  // If everything is okay, sign a token with the user's information
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user._id,
    },
    <string>process.env.TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  // If email of the user is not verified, send an OTP to the user for email verification
  if (!user.isActive) sendOTP(user.email, user._id.toString());

  // Return a success message with the token and other useful information
  return res.json({
    success: true,
    message: "Login Successful :)",
    token,
    id: user._id,
    name: user.name,
    isActive: user.isActive,
    email,
  });
};

export default login;
