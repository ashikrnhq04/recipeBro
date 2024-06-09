"use server";

import { sleep } from "@/util/utli";
import { redirect } from "next/navigation";

const { findUserByEmail, createUser, addInFavorite } = require("@/DB/queries");

async function createAccount(formData) {
  await sleep(2000);
  return await createUser(formData);
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
