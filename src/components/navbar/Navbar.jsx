import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <header class="navigation">
      <div>
        <i class="fas fa-bars"></i>
        <Link to={"/"}>
          <h3 className="nav_logo">Quizo</h3>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <button className="btn">Login</button>
          </li>
          <li>
            <i class="fas fa-print"></i>
          </li>
          <li>
            <i class="fas fa-bookmark"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
