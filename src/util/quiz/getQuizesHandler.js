import { getQuizesService } from "../../services";

const getQuizesHandler = async (setQuiz) => {
  try {
    const response = await getQuizesService();
    if (response.status === 200) {
      const {
        data: { quizes },
      } = response;
      setQuiz((prevState) => quizes);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getQuizesHandler };
