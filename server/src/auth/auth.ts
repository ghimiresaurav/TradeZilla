import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import { ValidToken, ValidTokenType } from "../models/ValidToken";

const verifyLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers["authorization"];
  //   console.log(req.headers);
  const token = authHeaders && authHeaders.split(" ")[1];
  if (!token) return res.status(401).send("You need to login to continue.");

  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  console.log(token);
  const tokenInDB = await ValidToken.find({ token });
  console.log(tokenInDB, typeof tokenInDB);

  const decodedToken: any = jwt.verify(token, <string>process.env.TOKEN_SECRET);

  // Check if the id contained in the token is the same as the one sent in req.body
  if (decodedToken.id !== req.body.id)
    return res.status(401).send("Unauthorized");

  res.locals.id = decodedToken.id;
  res.locals.email = decodedToken.email;
  return next();
};

export default verifyLoggedIn;
