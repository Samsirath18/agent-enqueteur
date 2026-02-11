import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src={logo} alt="Consultation & Enquête" />
          <span>Consultation & Enquête</span>
        </Link>

        {/* Hamburger menu */}
        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={() => setIsMobile(false)}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setIsMobile(false)}>À propos</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setIsMobile(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/methodologie" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setIsMobile(false)}>Méthodologie</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="contact-btn" onClick={() => setIsMobile(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
