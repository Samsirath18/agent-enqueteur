import { Search, Map, ClipboardList, HandshakeIcon, BarChart3, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Enquêtes sociologiques',
      description: 'Études approfondies des phénomènes sociaux, analyse des comportements et des représentations sociales.',
    },
    {
      icon: Map,
      title: 'Études de terrain',
      description: 'Observations participantes, entretiens qualitatifs et immersion dans les milieux étudiés.',
    },
    {
      icon: ClipboardList,
      title: 'Sondages et questionnaires',
      description: 'Conception et administration de questionnaires, collecte de données quantitatives et analyse statistique.',
    },
    {
      icon: HandshakeIcon,
      title: 'Médiation sociale et communautaire',
      description: 'Facilitation du dialogue, résolution de conflits et construction de consensus entre parties prenantes.',
    },
    {
      icon: BarChart3,
      title: 'Diagnostic social & évaluation de projets',
      description: 'Évaluation de programmes sociaux, mesure d\'impact et recommandations stratégiques.',
    },
    {
      icon: FileText,
      title: 'Rapports & recommandations',
      description: 'Production de rapports détaillés, analyses critiques et préconisations opérationnelles.',
    },
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Nos services</h1>
          <div className="mx-auto mt-3" style={{ width: 80, height: 4, backgroundColor: '#0d6efd' }} />
          <p className="fs-5 text-secondary mt-3">
            Une gamme complète de services pour comprendre, analyser et résoudre les enjeux sociaux.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                  <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mb-3" style={{ width: 56, height: 56 }}>
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h5 className="fw-semibold mb-2">{service.title}</h5>
                  <p className="text-secondary mb-0">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
