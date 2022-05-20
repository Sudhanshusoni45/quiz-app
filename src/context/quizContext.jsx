import { createContext, useContext, useState } from "react";

const QuizContext = createContext();
const QuizProvider = ({ children }) => {
  const [quizState, setQuiz] = useState([]);
  return (
    <QuizContext.Provider value={{ quizState, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
