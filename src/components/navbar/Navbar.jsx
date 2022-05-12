import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="navigation">
      <div>
        <i className="fas fa-bars"></i>
        <Link to={"/"}>
          <h3 className="nav_logo">Quizo</h3>
        </Link>
      </div>
      <nav>
        <Link to={"/login"}>
          <button className="btn">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
