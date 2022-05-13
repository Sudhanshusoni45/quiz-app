import { createUserWithEmailAndPassword } from "firebase/auth";
const signupHandler = async ({
  email,
  password,
  auth,
  authDispatch,
  Navigate,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = response;
    authDispatch({ type: "SIGNUP", payload: { user } });
    localStorage.setItem("user", JSON.stringify(user));
    Navigate("/");
  } catch (error) {
    console.error(error);
  }
};

export { signupHandler };
