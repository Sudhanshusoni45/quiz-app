import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDuA-VM1UtkkNi-gj3vkzm8FqNxQKsrxnk",
  authDomain: "quiz-app-5c794.firebaseapp.com",
  projectId: "quiz-app-5c794",
  storageBucket: "quiz-app-5c794.appspot.com",
  messagingSenderId: "55326245479",
  appId: "1:55326245479:web:2c6a6f605dc18fb3274ac2",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
