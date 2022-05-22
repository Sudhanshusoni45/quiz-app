import axios from "axios";

const signInService = (user) => {
  const url = "/api/auth/login";
  const data = user;
  const response = axios.post(url, data);
  return response;
};

export { signInService };
