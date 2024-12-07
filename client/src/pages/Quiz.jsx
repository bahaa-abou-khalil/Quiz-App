import React, {useState, useContext} from "react";
import { QuizzesContext } from "../contexts/quizzesContext";

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const listQuizzes=()=>{

    }

    return (
        <div className="quiz flex column">
            <h3 className="black-txt">Qustion number</h3>
            <div className="question-container primary-bg">
                <p>What is the output of `print(2 + 3 * 4)` in Python?</p>
            </div>
            <div className="options-container flex column">
                <label>
                    <input
                    type="radio"
                    name="q1"
                    value="a"
                    checked={selectedOption === "a"}
                    onChange={handleChange}
                    />
                    A
                </label>
                <label>
                    <input
                        type="radio"
                        name="q1"
                        value="b"
                        checked={selectedOption === "b"}
                        onChange={handleChange}
                    />
                    B
                </label>
                <label>
                    <input
                        type="radio"
                        name="q1"
                        value="c"
                        checked={selectedOption === "c"}
                        onChange={handleChange}
                    />
                    C
                </label>
                <label>
                    <input
                        type="radio"
                        name="q1"
                        value="d"
                        checked={selectedOption === "d"}
                        onChange={handleChange}
                    />
                    D
                </label>

                <p>Selected Option: {selectedOption}</p>
            </div>

        </div>
    );
};

export default Quiz;
