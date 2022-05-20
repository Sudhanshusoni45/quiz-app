import { createContext, useContext, useReducer } from "react";
import { resultReducer } from "../reducer";

const ResultContext = createContext();
const initialState = [];
const ResultProvider = ({ children }) => {
  const [resultState, resultDispatch] = useReducer(resultReducer, initialState);
  return (
    <ResultContext.Provider value={{ resultState, resultDispatch }}>
      {children}
    </ResultContext.Provider>
  );
};

const useResult = () => useContext(ResultContext);

export { ResultProvider, useResult };
