import {Schema, model} from "mongoose";

const questions = new Schema({
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
        default: 10
    }    
})

const quizSchema = new Schema({
    title: {
        type: String
    }
    ,
    questions : [questions]
})

export const Quiz = model("Quiz", quizSchema);