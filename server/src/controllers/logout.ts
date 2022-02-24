import { Request, Response } from "express";
import mongoose from "mongoose";
import { ValidToken } from "../models/ValidToken";

const logout = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Extract token from headers
  // This does not need any confirmation or test that token exists because logout request can only be sent by logged in users and that is verified before this function is called.
  const token = req.headers["authorization"]?.split(" ")[1];

  // Delete the token from the database
  await ValidToken.findOneAndDelete({ token });

  // Send a status and message to the user saying logout successful
  return res.status(204).send("Log out successfull");
};

export default logout;
