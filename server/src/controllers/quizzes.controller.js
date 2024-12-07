import { Quiz } from "../models/quiz.model.js"

export const getQuizzes = async (req,res)=>{
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes); 
    } catch (error) {
        console.error("error getting quizzes: ", error);
        res.status(500).json({ error: "error getting quizzes" });
    }
    
}