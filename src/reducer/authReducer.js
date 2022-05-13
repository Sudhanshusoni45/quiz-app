const authReducer = (state, { type, payload: { user } }) => {
  //   const { accessToken: token } = user;
  switch (type) {
    case "SIGNUP":
      return { user };
    case "LOGOUT":
      return { user };
    case "LOGIN":
      return { user };
    default:
      return state;
  }
};

export { authReducer };
