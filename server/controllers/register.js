import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config({ path: "../secrets.env" });

const register = async (req, res) => {
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Connected to cluster"))
    .catch((err) => console.error(`Error: ${err}`));
};

export default register;
