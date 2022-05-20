import axios from "axios";

const postResultService = (token) => {
  const url = "/api/quizzes/result";
  const config = {
    headers: {
      token,
    },
  };
  const response = axios.post(url, config);
  return response;
};

export { postResultService };
