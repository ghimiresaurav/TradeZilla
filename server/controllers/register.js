import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import bcrypt from "bcrypt";

dotenv.config();

const register = async (req, res) => {
  // Extract user-inputted information from request object
  const { name, email, password, dob } = req.body;

  // Connect to the atlas database
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Connected to atlas"))
    .catch((err) => console.error(`Error: ${err}`));

  // Check whether the email is already registered or not
  const userWithSameEmail = await User.findOne({ email });

  // If email is already regsitered, return a message
  if (userWithSameEmail != null)
    return res.json({ success: false, message: "User already exists" });

  // Check if the password is strong enough
  if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
      password
    )
  )
    // Return a message is password is not strong enough
    return res.json({
      success: false,
      message: "Password is not strong enough.",
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
    return res.json({ success: true, message: "User registration complete." });
  } catch (e) {
    // If something goes wrong, send a message
    return res.json({ success: false, message: e.message });
  }
};

export default register;
