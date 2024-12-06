import { connect } from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect("mongodb://localhost:27017/quiz-app");

    console.log("Connected to database");
  } catch (error) {
    console.log(`error connecting to database: ${error}`);
  }
};

export default connectToDatabase;
