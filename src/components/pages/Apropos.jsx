import { Target, Heart, Users, Shield, GraduationCap, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Apropos() {
  const values = [
    {
      icon: Target,
      title: 'Notre mission',
      description: 'Éclairer les enjeux sociaux et faciliter le dialogue pour des solutions justes et pérennes.',
    },
    {
      icon: Heart,
      title: 'Nos valeurs',
      description: 'Éthique, rigueur, confidentialité, respect et engagement au service de la cohésion sociale.',
    },
    {
      icon: Users,
      title: 'Notre approche',
      description: 'Méthodologie rigoureuse, écoute active et accompagnement personnalisé de chaque projet.',
    },
  ];

  const teamQualities = [
    {
      icon: GraduationCap,
      title: 'Expertise académique',
      description: 'Sociologues diplômés avec une solide formation théorique et méthodologique.',
    },
    {
      icon: Scale,
      title: 'Médiateurs qualifiés',
      description: 'Professionnels certifiés en médiation sociale, familiale et communautaire.',
    },
    {
      icon: Users,
      title: 'Expérience terrain',
      description: 'Années d\'expérience dans l\'accompagnement de projets sociaux complexes.',
    },
    {
      icon: Shield,
      title: 'Éthique professionnelle',
      description: 'Respect strict de la confidentialité et des principes déontologiques.',
    },
  ];

  return (
    <div className="py-5">
      <div className="container">

        {/* Titre */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">À propos</h1>
          <div className="mx-auto mt-3" style={{ width: 80, height: 4, backgroundColor: '#0d6efd' }} />
        </div>

        {/* Qui sommes-nous */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-md-6">
            <motion.img
              src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1080"
              alt="Médiation africaine professionnelle"
              className="img-fluid rounded-4 shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Qui sommes-nous ?</h2>
            <p className="fs-5 text-secondary">
              Nous sommes un service spécialisé en <strong className="text-primary">enquêtes sociales</strong> et en <strong className="text-primary">médiation</strong>, engagé pour une meilleure compréhension des réalités sociales et la construction de solutions durables.
            </p>
          </div>
        </div>

        {/* Mission / Valeurs / Approche */}
        <div className="row mb-5 g-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="col-md-4">
                <div className="bg-light rounded-4 p-4 text-center h-100 shadow-sm">
                  <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mx-auto mb-3" style={{ width: 60, height: 60 }}>
                    <Icon color="white" size={28} />
                  </div>
                  <h5 className="fw-semibold mb-2">{value.title}</h5>
                  <p className="text-secondary mb-0">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notre équipe */}
        <div className="bg-light rounded-4 p-4 p-md-5">
          <h2 className="fw-bold text-center mb-5">Notre équipe</h2>

          <div className="row align-items-center mb-5 g-4">
            <div className="col-md-6">
              <motion.img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1080"
                alt="Équipe africaine professionnelle"
                className="img-fluid rounded-4 shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Des professionnels engagés</h3>
              <p className="fs-5 text-secondary mb-3">
                Notre équipe est composée de <strong className="text-primary">sociologues et de médiateurs qualifiés</strong>, engagés pour la cohésion sociale, le dialogue et la résolution pacifique des conflits.
              </p>
              <p className="fs-5 text-secondary">
                Nous mettons notre expertise et notre expérience au service de projets porteurs de sens, dans le respect des personnes et des communautés.
              </p>
            </div>
          </div>

          {/* Qualités de l’équipe */}
          <div className="row g-4">
            {teamQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="bg-white rounded-4 p-4 text-center shadow-sm h-100">
                    <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: 56, height: 56 }}>
                      <Icon className="text-primary" size={26} />
                    </div>
                    <h6 className="fw-semibold mb-2">{quality.title}</h6>
                    <p className="text-secondary small mb-0">{quality.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      
    </div>
  );
}
