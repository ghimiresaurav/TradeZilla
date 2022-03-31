import mongoose from "mongoose";

interface ProductType {
  title: string;
  vendor: mongoose.Types.ObjectId;
  postedOn: Date;
  quantity: Number;
  rating: Number;
  mfgDate: Date;
  category: string;
  subCategory: string;
  description: string;
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
  postedOn: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  mfgDate: {
    type: Date,
    required: true,
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
});

const ProductModel = mongoose.model<ProductType>("Product", ProductSchema);
export { ProductModel as Product, ProductType };

// review: {
//   rating: Number,
//   comment: String
// }
