import { OTP, OTPType } from "../models/OTP";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import sendEmail from "./email";

const min: number = 100000;
const max: number = 999999;

const getOTP = () => Math.round(Math.random() * (max - min) + min);

const sendOTP = async (recipient: string, user_id: string) => {
  // Genereate a random 6 digit number
  const verificationCode: number = getOTP();

  // Create mail options for sending the email
  // This object specifies the sender, receiver, subject and email body
  const mailOptions = {
    subject: "EMAIL VERIFICAITON",

    text: `DO NOT REPLY TO THIS EMAIL.\nYOUR EMAIL VERIFICATION CODE IS ${verificationCode}.\nDO NOT SHARE THIS CODE WITH ANYONE.`,

    html: `<h1>DO NOT REPLY TO THIS EMAIL</h1>
    <h2>YOUR VERIFICATION CODE IS ${verificationCode}</h2>
    <h2>DO NOT SHARE THIS CODE WITH ANYONE</h2>
    <strong>-TradeZilla</strong>`,
  };

  // Connect to atlas databse
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  try {
    // Create an instance of OTP
    const otp = await OTP.create({
      code: await bcrypt.hash(verificationCode.toString(), 10),
      user: user_id,
    });

    // Save the OTP to database
    await otp.save();

    // Send email to the user
    sendEmail(recipient, mailOptions);
  } catch (e) {
    console.error(`ERROR: ${e}`);
  }
};

export default sendOTP;
