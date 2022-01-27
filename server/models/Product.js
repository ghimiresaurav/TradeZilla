// import { mongoose } from "mongoose";
import { Mongoose } from "mongoose";
import mongooseHidden from "mongoose-hidden";
// mongooseHidden();

const ProductSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  manDate: Date,
  expDate: Date,
});

UserSchema.plugin(mongooseHidden());
export default mongoose.model("Product", ProductSchema);