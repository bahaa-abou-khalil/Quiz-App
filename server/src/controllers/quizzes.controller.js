import { Quiz } from "../models/quiz.model.js"

export const getQuizzes = async (req,res)=>{
    const id = req.params.id;
    try {
        if (id) {
            const quiz = await Quiz.findById(id);
      
            if (!quiz) {
              res.status(404).send({
                message: "Quiz Not Found",
              });
            }
      
            return res.json(quiz);
          }
        
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes); 
    } catch (error) {
        console.error("error getting quizzes: ", error);
        res.status(500).json({ error: "error getting quizzes" });
    }
    
}

export const createQuiz = async (req,res)=>{
    const { title, questions } = req.body;
    try{
        if (!title || !questions || questions.length === 0) {

            return res.status(500).send({
                message: "All feilds are required",
            });
        }

            const quiz = await Quiz.create({
                title, questions
            })

            return res.json(quiz);
    }
    catch(error){
        console.error("error creating quiz: ", error);
        res.status(500).json({ error: "error creating quiz" });
    }

}