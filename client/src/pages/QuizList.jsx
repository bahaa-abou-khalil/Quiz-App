import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import QuizCard from "../components/QuizCard";
import { QuizzesContext } from "./../contexts/quizzesContext";
const Quiz = () => {
    const {quizzes} = useContext(QuizzesContext);
    const navigate = useNavigate();
    
    const quizzesList = quizzes.map(quiz=>(
        <div className="quiz-card flex center column primary-bg black-txt">
      <p>{quiz.title}</p>
      <button className="filled-btn white-bg"
      onClick={()=>navigate("/quiz")}
      >Start QUiz</button>
      </div>

    ))

    return (
        <div className="quiz-page flex row center">
                {quizzesList}
        </div>
    )
}

export default Quiz;