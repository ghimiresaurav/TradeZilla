import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extract token from the req.headers
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  const userId = authHeaders && authHeaders.split(" ")[2];

  // If token does not exist, send an error status
  if (!token) return res.status(401).send("You need to login to continue.");

  // Decode the token
  const decodedToken: any = jwt.verify(token, <string>process.env.TOKEN_SECRET);

  // Check if the id contained in the token is the same as the one sent in authorization
  if (decodedToken.id !== userId) return res.status(401).send("Unauthorized");

  // Set the user id and email in res.locals
  // These values can be accessed by next functions
  res.locals.id = decodedToken.id;
  res.locals.email = decodedToken.email;
  return next();
};

export default verifyLoggedIn;
