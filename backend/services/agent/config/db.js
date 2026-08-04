import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("agent service connected to database successfully!");
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
  }
};

export default connectDb;
