import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./navbar.css";
const Navbar = () => {
  const { authState } = useAuth();
  console.log("authState:", authState);

  return (
    <header className="navigation">
      <div>
        <i className="fas fa-bars hamburger_menu"></i>
        <Link to={"/"}>
          <h3 className="nav_logo">Quizo</h3>
        </Link>
      </div>
      <nav>
        {authState.token === null ? (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        ) : (
          <Link to={"/logout"}>
            <button className="transparent_btn username_btn">
              <i className="fas fa-user"></i>
              <span>{authState.user.firstName}</span>
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
