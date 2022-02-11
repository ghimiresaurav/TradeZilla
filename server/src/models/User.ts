import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config({ path: "../../.env" });

interface UserType {
  name: string;
  email: string;
  password: String;
  dob: Date;
  joinedOn: Date;
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
});

const model = mongoose.model<UserType>("User", UserSchema);
export { model as User, UserType };
