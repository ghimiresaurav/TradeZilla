import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { OTP, OTPType } from "../models/OTP";
import { User } from "../models/User";

const checkOtp = async (validOTPs: any, otp: string): Promise<Boolean> => {
  for (let i = 0; i < validOTPs.length; i++) {
    const validOTP = validOTPs[i];
    if (await bcrypt.compare(otp.toString(), validOTP.code)) return true;
  }
  return false;
};

const verifyEmail = async (req: Request, res: Response) => {
  // Extract otp entered by user from req.body
  const { otp }: { otp: string } = req.body;
  // Get user id from res.locals, which was assigned by auth function
  const user_id = res.locals.id;

  // Connect to atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`error: ${e.message}`));

  // Get the OTP(associated to the requesting user) from database
  let OTPs = await OTP.find({ user: user_id });

  // If no OTP is found, send an error message
  if (!OTPs.length)
    return res.json({
      success: false,
      message: "There is no OTP associated to the user.",
    });

  // Filter the valid and expired OTPs
  // Get only the OTPs that have not expired yet
  const validOTPs = OTPs.filter((otp) => {
    const rn = new Date();
    if (rn.getTime() < otp.expiresAt.getTime()) return otp;
  });

  // Get the expired OTPs (OTPs that do not exist in validOTPs)
  const expiredOTPs = OTPs.filter((otp) => !validOTPs.includes(otp));

  // Delete the expired OTPS from the database
  expiredOTPs.forEach(async (otp) => {
    await OTP.findByIdAndDelete(otp._id);
  });

  // If there is no valid OTP, send an error message
  if (!validOTPs.length)
    return res.json({
      success: false,
      message: "Your OTP has already expired",
    });

  // Check if the user inputted OTP is correct
  let isOtpCorrect: Boolean = await checkOtp(validOTPs, otp);

  // If the otp entered by the user is incorrect, send an error message
  if (!isOtpCorrect)
    return res.json({ success: false, message: "Incorrect OTP" });

  // If everything is okay

  // Delete the remaining OTPS from database
  validOTPs.forEach(async (otp) => {
    await OTP.findByIdAndDelete(otp._id);
  });

  // update the isActive flag of the user to true
  await User.updateOne({ _id: user_id }, { isActive: true });
  return res.json({ success: true, message: "Email verified" });
};

export default verifyEmail;
