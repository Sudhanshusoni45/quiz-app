import { createUserWithEmailAndPassword } from "firebase/auth";
const signupHandler = async ({ email, password, auth }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log("response:", response);
};

export { signupHandler };
