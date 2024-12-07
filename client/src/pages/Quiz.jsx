import React, { useState, useContext, useEffect } from "react";
import { QuizzesContext } from "../contexts/quizzesContext";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const { getQuestions, questions } = useContext(QuizzesContext);
  const quizId = location.pathname.split("/").pop();

  useEffect(() => {
    getQuestions(quizId);
  }, [quizId]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  if (!questions || !questions.questions) {
    return <p>Loading questions..</p>;
  }

  const listQuestions = () => {
    return questions.questions.map((question, index) => (
      <div key={index} className="quiz flex column">
        <h3 className="black-txt">Question {index + 1}</h3>
        <div className="question-container primary-bg">
          <p>{question.question}</p>
        </div>
        <div className="options-container flex column">
          {question.options.map((option, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`q${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="quizzes-container flex column">
      {listQuestions()}
    </div>
  );
};

export default Quiz;
