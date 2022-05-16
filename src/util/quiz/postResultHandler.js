import { postResultService } from "../../services";

const postResultHandler = async ({ token, resultDispatch }) => {
  try {
    const response = await postResultService(token);
    console.log("response:", response);
  } catch (error) {
    console.error();
  }
};

export { postResultHandler };
