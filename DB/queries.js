import { recipesModel } from "@/models/recipes-model";
import { userModel } from "@/models/user-model";

import { MongoIdToString } from "@/util/mongo-util";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

async function getRecipes() {
  try {
    const recipes = await recipesModel.find().lean();

    return MongoIdToString(recipes);
  } catch (error) {
    console.log(error);
    if (error.name === "MongooseError") {
      throw new Error("Database connection failed!");
    }
    throw Error("Something went wrong in fetching recipe's data!");
  }
}

async function getRecipeById(id) {
  try {
    const recipe = await recipesModel.findById(id).lean();

    return MongoIdToString(recipe);
  } catch (error) {
    console.log(error);
    if (error.name === "MongooseError") {
      throw new Error("Database connection failed!");
    }
    return notFound();
  }
}

async function getRecipesByCategory(category) {
  try {
    const recipes = await recipesModel.find(category).lean();
    return MongoIdToString(recipes, "array");
  } catch (error) {
    console.log(error);
    if (error.name === "MongooseError") {
      throw new Error("Database connection failed!");
    }
    return notFound();
  }
}

async function addInFavorite(id, authId) {
  try {
    const user = await userModel.findById(authId);
    const recipe = await recipesModel.findById(id);
    if (user && recipe) {
      const isFavourite = user.favourites?.find(
        (id) => id.toString() === recipe._id.toString() || false
      );

      if (isFavourite) {
        user.favourites.pull(recipe._id); // No need to create a new ObjectId instance
      } else {
        user.favourites.push(recipe._id); // No need to create a new ObjectId instance
      }
      await user.save();
      revalidatePath("/");
    }
  } catch (error) {
    console.log(error);
  }
}

async function createUser(formData) {
  try {
    const userCreation = await userModel.create(formData);
    if (userCreation?._id) {
      return "Success";
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function findUserByEmail(formData) {
  const userData = await userModel.findOne(formData).lean();

  if (userData) {
    return MongoIdToString(userData);
  }
  return null;
}

export {
  getRecipes,
  getRecipeById,
  getRecipesByCategory,
  findUserByEmail,
  createUser,
  addInFavorite,
};
