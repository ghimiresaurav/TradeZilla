import express, { Request, Response, Router } from "express";

// Import auth function
import auth from "../auth/auth";

const router: Router = express.Router();

router.use(auth);

// router.get("/verify", (req: Request, res: Response) => {
//   const userInputOTP: number = req.body.OTP;

//   console.log("verification request");
// });

router.get("/test", (req: Request, res: Response) => {
  return res.json("welcome");
});

export default router;
