import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div
        className="d-flex align-items-center justify-content-center text-white text-center position-relative"
        style={{
          height: '600px',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585984968562-1443b72fb0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(0,0,80,0.85), rgba(0,0,80,0.65))',
          }}
        ></div>

        <div className="container position-relative z-1 py-5">
          <h1 className="display-4 fw-bold mb-3">
           Consultation & Enquêtes sociales  
          </h1>
          <p className="lead mb-4">
            Une équipe de sociologues et de médiateurs au service de la compréhension sociale et de la résolution pacifique des conflits.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn btn-primary btn-lg d-flex align-items-center gap-2"
              onClick={() => navigate('/contact')}
            >
              Demander une enquête
              <ArrowRight size={20} />
            </button>
            <button
              className="btn btn-light btn-lg text-primary d-flex align-items-center gap-2"
              onClick={() => navigate('/contact')}
            >
              Solliciter une médiation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="container py-5">
        <div className="bg-white rounded-3 shadow-sm p-4 p-md-5 text-center">
          <p className="fs-5 text-secondary mb-0">
            Nous accompagnons <strong className="text-primary">particuliers, ONG, entreprises, collectivités et institutions</strong> dans la collecte, l'analyse et l'interprétation de données sociales, ainsi que dans la médiation et la gestion des conflits, avec <strong className="text-primary">éthique, rigueur et confidentialité</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
