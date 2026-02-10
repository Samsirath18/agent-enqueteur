import { MessageSquare, Target, Wrench, Database, TrendingUp, FileCheck } from 'lucide-react';

export default function Methodologie() {
  const steps = [
    { icon: MessageSquare, title: 'Écoute & cadrage', description: 'Analyse de la demande, compréhension du contexte et définition des objectifs.' },
    { icon: Target, title: 'Définition des objectifs', description: 'Clarification des enjeux, formulation des hypothèses et planification.' },
    { icon: Wrench, title: 'Conception des outils', description: 'Création des guides d’entretien, questionnaires et protocoles de recherche.' },
    { icon: Database, title: 'Collecte des données', description: 'Enquêtes de terrain, entretiens, observations et collecte quantitative.' },
    { icon: TrendingUp, title: 'Analyse & interprétation', description: 'Traitement des données, analyse qualitative et quantitative, interprétation.' },
    { icon: FileCheck, title: 'Restitution & recommandations', description: 'Rapports clairs, restitutions orales et recommandations opérationnelles.' },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Notre méthodologie</h1>
          <div className="mx-auto mt-3" style={{ width: 80, height: 4, backgroundColor: '#0d6efd' }} />
          <p className="fs-5 text-secondary mt-3">
            Un processus rigoureux en 6 étapes pour garantir des résultats fiables et utiles.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const animationClass = index % 2 === 0 ? 'animate-left-right' : 'animate-up-down';

            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`bg-light rounded-4 p-4 h-100 shadow-sm ${animationClass}`}>
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3 text-white"
                    style={{ width: 56, height: 56 }}
                  >
                    <Icon size={26} />
                  </div>
                  <h5 className="fw-semibold mb-2">{step.title}</h5>
                  <p className="text-secondary mb-0">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-primary bg-opacity-10 rounded-4 p-4 p-md-5 text-center animate-up-down">
          <h4 className="fw-bold mb-3">Une approche sur mesure</h4>
          <p className="fs-5 text-secondary mb-0">
            Chaque projet est unique. Notre méthodologie s’adapte à vos besoins spécifiques, à votre secteur
            d’activité et à vos contraintes. Nous privilégions la co-construction, la transparence et
            l’implication de toutes les parties prenantes pour garantir des résultats durables et utiles.
          </p>
        </div>
      </div>
    </div>
  );
}
