import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import focus from "../../assets/img/focus.jpeg";
import enquete from "../../assets/img/enquete.jpeg";
import terrai from "../../assets/img/terrai.jpeg";

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div>

      {/* ================= HERO ================= */}
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

        <div className="container position-relative z-1 py-5" style={{ maxWidth: "900px" }}>
          <h1 className="display-5 fw-bold mb-3">
            Nous aidons ONG, collectivités et entreprises à résoudre les conflits sociaux et prendre des décisions basées sur des données fiables.
          </h1>

          <p className="lead mb-4">
            Une approche neutre, méthodique et orientée résultats pour transformer les tensions en solutions durables.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn btn-primary btn-lg d-flex align-items-center gap-2"
              onClick={() => navigate('/contact')}
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </button>

            <button
              className="btn btn-light btn-lg text-primary d-flex align-items-center gap-2"
              onClick={() => navigate('/services')}
            >
              Découvrir nos services
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="container py-5">
        <div className="bg-white rounded-3 shadow-sm p-4 p-md-5 text-center">
          <p className="fs-5 text-secondary mb-0">
            Nous accompagnons <strong className="text-primary">ONG, entreprises, collectivités et institutions</strong> 
            dans la collecte, l'analyse et l'interprétation de données sociales, 
            ainsi que dans la médiation et la gestion des conflits, 
            avec <strong className="text-primary">éthique, rigueur et confidentialité</strong>.
          </p>
        </div>
      </div>

      {/* ================= EXPERTISES ================= */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Nos expertises</h2>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <h5 className="fw-bold text-primary">Médiation & gestion de conflits</h5>
              <p>Intervention neutre pour restaurer le dialogue et apaiser les tensions sociales.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <h5 className="fw-bold text-primary">Enquêtes sociales</h5>
              <p>Collecte et analyse de données fiables pour des décisions stratégiques éclairées.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <h5 className="fw-bold text-primary">Analyse & recommandations</h5>
              <p>Rapports détaillés et solutions concrètes adaptées à chaque contexte.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/contact')}>
            Besoin d’un accompagnement ?
          </button>
        </div>
      </div>

     {/* ================= INTERVENTIONS TERRAIN ================= */}
<div className="container py-5">
  <h2 className="text-center fw-bold mb-5">
    Nos interventions sur le terrain
  </h2>

  <div className="row g-4">

    {[
      { img: focus, title: "Focus groupes" },
      { img: enquete, title: "Entretiens individuels" },
      { img: terrai, title: "Visites de terrain" },
    ].map((item, index) => (

      <div className="col-md-4" key={index}>
        <div className="terrain-card position-relative overflow-hidden rounded shadow-sm">

          <img
            src={item.img}
            alt={item.title}
            className="w-100 terrain-img"
            style={{ height: "300px", objectFit: "cover" }}
          />

          <div className="terrain-overlay d-flex align-items-center justify-content-center">
            <h5 className="text-white fw-bold text-center px-3">
              {item.title}
            </h5>
          </div>

        </div>
      </div>

    ))}

  </div>

  <div className="text-center mt-5">
    <button
      className="btn btn-primary btn-lg"
      onClick={() => navigate('/contact')}
    >
      Discuter de votre projet
    </button>
  </div>
</div>


      {/* ================= CHIFFRES ================= */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h2 className="fw-bold">50+</h2>
              <p>Missions réalisées</p>
            </div>
            <div className="col-md-4 mb-3">
              <h2 className="fw-bold">12+</h2>
              <p>Partenaires institutionnels</p>
            </div>
            <div className="col-md-4 mb-3">
              <h2 className="fw-bold">95%</h2>
              <p>Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TEMOIGNAGE ================= */}
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-4">Ils nous ont fait confiance</h2>

        <div className="bg-light p-4 rounded shadow-sm">
          <p className="fst-italic">
            "Grâce à Consultation & Enquête, nous avons pu résoudre un conflit communautaire en moins de trois semaines. Leur approche méthodique et neutre a été déterminante."
          </p>
          <p className="fw-bold text-primary mt-3">
            — Responsable ONG
          </p>
        </div>
      </div>

      {/* ================= CTA FINAL ================= */}
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Vous avez un projet ou une situation à analyser ?
          </h2>
          <p className="mb-4">
            Parlons-en dès aujourd’hui et trouvons ensemble une solution adaptée à vos besoins.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/contact')}
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>

    </div>
  );
}
