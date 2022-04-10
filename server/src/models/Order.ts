import mongoose from "mongoose";

interface OrderType {
  vendor_id: mongoose.Types.ObjectId;
  product_id: mongoose.Types.ObjectId;
  customer_id: mongoose.Types.ObjectId;
  quantity: number;
  location: string;
  message: string;
  date: Date;
  paid: boolean;
  dispatched: boolean;
  dispatchedOn?: Date;
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
  dispatched: {
    type: Boolean,
    default: false,
  },
  dispatchedOn: {
    type: Date,
  }

});

const OrderModel = mongoose.model<OrderType>("Order", OrderSchema);
export { OrderModel as Order, OrderType };
// export { OrderType, OrderSchema };