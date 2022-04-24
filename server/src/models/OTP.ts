import mongoose from "mongoose";

interface OTPType {
  user: mongoose.Types.ObjectId;
  code: string;
  expiresAt: Date;
}

const OTPSchema = new mongoose.Schema<OTPType>({
  user: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  code: {
    required: true,
    type: String,
  },
  expiresAt: {
    required: true,
    type: Date,
    default: () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() + 2);
      return date;
    },
  },
});

const OTPModel = mongoose.model<OTPType>("OTP", OTPSchema);
export { OTPModel as OTP, OTPType };
