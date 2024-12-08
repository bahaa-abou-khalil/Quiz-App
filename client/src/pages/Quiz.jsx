import React, { useState, useContext, useEffect } from "react";
import { QuizzesContext } from "../contexts/quizzesContext";
import { useLocation } from "react-router-dom";

import axios from "axios"

const Quiz = () => {
  const location = useLocation();
  const [selectedOptions, setSelectedOptions] = useState({});
  const { getQuestions, questions } = useContext(QuizzesContext);
  const quizId = location.pathname.split("/").pop();
  const [score, setScore] = useState(0);

  useEffect(() => {
    getQuestions(quizId);
  }, [quizId]);

  const handleChange = (event, questionIndex) => {
    const { value } = event.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;

    if (!questions || !questions.questions) {
      console.error("no questions");
      return;
    }

    questions.questions.forEach((question, index) => {
      if (selectedOptions[index] === question.answer) {
        totalScore += question.score;
      }
    });

    setScore(totalScore);
  };

  const postQuiz = ()=>{
    axios.post("http://localhost:8080/userQuizzes",{
          
      quiz_id:quizId,
      score:score
    },
    {
      headers : {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
    }
  )
  }

  if (!questions || !questions.questions) {
    return <p>loading questions..</p>;
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
                checked={selectedOptions[index] === option}
                onChange={(event) => handleChange(event, index)}
              />
              {option}
            </label>
          ))}
        </div>
        {selectedOptions[index] && <p className="dim-txt">Selected: {selectedOptions[index]}</p>}
      </div>
    ));
  };

  return (
    <div className="quizzes-container flex column">
      {score > 0 && <p className="score-display">Score: {score}</p>}
      {listQuestions()}
      <button className="quiz-btn filled-btn primary-bg" 
      onClick={()=>{
        handleSubmit()
        postQuiz()
        }}>
        Submit
      </button>
      
    </div>
  );
};

export default Quiz;
