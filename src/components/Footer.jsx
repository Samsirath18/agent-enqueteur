import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer className="footer-custom">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Consultation & Enquête</h3>
          <p>
            Enquêtes sociales & médiation professionnelle au service de la
            cohésion sociale, du dialogue et de la justice.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/methodologie">Méthodologie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email : consultationenquete@gmail.com</p>
          <p>Téléphone : +229 01 68 01 57 44</p>
          <p>Localisation : Bénin</p>
        </div>
      </div>

      <div className="footer-logo-center">
        <img src={logo} alt="Consultation & Enquête" />
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Consultation & Enquête — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
