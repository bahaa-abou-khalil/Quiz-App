import {Schema, model} from "mongoose";

const quizSchema = new Schema({
    question : {
        type: String
    },
    options : {
        type: [String]
    },
    answer: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
})

export const Quiz = model("Quiz", quizSchema);