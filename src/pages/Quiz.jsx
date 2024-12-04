import React from "react";
import QuizCard from "../components/QuizCard";
import SideBar from "../components/SideBar";

const Quiz = () => {
    return (
        <div className="quiz-page flex row">
            <SideBar />
            <QuizCard />
        </div>
    )
}

export default Quiz;