import React, {useState, useContext} from "react";
import { QuizzesContext } from "../contexts/quizzesContext";
import { useLocation } from "react-router-dom";
const Quiz = () => {
    const location = useLocation();
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const {quizzes} = useContext(QuizzesContext);

    const quizId = location.pathname.split("/").pop();

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const listQuizzes=()=>{
        quizzes.map((quiz, index)=>{
            <div className="quiz flex column">
            <h3 className="black-txt">Qustion {index}</h3>
            <div className="question-container primary-bg">
                <p>{quiz.question}</p>
            </div>
            <div className="options-container flex column">
                <label>
                    <input
                    type="radio"
                    name="q1"
                    value={quiz.options[0]}
                    checked={selectedOption === quiz.options[0]}
                    onChange={handleChange}
                    />
                    {quiz.options[0]}
                </label>
                <label>
                    <input
                        type="radio"
                        name={index}
                        value={quiz.options[1]}
                        checked={selectedOption === quiz.options[1]}
                        onChange={handleChange}
                    />
                    {quiz.options[1]}
                </label>
                <label>
                    <input
                        type="radio"
                        name={index}
                        value={quiz.options[2]}
                        checked={selectedOption === quiz.options[2]}
                        onChange={handleChange}
                    />
                    {quiz.options[2]}
                </label>
                <label>
                    <input
                        type="radio"
                        name={index}
                        value={quiz.options[3]}
                        checked={selectedOption === quiz.options[3]}
                        onChange={handleChange}
                    />
                    {quiz.options[3]}
                </label>

                <p>Selected Option: {selectedOption}</p>
            </div>

        </div>
        })
    }

    return (
        <div className="quizzes-container flex column">
            {listQuizzes}
        </div>
    );
};

export default Quiz;
