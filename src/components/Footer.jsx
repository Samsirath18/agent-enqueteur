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
            <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/methodologie">Méthodologie</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email : consultationenquete@gmail.com</p>
          <p>Téléphone : +229 01 68 01 57 44</p>
          <p>Localisation : Bénin</p>
        </div>
      </div>

      {/* Logo centré */}
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
