import React from "react"
import { useNavigate } from "react-router-dom";
const QuizCard = () =>{
    const navigate = useNavigate();
    return(
        <div className="quiz-card flex center column primary-bg black-txt">
            <p>Python Quiz</p>
            <button className="filled-btn white-bg"
            onClick={()=>navigate("/quiz")}
            >Start QUiz</button>
        </div>
    )
}

export default QuizCard;