import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./signup.css";
import { signupHandler } from "../../util";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../context";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const auth = getAuth();
  const { authDispatch } = useAuth();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = newUser;
    signupHandler({ auth, email, password, authDispatch, Navigate });
  };
  const handleTestCreadentials = () => {
    setNewUser({
      firstName: "sudhanshu",
      lastName: "soni",
      email: "sudhanshu@gmail.com",
      password: "sudhanshu123",
    });
  };
  const { firstName, lastName, email, password } = newUser;

  return (
    <>
      <div className="signup_component">
        <form action="" className="signup_form" onSubmit={submitHandler}>
          <h1>Signup</h1>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              value={firstName}
              onChange={changeHandler}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              value={lastName}
              onChange={changeHandler}
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="John@gmail.com"
              required
              value={email}
              onChange={changeHandler}
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="password"
              required
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <Link to={"/login"}>Already have an account ? Login instead</Link>
          <button className="btn signup_btn" onClick={handleTestCreadentials}>
            Test Signup
          </button>
          <button className="btn signup_btn">Signup</button>
        </form>
      </div>
    </>
  );
};

export { Signup };
