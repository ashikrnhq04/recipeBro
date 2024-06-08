import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  author: {
    require: true,
    type: String,
  },
  activeTime: {
    require: true,
    type: String,
  },
  totalTime: {
    require: true,
    type: String,
  },
  thumbnail: {
    require: true,
    type: String,
  },
  image: {
    require: true,
    type: String,
  },
  category: {
    require: true,
    type: String,
  },
  serves: {
    require: true,
    type: Number,
  },
  rating: {
    require: true,
    type: Number,
  },
  steps: {
    require: true,
    type: Array,
  },
});

export const recipesModel =
  mongoose.models?.recipes ?? mongoose.model("recipes", schema);
