import { getSingleQuizService } from "../../services";

const getSingleQuizHandler = async ({ quizId, setActiveQuiz }) => {
  try {
    const response = await getSingleQuizService(quizId);
    if (response.status === 200) {
      const {
        data: { quiz },
      } = response;
      setActiveQuiz((prevQuiz) => quiz);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getSingleQuizHandler };
