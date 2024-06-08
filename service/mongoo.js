import mongoose from "mongoose";

let connected = false;

async function connectDB() {
  if (connected) {
    return connected;
  }
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}khanaKhazana`);

    return (connected = true);
  } catch (error) {
    console.log(error);

    throw new Error("Database connection failed!");
  }
}

export { connectDB };
