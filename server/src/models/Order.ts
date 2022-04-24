import mongoose from "mongoose";

interface OrderType {
  vendor_id: mongoose.Types.ObjectId;
  product_id: mongoose.Types.ObjectId;
  customer_id: mongoose.Types.ObjectId;
  title: string;
  price: number;
  quantity: number;
  location: string;
  message: string;
  date: Date;
  paid: boolean;
  // dispatched: boolean;
  status: string;
  dispatchedOn?: Date;
  image: string;
}

const OrderSchema = new mongoose.Schema<OrderType>({
  vendor_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  customer_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    minlength: 5,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    minlength: 5,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    minlength: 5,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
    immutable: true,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  // dispatched: {
  //   type: Boolean,
  //   default: false,
  // },
  status: {
    type: String,
    required: true,
  },
  dispatchedOn: {
    type: Date,
  },
  image: {
    type: String,
  },
});

const OrderModel = mongoose.model<OrderType>("Order", OrderSchema);
export { OrderModel as Order, OrderType };
// export { OrderType, OrderSchema };
