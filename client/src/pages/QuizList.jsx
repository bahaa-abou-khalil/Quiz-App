import React, {useContext} from "react";
import QuizCard from "../components/QuizCard";
import { QuizzesContext } from "./../contexts/quizzesContext";
const Quiz = () => {
    const {quizzes} = useContext(QuizzesContext);
    return (
        <div className="quiz-page flex row center">
                <QuizCard />
        </div>
    )
}

export default Quiz;