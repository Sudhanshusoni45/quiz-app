import { useEffect } from "react";
import { Card } from "../../components";
import { useQuiz } from "../../context";
import { getQuizesHandler } from "../../util";
import "./landingPage.css";

const LandingPage = () => {
  const { quizState, setQuiz } = useQuiz();
  console.log("quizState:", quizState);
  useEffect(() => {
    getQuizesHandler(setQuiz);
  }, []);
  return (
    <>
      <div className="landingPage_container">
        {quizState.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          quizState.map(({ _id: quizId, title, coverImage }) => (
            <li key={quizId} className="list_reset">
              <Card title={title} quizId={quizId} coverImage={coverImage} />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export { LandingPage };
