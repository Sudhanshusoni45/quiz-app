import "./quizOption.css";
const QuizOption = ({ option, questionHandler }) => {
  return (
    <div className="quiz_option_conatiner" onClick={questionHandler}>
      <span className="quiz_option">{option}</span>
    </div>
  );
};

export { QuizOption };
