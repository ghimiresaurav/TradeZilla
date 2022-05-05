import mongoose from "mongoose";

interface InquiryType {
  user: mongoose.Types.ObjectId;
  date: Date;
  question: string;
  answer: string;
  name: string;
  answeredOn: Date;
}

const InquirySchema = new mongoose.Schema<InquiryType>({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
    immutable: true,
    required: true,
  },
  question: {
    type: String,
    minlength: 5,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
  },
  answeredOn: {
    type: Date,
    immutable: true,
  },
});

export { InquiryType, InquirySchema };
