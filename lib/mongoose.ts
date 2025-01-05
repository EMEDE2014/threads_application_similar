import mongoose, { mongo } from "mongoose";

let isConnect = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // evita consulta de campos desconhecido
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnect) return console.log("Alread Connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (e) {
    console.log(e);
  }
};
