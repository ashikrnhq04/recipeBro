"use server";

import { redirect } from "next/navigation";

const { findUserByEmail, createUser, addInFavorite } = require("@/DB/queries");

async function createAccount(formData) {
  const FormData = formData;

  const user = Object.fromEntries(FormData);

  await createUser(user);
  redirect("/login");
}

async function makeLogin(formData) {
  const credential = {};
  credential.email = formData.get("email");
  credential.password = formData.get("password");

  const user = await findUserByEmail(credential);

  return user;
}

async function makeFavorite(id, authId) {
  try {
    await addInFavorite(id, authId);
  } catch (error) {
    console.log(error);
  }
}

export { makeLogin, createAccount, makeFavorite };
