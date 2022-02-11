import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { User, UserType } from "../models/User";

const register = async (req: Request, res: Response) => {
  // Extract user-inputted information from request object
  const {
    name,
    email,
    dob,
    password,
  }: {
    name: string;
    email: string;
    password: string;
    dob: Date;
  } = req.body;

  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Check whether the email is already registered or not
  const userWithSameEmail: UserType | null = await User.findOne({ email });

  // If email is already regsitered, return a message
  if (userWithSameEmail != null) {
    return res.json({ success: false, message: "user already exists" });
  }
  // Check if the password is strong enough
  if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
      password
    )
  )
    // Return a message is password is not strong enough
    return res.json({
      success: false,
      message: "The password is too weak. Try again with a stronger password.",
    });

  // Do a try-catch to validate user inputs
  try {
    // Create an instance of User
    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      dob,
    });

    // Save the user to the database
    await user.save();

    // Send a success message
    return res.json({
      success: true,
      message: "User Registration Complete :)",
    });
  } catch (e: any) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default register;
