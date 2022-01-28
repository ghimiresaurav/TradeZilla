import mongoose from "mongoose";
import mongooseHidden from "mongoose-hidden";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: (e) =>
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
    default: Date.now(),
  },
});

UserSchema.plugin(mongooseHidden());
export default mongoose.model("User", UserSchema);
