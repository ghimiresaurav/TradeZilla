import mongoose from "mongoose";

interface InquiryType {
  user: mongoose.Types.ObjectId;
  date: Date;
  question: string;
  answer: string;
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
})

interface ProductType {
  title: string;
  vendor: mongoose.Types.ObjectId;
  quantity: Number;
  price: Number;
  postedOn: Date;
  mfgDate: Date;
  rating: Number;
  category: string;
  subCategory: string;
  description: string;
  images: string;
  inquiries: [InquiryType];
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
    required: true,
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
    required: true,
  },
  inquiries: {
    type: [InquirySchema],
    // default: [],
  },
});

const ProductModel = mongoose.model<ProductType>("Product", ProductSchema);
export { ProductModel as Product, ProductType };
