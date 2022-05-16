import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider, QuizProvider, ResultProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
          <ResultProvider>
            <App />
          </ResultProvider>
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
