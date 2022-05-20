import { signInService } from "../../services";

const signInHandler = async ({ authDispatch, Navigate, user }) => {
  try {
    const response = await signInService(user);
    if (response.status === 200) {
      const {
        data: { encodedToken: token, foundUser: user },
      } = response;
      authDispatch({ type: "LOGIN", payload: { token, user } });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      Navigate("/");
    }
  } catch (error) {
    console.error(error);
  }
};

export { signInHandler };
