import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png"; // ton logo

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="nav-container">
        {/* Logo + Nom (cliquable vers l'accueil) */}
        <Link to="/" className="nav-brand">
          <img src={logo} alt="Consultation & Enquête" />
          <span>Consultation & Enquête</span>
        </Link>

        {/* Menu */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : ""}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/methodologie" className={({ isActive }) => isActive ? "active" : ""}>
              Méthodologie
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="contact-btn">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
