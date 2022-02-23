import mongoose from "mongoose";

interface ItemType {
  item_id: mongoose.Types.ObjectId;
  quantity: Number;
  addedOn: Date;
}

const ItemSchema = new mongoose.Schema<ItemType>({
  item_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  addedOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

export { ItemSchema, ItemType };
