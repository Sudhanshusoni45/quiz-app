import { signupService } from "../../services";

const signupHandler = async ({ newUser, authDispatch }) => {
  try {
    const response = await signupService({ newUser });
    console.log("response:", response);
    if (response.status === 201) {
      const {
        data: { encodedToken: token, createdUser: user },
      } = response;
      authDispatch({ type: "SIGNUP", payload: { token, user } });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  } catch (error) {
    console.error();
  }
};

export { signupHandler };
