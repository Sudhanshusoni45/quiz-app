import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { LandingPage, Login, Logout, QuizPage, Result, Signup } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
