import { useResult } from "../../context";
import "./quizOption.css";
const QuizOption = ({ option, questionHandler, questionData }) => {
  const { resultDispatch } = useResult();
  const { question, options, answer } = questionData;
  const clickHandler = () => {
    resultDispatch({
      type: "UPDATE",
      payload: { selectedOption: option, question, options, answer },
    });
  };
  return (
    <div
      className="quiz_option_conatiner"
      onClick={() => {
        questionHandler();
        clickHandler();
      }}
    >
      <span className="quiz_option">{option}</span>
    </div>
  );
};

export { QuizOption };
