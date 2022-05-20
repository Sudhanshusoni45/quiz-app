import { QuizOption } from "../index";
const Question = ({ questionData, title, questionHandler, questionCount }) => {
  const { options } = questionData;
  console.log("questionData:", questionData);
  return (
    <div className="quizContainer">
      <h1 className="quiz_title">{title}</h1>
      <div className="questionno_and_score_container">
        <span>Question: {questionCount + 1}</span>
        <span className="quiz_score">Score: 0</span>
      </div>
      <p>{questionData.question}</p>
      <QuizOption
        questionData={questionData}
        option={options[0]}
        questionHandler={questionHandler}
      />
      <QuizOption
        questionData={questionData}
        option={options[1]}
        questionHandler={questionHandler}
      />
      <QuizOption
        questionData={questionData}
        option={options[2]}
        questionHandler={questionHandler}
      />
      <QuizOption
        questionData={questionData}
        option={options[3]}
        questionHandler={questionHandler}
      />
    </div>
  );
};

export { Question };
