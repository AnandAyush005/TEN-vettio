import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "vettio",
    });
    isConnected = true;
  } catch (err) {
    throw new Error("Error : "+err.message)
  }
}
