import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Euro } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: 'enquete',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    emailjs
      .sendForm(
        'service_4vgpcfh',      // Service ID
        'template_7fe5wrd',     // Template ID
        formRef.current,
        'GAdsPyTGhu3QCJhI2'     // Public Key (sans PUBLIC_KEY_)
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            requestType: 'enquete',
            message: '',
          });
          setTimeout(() => setSubmitted(false), 3000);
        },
        () => {
          setError(true);
        }
      );
  };

  const pricingFactors = [
    'Nature et complexité du projet',
    "Durée de l'intervention",
    "Zone géographique d'intervention",
    'Nombre de personnes impliquées',
    'Délais de réalisation',
    'Ressources et moyens nécessaires',
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h1 className="display-5 fw-bold text-center mb-4">Tarifs & Contact</h1>
        <p className="text-center text-secondary mb-5">
          Demandez un devis personnalisé et contactez-nous pour votre projet
        </p>

        {/* Tarification */}
        <div className="mb-5 animate-up-down">
          <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm">
            <div className="text-center mb-3 d-flex align-items-center justify-content-center gap-2">
              <Euro className="text-primary" size={28} />
              <h4 className="fw-bold mb-0">Tarification personnalisée</h4>
            </div>
            <p className="text-secondary text-center mb-3">
              Chaque mission est unique. La tarification est définie en fonction
              de la nature, de la complexité, de la durée et de la zone
              géographique de l'enquête ou de la médiation.
            </p>
            <ul className="list-unstyled row g-2">
              {pricingFactors.map((f, idx) => (
                <li key={idx} className="col-12 col-md-6 d-flex align-items-start">
                  <CheckCircle className="text-primary me-2 mt-1" size={20} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formulaire + infos */}
        <div className="row g-4">
          {/* FORMULAIRE */}
          <div className="col-md-6">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm">
              <h4 className="fw-bold mb-3">Envoyez-nous un message</h4>

              {submitted ? (
                <div className="text-center py-5">
                  <CheckCircle className="text-success mb-3" size={32} />
                  <h5 className="fw-bold mb-2">Message envoyé !</h5>
                  <p className="text-secondary">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nom et prénom *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Téléphone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type de demande *</label>
                    <select
                      className="form-select"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      required
                    >
                      <option value="enquete">Enquête</option>
                      <option value="mediation">Médiation</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-danger text-center mb-3">
                      ❌ Une erreur est survenue. Réessayez.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <Send size={20} /> Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* INFOS */}
          <div className="col-md-6">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm mb-3 animate-up-down">
              <h5 className="fw-bold mb-3">Informations de contact</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <Mail className="text-primary me-2 mt-1" size={20} />{' '}
                  consultationenquete@gmail.com
                </li>
                <li className="d-flex align-items-start mb-2">
                  <Phone className="text-primary me-2 mt-1" size={20} /> +229 01
                  68 01 57 44
                </li>
                <li className="d-flex align-items-start mb-2">
                  <MapPin className="text-primary me-2 mt-1" size={20} />{' '}
                  République du Bénin, Borgou, Parakou
                </li>
              </ul>
            </div>

            <div className="bg-primary bg-opacity-10 p-4 p-md-5 rounded-3 animate-left-right">
              <h5 className="fw-bold mb-2">Confidentialité garantie</h5>
              <p className="text-secondary mb-1">
                Nous nous engageons à protéger vos données personnelles et à
                respecter la confidentialité de vos échanges.
              </p>
              <p className="text-secondary mb-0">
                Toute information partagée dans le cadre de nos échanges reste
                strictement confidentielle et ne sera jamais divulguée sans
                votre accord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
