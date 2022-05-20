const resultReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE":
      return [];
    case "UPDATE":
      return [...state, payload];
    default:
      return state;
  }
};

export { resultReducer };
