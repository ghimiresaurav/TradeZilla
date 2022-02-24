import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const verifyLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers["authorization"];
  //   console.log(req.headers);
  const token = authHeaders && authHeaders.split(" ")[1];
  if (!token) return res.status(401).send("You need to login to continue.");
  const decodedToken: any = jwt.verify(token, <string>process.env.TOKEN_SECRET);

  // Check if the id contained in the token is the same as the one sent in req.body
  if (decodedToken.id !== req.body.id)
    return res.status(401).send("Unauthorized");

  res.locals.id = decodedToken.id;
  res.locals.email = decodedToken.email;
  return next();
};

export default verifyLoggedIn;
