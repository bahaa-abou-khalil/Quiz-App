import React, {useState} from "react";

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
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

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


    return (
        <div className="quiz flex column">
            {questions.map(question => (
                <div className="question-container" key={question.id}>
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

        </div>
    );
};

export default Quiz;
