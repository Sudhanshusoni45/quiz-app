import { createUserWithEmailAndPassword } from "firebase/auth";
const signupHandler = async ({ email, password, auth, authDispatch }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("response:", response);
    const { user } = response;
    authDispatch({ type: "SIGNUP", payload: { user } });
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
