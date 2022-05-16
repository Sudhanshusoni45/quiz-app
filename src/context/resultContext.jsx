import { createContext } from "react";

const ResultContext = createContext();
const ResultProvider = ({ children }) => {
  return <ResultContext.Provider value={{}}>{children}</ResultContext.Provider>;
};

export { ResultProvider };
