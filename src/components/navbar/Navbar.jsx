import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { logoutHandler } from "../../util";
import "./navbar.css";
const Navbar = () => {
  const {
    authState: { user },
    authDispatch,
  } = useAuth();
  console.log("user:", user);
  const auth = getAuth();
  const logoutBtnHandler = () => {
    logoutHandler({ auth, authDispatch });
  };
  return (
    <header className="navigation">
      <div>
        <i className="fas fa-bars hamburger_menu"></i>
        <Link to={"/"}>
          <h3 className="nav_logo">Quizo</h3>
        </Link>
      </div>
      <nav>
        {user === null ? (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        ) : (
          <Link to={"/logout"}>
            <button className="transparent_btn username_btn">
              <i className="fas fa-user"></i>
              <span> Username</span>
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
