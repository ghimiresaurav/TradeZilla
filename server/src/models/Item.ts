import mongoose from "mongoose";

interface ItemType {
  item_id: mongoose.Types.ObjectId;
  name?: string;
  quantity: Number;
  price?: Number;
  addedOn: Date;
  image?: String;
}

const ItemSchema = new mongoose.Schema<ItemType>({
  item_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  addedOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  image: {
    type: String,
    // required: true,
  },
});

export { ItemSchema, ItemType };
