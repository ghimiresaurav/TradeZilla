import mongoose from "mongoose";

interface ReviewType {
  user: mongoose.Types.ObjectId;
  date: Date;
  body: string;
  rating: number;
}

const ReviewSchema = new mongoose.Schema<ReviewType>({
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
  body: {
    type: String,
    minlength: 5,
  },
  rating: {
    type: Number,
    minlength: 5,
  },
});

export { ReviewType, ReviewSchema };