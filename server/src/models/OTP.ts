import mongoose from "mongoose";

interface OTPType {
  user: mongoose.Types.ObjectId;
  OTP: number;
  expiresAt: Date;
}

const OTPSchema = new mongoose.Schema<OTPType>({
  user: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  OTP: {
    required: true,
    type: Number,
  },
  expiresAt: {
    required: true,
    type: Date,
    default: () => {
      const date = new Date();
      date.setHours(date.getHours() + 1);
      return date;
    },
  },
});

const OTPModel = mongoose.model<OTPType>("OTP", OTPSchema);
export { OTPModel as OTP, OTPType };
