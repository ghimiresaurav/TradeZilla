import { Schema, model, Types } from "mongoose";

interface ProductType {
  title: string;
  vendor: Types.ObjectId;
  postedOn: Date;
  quantity: Number;
  rating: Number;
  mfgDate: Date;
}

const ProductSchema = new Schema<ProductType>({
  title: {
    type: String,
    required: true,
    minlength: 10,
  },
  vendor: {
    required: true,
    type: Types.ObjectId,
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
});

const ProductModel = model<ProductType>("Product", ProductSchema);
export { ProductModel as Product, ProductType };
