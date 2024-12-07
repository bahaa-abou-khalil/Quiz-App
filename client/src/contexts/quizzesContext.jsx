import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const QuizzesContext = createContext();

const QuizzesProvider = ({ children }) => {
  const [accScore, setAccScore] = useState(0);
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = () => {
    axios.get("http://localhost:8080/quizzes/")
    .then((res)=>{
      setQuizzes(res.data)
    })
  }

  useEffect(()=>{
    getQuizzes();
  },[])

  return (
    <QuizzesContext.Provider value={{
       accScore, setAccScore,
       quizzes
    }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export default QuizzesProvider;
