import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ValidToken, ValidTokenType } from "../models/ValidToken";

const verifyLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extract token from the req.headers
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];

  // If token does not exist, send an error status
  if (!token) return res.status(401).send("You need to login to continue.");

  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Find the token extracted from headers in the database
  const tokenInDB: ValidTokenType | null = await ValidToken.findOne({ token });

  // If the token does not exist in database
  // Or if the token stored in database is not same as the one sent by user
  if (!tokenInDB || tokenInDB.token !== token)
    // Send an error status
    return res.status(401).send("Unauthorized");

  // Decode the toeken
  const decodedToken: any = jwt.verify(token, <string>process.env.TOKEN_SECRET);

  // Check if the id contained in the token is the same as the one sent in req.body
  if (decodedToken.id !== req.body.id)
    return res.status(401).send("Unauthorized");

  // Set the user id and email in res.locals
  // These values can be accessed by next functions
  res.locals.id = decodedToken.id;
  res.locals.email = decodedToken.email;
  return next();
};

export default verifyLoggedIn;
