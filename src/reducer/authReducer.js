const authReducer = (state, { type, payload: { token, user } }) => {
  switch (type) {
    case "SIGNUP":
      return { token, user };
    case "LOGOUT":
      return { token, user };
    case "LOGIN":
      return { token, user };
    default:
      return state;
  }
};

export { authReducer };
