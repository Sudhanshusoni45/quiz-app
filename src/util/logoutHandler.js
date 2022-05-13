import { signOut } from "firebase/auth";

const logoutHandler = async ({ auth, authDispatch }) => {
  try {
    await signOut(auth);
    authDispatch({ type: "LOGOUT", payload: { user: null } });
  } catch (error) {
    console.error(error);
  }
};

export { logoutHandler };
