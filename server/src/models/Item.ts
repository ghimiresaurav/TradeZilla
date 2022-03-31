import mongoose from "mongoose";

interface BoughtItemType {
  item_id: mongoose.Types.ObjectId;
  quantity: Number;
  addedOn: Date;
}

const BoughtItemSchema = new mongoose.Schema<BoughtItemType>({
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

export { BoughtItemSchema, BoughtItemType };
