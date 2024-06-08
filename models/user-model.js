import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    require: true,
    type: String,
  },
  lastName: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  favourites: {
    require: true,
    type: Array,
    default: [],
  },
});

export const userModel =
  mongoose.models?.users || mongoose.model("users", schema);
