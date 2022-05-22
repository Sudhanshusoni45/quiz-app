import { useState } from "react";
import { QuizOption } from "../index";
const Question = ({ questionData, title, questionHandler, questionCount }) => {
  const { options } = questionData;
  const [score, setScore] = useState(0);
  return (
    <div className="quizContainer">
      <h1 className="quiz_title">{title}</h1>
      <div className="questionno_and_score_container">
        <span>Question: {questionCount + 1}</span>
        <span className="quiz_score">Score: {score}</span>
      </div>
      <p>{questionData.question}</p>
      <QuizOption
        questionData={questionData}
        option={options[0]}
        questionHandler={questionHandler}
        setScore={setScore}
        score={score}
      />
      <QuizOption
        questionData={questionData}
        option={options[1]}
        questionHandler={questionHandler}
        setScore={setScore}
        score={score}
      />
      <QuizOption
        questionData={questionData}
        option={options[2]}
        questionHandler={questionHandler}
        setScore={setScore}
        score={score}
      />
      <QuizOption
        questionData={questionData}
        option={options[3]}
        questionHandler={questionHandler}
        setScore={setScore}
        score={score}
      />
    </div>
  );
};

export { Question };
