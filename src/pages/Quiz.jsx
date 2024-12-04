import React, {useState, useContext} from "react";
import { ScoreContext } from "./../contexts/ScoreContext";

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

    const { accScore, setAccScore } = useContext(ScoreContext);

    setAccScore((prevScore) => prevScore + score);
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
    

    const handleChange = (questionId, value, type) => {
        if (type === "checkbox") {
            setAnswers(prev => ({
                ...prev,
                [questionId]: prev[questionId] ? [...prev[questionId], value] : [value]
            }));
        } else {
            setAnswers(prev => ({ ...prev, [questionId]: value }));
        }
    };

    const handleSubmit = () => {
        let calculatedScore = 0;

        questions.forEach(question => {
            const userAnswer = answers[question.id];
            const correctAnswer = question.correctAnswer;

            if (question.type === "checkbox") {
                if (
                    Array.isArray(userAnswer) &&
                    correctAnswer.every(answer => userAnswer.includes(answer))
                ) {
                    calculatedScore += 1;
                }
            } else if (userAnswer === correctAnswer) {
                calculatedScore += 1;
            }
        });

        setScore(calculatedScore);
    };

    return (
        <div className="quiz flex column">
            {questions.map(question => (
                <div className="question-container primary-bg" key={question.id}>
                    <p className="question">{question.question}</p>
                    <div className="answer">
                        {question.type === "input" && (
                            <input
                                type="text"
                                onChange={e =>
                                    handleChange(question.id, e.target.value, question.type)
                                }
                            />
                        )}
                        {question.type === "radio" &&
                            question.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`q${question.id}-option${index}`}
                                        name={`q${question.id}`}
                                        value={option}
                                        onChange={e =>
                                            handleChange(question.id, e.target.value, question.type)
                                        }
                                    />
                                    <span>{option}</span>
                                </div>
                            ))}
                        {question.type === "checkbox" &&
                            question.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={`q${question.id}-option${index}`}
                                        value={option}
                                        onChange={e =>
                                            handleChange(question.id, e.target.value, question.type)
                                        }
                                    />
                                    <span>{option}</span>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
            <button className="filled-btn primary-bg black-txt"  onClick={handleSubmit}>
                Submit Quiz
            </button>
            <p>Your Score: {score}</p>
            <p>Accumulated Score: {accScore}</p>
        </div>
    );
};

export default Quiz;
