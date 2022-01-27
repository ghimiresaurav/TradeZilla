import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config({ path: "../.env" });

const register = async (req, res) => {
  const { name, email, password, dob } = req.body;
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Connected to cluster"))
    .catch((err) => console.error(`Error: ${err}`));

  // const userWithSameEmail = await User.findOne({ email: email });
  // console.log(userWithSameEmail);
};

export default register;
