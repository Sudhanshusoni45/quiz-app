import { useEffect } from "react";
import { Card } from "../../components";
import { useQuiz, useResult } from "../../context";
import { getQuizesHandler } from "../../util";
import "./landingPage.css";

const LandingPage = () => {
  const { quizState, setQuiz } = useQuiz();
  const { resultDispatch } = useResult();
  useEffect(() => {
    getQuizesHandler(setQuiz);
    resultDispatch({ type: "INITIALIZE", payload: {} });
  }, [setQuiz, resultDispatch]);
  return (
    <>
      <div className="landingPage_container">
        {quizState.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          quizState.map(({ _id: quizId, title, coverImage, description }) => (
            <li key={quizId} className="list_reset">
              <Card
                title={title}
                quizId={quizId}
                coverImage={coverImage}
                description={description}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export { LandingPage };
