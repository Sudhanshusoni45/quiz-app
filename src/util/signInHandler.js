import { signInWithEmailAndPassword } from "firebase/auth";

const signInHandler = async ({
  auth,
  authDispatch,
  email,
  password,
  Navigate,
}) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const { user } = response;
    authDispatch({ type: "LOGIN", payload: { user } });
    localStorage.setItem("user", JSON.stringify(user));
    Navigate("/");
  } catch (error) {
    console.error(error);
  }
};

export { signInHandler };
