import mongoose from "mongoose";
import { BoughtItemSchema, BoughtItemType } from "./Item";

interface UserType {
  name: string;
  email: string;
  password: string;
  dob: Date;
  joinedOn: Date;
  isActive: boolean;
  cart: [mongoose.Types.ObjectId];
  boughtItem: [BoughtItemType];
  // cart: [ItemType];
}

const UserSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: (e: string) =>
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          e
        ),
      message: (props) => `${props.value} is not a valid email.`,
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
    hide: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  joinedOn: {
    type: Date,
    immutable: true,
    default: new Date(),
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  cart: {
    type: [mongoose.Types.ObjectId],
  },
  boughtItem: {
    type: [BoughtItemSchema],
  },
});

const model = mongoose.model<UserType>("User", UserSchema);
export { model as User, UserType };
