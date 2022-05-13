import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { signInHandler } from "../../util";
import { useAuth } from "../../context";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const { auth, authDispatch } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = user;
    signInHandler({ auth, authDispatch, email, password, Navigate });
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleTestCredentials = (e) => {
    setUser({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  return (
    <>
      <div className="login_component">
        <form action="" className="login_form" onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="John@gmail.com"
              value={user.email}
              onChange={changeHandler}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={user.password}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <input type="checkbox" name="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <Link to={"#"}>
            <small>Forgot your password</small>
          </Link>
          <Link to={"/signup"}> New here? Create a new account </Link>

          <button className="btn login_btn" onClick={handleTestCredentials}>
            Test login
          </button>
          <button className="btn login_btn">Login</button>
        </form>
      </div>
    </>
  );
};

export { Login };
