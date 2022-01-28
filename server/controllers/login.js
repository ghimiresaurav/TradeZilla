import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;

  // Connect to the atlas database
  mongoose
    .connect(process.env.DB_URI)
    .catch((err) => console.error(`Error: ${err}`));

  // Find the user
  const user = await User.findOne({ email });

  // If user does not exist, send an error message
  if (!user) return res.json({ success: false, message: "User not found." });

  // Check if the user entered correct password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

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
    process.env.TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({
    success: true,
    message: "Login Successful",
    token,
    id: user._id,
    name: user.name,
  });
};

export default login;
