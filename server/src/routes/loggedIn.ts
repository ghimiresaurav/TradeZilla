import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/verify", (req: Request, res: Response) => {
  const userInputOTP: number = req.body.OTP;

  console.log("verification request");
});

export default router;
