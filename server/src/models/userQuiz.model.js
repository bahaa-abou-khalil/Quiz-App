import { Schema, model } from "mongoose";

const userQuizSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
  },
  quiz_id: {
    type: Number,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: true
  }
});

export const UserQuiz = model("UserQuiz", userQuizSchema);
