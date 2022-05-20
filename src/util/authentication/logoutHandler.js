const logoutHandler = ({ authDispatch, Navigate }) => {
  authDispatch({ type: "LOGOUT", payload: { token: null, user: null } });
  Navigate("/login");
};

export { logoutHandler };
