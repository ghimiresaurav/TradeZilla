import mongoose, { Types } from "mongoose";
import { InquiryType, InquirySchema } from "./Inquiry";
import { ReviewType, ReviewSchema } from "./Review";
interface ProductType {
  title: string;
  vendor: mongoose.Types.ObjectId;
  quantity: Number;
  price: Number;
  postedOn: Date;
  mfgDate?: Date;
  rating: Number;
  category: string;
  subCategory: string;
  description: string;
  images: string;
  inquiries: Types.DocumentArray<InquiryType & Document>;
  reviews: Types.DocumentArray<ReviewType & Document>;
}

const ProductSchema = new mongoose.Schema<ProductType>({
  title: {
    type: String,
    required: true,
    minlength: 10,
  },
  vendor: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
  },
  postedOn: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
  mfgDate: {
    type: Date,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
    minlength: 4,
  },
  subCategory: {
    type: String,
    required: true,
    minlength: 4,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  images: {
    type: String,
  },
  inquiries: {
    type: [InquirySchema],
    // default: [],
  },
  reviews: {
    type: [ReviewSchema],
  },
});

const ProductModel = mongoose.model<ProductType>("Product", ProductSchema);
export { ProductModel as Product, ProductType };
