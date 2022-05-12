import { useParams } from "react-router-dom";
import { QuizOption } from "../../components";
import "./quizPage.css";

const QuizPage = () => {
  const { quizId } = useParams();
  return (
    <div className="quiz_page_container">
      <div className="quizContainer">
        <h1 className="quiz_title">title</h1>
        <div>
          <span>Question: 1/5</span>
          <span className="quiz_score">Score: 0</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quaerat quam eum molestiae animi eaque accusantium doloribus, eos ab
          corporis?
        </p>
        <QuizOption />
        <QuizOption />
        <QuizOption />
        <QuizOption />
      </div>
    </div>
  );
};

export { QuizPage };
