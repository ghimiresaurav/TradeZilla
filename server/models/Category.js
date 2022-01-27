// import { mongoose } from "mongoose";
import { Mongoose } from "mongoose";
import mongooseHidden from "mongoose-hidden";
// mongooseHidden();

const CategorySchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  id: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

UserSchema.plugin(mongooseHidden());
export default mongoose.model("Category", CategorySchema);