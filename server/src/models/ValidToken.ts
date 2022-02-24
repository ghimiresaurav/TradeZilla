import mongoose from "mongoose";

interface ValidTokenType {
  token: string;
}

const ValidTokenSchema = new mongoose.Schema<ValidTokenType>({
  token: {
    type: String,
    required: true,
  },
});

const ValidTokenModel = mongoose.model<ValidTokenType>(
  "ValidToken",
  ValidTokenSchema
);
export { ValidTokenModel as ValidToken, ValidTokenType };
