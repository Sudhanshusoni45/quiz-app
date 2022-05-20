import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Question } from "../../components";
import { getSingleQuizHandler } from "../../util";
import "./quizPage.css";

const QuizPage = () => {
  const [activeQuiz, setActiveQuiz] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const Navigate = useNavigate();
  const questionHandler = () => {
    if (questionCount < activeQuiz.mcqs.length - 1)
      setQuestionCount((prevCount) => prevCount + 1);
    else {
      Navigate("/result");
    }
  };
  const { quizId } = useParams();
  useEffect(() => {
    getSingleQuizHandler({ quizId, setActiveQuiz });
  }, [quizId, setActiveQuiz]);

  return (
    <>
      {activeQuiz ? (
        <div className="quiz_page_container">
          <Question
            title={activeQuiz.title}
            questionCount={questionCount}
            questionData={activeQuiz.mcqs[questionCount]}
            questionHandler={questionHandler}
          />
        </div>
      ) : null}
    </>
  );
};

export { QuizPage };
