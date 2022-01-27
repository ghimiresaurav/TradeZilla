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
      validator: function (e) {
        const emailRegex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return emailRegex.test(e);
      },
      message: (props) => `${props.value} is not a valid email.`,
    },
    required: true,
  },
  password: {
    type: String,
    validate: {
      validator: function (p) {
        const passwordRegex =
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        return passwordRegex.test(p);
      },
      message: "The password is not strong enough.",
    },
    required: true,
    hide: true,
  },
  joinedOn: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
});

UserSchema.plugin(mongooseHidden());
export default mongoose.model("User", UserSchema);
