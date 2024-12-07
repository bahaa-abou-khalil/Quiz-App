import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const QuizzesContext = createContext();

const QuizzesProvider = ({ children }) => {
  const [accScore, setAccScore] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);


  const getQuizzes = ()=>{
    axios.get("http://localhost:8080/quizzes/")
    .then((res) => {
      setQuizzes(res.data);
    })
    .catch((err) => {
      console.error("error fetching the quizzes: ", err);
    });
  }

  const getQuestions = (quizId)=>{
    axios.get(`http://localhost:8080/quizzes/${quizId}`)
    .then((res) => {
      setQuestions(res.data);
    })
    .catch((err) => {
      console.error("error fetching the questions: ", err);
    });
  }

  useEffect(()=>{
    getQuizzes()
  },[])

  return (
    <QuizzesContext.Provider value={{
       accScore, setAccScore,
       quizzes,
       getQuestions
    }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export default QuizzesProvider;
