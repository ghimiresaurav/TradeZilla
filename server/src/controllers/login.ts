import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User, UserType } from "../models/User";
import { ValidToken, ValidTokenType } from "../models/ValidToken";

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
    return res.json({ success: false, message: "User does not exist" });

  // Check if the user entered correct password
  const isPasswordCorrect: boolean = await bcrypt.compare(
    password,
    <string>user.password
  );

  // If password is incorrect, send an error message
  if (!isPasswordCorrect)
    return res
      .status(401)
      .json({ success: false, message: "Incorrect Password" });

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

  try {
    //create an instance of the valid token
    const validToken = await ValidToken.create({
      token,
    });

    //save the token to database
    await validToken.save();
  } catch (e: any) {
    console.error(e.message);
  }

  // Return a success message with the token and other useful information
  return res.json({
    success: true,
    message: "Login Successful :)",
    token,
    id: user._id,
    name: user.name,
  });
};

export default login;
