import { signupService } from "../services";

const signupHandler = async ({ newUser }) => {
  try {
    const response = await signupService({ newUser });
    console.log("response:", response);
  } catch (error) {
    console.error();
  }
};

export { signupHandler };
