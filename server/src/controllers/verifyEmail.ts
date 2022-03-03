import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { OTP, OTPType } from "../models/OTP";
import { User } from "../models/User";

const verifyEmail = async (req: Request, res: Response) => {
  const { otp }: { otp: Number } = req.body;
  const user_id = res.locals.id;

  // Connect to atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Get the OTP(associated to the requesting user) from database
  const otpInDB = await OTP.findOne({ user: user_id });

  // If no OTP is found, send an error message
  if (!otpInDB)
    return res.json({
      success: false,
      message: "There is no OTP associated to the user.",
    });

  // Check if the user entered OTP is correct
  const isOtpCorrect: Boolean = await bcrypt.compare(
    otp.toString(),
    otpInDB.code
  );

  // If the user entered OTP is incorrect, send an error message
  if (!isOtpCorrect)
    return res.json({ success: false, message: "Incorrect OTP" });

  // If everything is okay
  //delete the otp from database
  await OTP.deleteMany({ user: user_id });
  //update the isActive flag of the user to true
  // const user = await User.findById(user_id);
  await User.updateOne({ _id: user_id }, { isActive: true });
  // user?.isActive = true;
  return res.json({ success: true, message: "Email verified" });
};

export default verifyEmail;
