import { useResult } from "../../context";
import "./quizOption.css";
const QuizOption = ({
  option,
  questionHandler,
  questionData,
  setScore,
  score,
}) => {
  const { resultDispatch } = useResult();
  const { question, options, answer } = questionData;
  const scoreHandler = () => {
    if (questionData.answer === option) {
      setScore((prevScore) => prevScore + 10);
    }
  };
  const clickHandler = () => {
    scoreHandler();
    resultDispatch({
      type: "UPDATE",
      payload: { selectedOption: option, question, options, answer, score },
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
