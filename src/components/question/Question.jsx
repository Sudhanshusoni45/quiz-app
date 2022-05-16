import { QuizOption } from "../index";
const Question = ({ questionData, title, questionHandler, questionCount }) => {
  console.log("questionData:", questionData);
  const { options } = questionData;
  return (
    <div className="quizContainer">
      <h1 className="quiz_title">{title}</h1>
      <div className="questionno_and_score_container">
        <span>Question: {questionCount + 1}</span>
        <span className="quiz_score">Score: 0</span>
      </div>
      <p>{questionData.question}</p>
      <QuizOption option={options[0]} questionHandler={questionHandler} />
      <QuizOption option={options[1]} questionHandler={questionHandler} />
      <QuizOption option={options[2]} questionHandler={questionHandler} />
      <QuizOption option={options[3]} questionHandler={questionHandler} />
    </div>
  );
};

export { Question };
