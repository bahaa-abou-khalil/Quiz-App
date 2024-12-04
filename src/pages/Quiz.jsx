import React from "react";

const questions = [
    {
        id: 1,
        question: "Explain dictionaries data structure",
        type: "input",
        correctAnswer: "A collection of key value pairs"
    },
    {
        id: 2,
        question: "What is the output of [ print(2 ** 3) ]?",
        type: "radio",
        options: ["6", "8", "9"],
        correctAnswer: "8"
    },
    {
        id: 3,
        question: "Which of the following are python data types?",
        type: "checkbox",
        options: ["string", "Array", "Tuple"],
        correctAnswer: ["string", "Tuple"]
    }
];

const Quiz = () => {


    return (
        <div className="quiz flex column">
            <div className="question-container column flex" key={"question-1"}>
                <p className="question">Explain dictionaries data structure</p>
                <div className="answer">
                    <input type="text" placeholder="Your answer here" />
                </div>
            </div>

            <div className="question-container column flex" key={"question-2"}>
                <p className="question">What is the output of [ print(2 ** 3) ]?</p>
                <div className="answer">
                    <div>
                        <input type="radio" id="option1" name="question2" value="6" />
                        <label htmlFor="option1">6</label>
                    </div>
                    <div>
                        <input type="radio" id="option2" name="question2" value="8" />
                        <label htmlFor="option2">8</label>
                    </div>
                    <div>
                        <input type="radio" id="option3" name="question2" value="9" />
                        <label htmlFor="option3">9</label>
                    </div>
                </div>
            </div>

            <div className="question-container column flex" key={"question-3"}>
                <p className="question">Which of the following are valid Python data types? [ String - Array - Tuple]</p>
                <div className="answer">
                    <div>
                        <input type="checkbox" id="option1-q3" name="question3" value="String" />
                        <label htmlFor="option1-q3">String</label>
                    </div>
                    <div>
                        <input type="checkbox" id="option2-q3" name="question3" value="Array" />
                        <label htmlFor="option2-q3">Array</label>
                    </div>
                    <div>
                        <input type="checkbox" id="option3-q3" name="question3" value="Tuple" />
                        <label htmlFor="option3-q3">Tuple</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
