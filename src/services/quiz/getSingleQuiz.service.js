import axios from "axios";

const getSingleQuizService = (quizId) => {
  const url = `/api/quizzes/${quizId}`;
  const response = axios.get(url);
  return response;
};

export { getSingleQuizService };
