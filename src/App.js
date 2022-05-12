import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage, QuizPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz/:quizId" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
