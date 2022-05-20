import axios from "axios";

const getQuizesService = () => {
  const url = "/api/quizzes";
  const response = axios.get(url);
  return response;
};

export { getQuizesService };
