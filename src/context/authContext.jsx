import { getAuth } from "firebase/auth";
import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const AuthContext = createContext();
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};
const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ auth, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
