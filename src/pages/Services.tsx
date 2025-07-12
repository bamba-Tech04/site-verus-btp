import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Building, Layers, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-16 w-16" />,
      title: "Études",
      description: "Nos études approfondies constituent la base solide de tout projet de construction réussi.",
      features: [
        "Analyses de faisabilité technique et économique",
        "Études de sol et géotechniques",
        "Diagnostics techniques de bâtiments existants",
        "Études d'impact environnemental",
        "Conseils personnalisés et optimisation"
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Building className="h-16 w-16" />,
      title: "Plans Architecturaux",
      description: "Nos architectes expérimentés conçoivent des plans détaillés qui allient esthétique et fonctionnalité.",
      features: [
        "Conception architecturale personnalisée",
        "Plans de masse et d'implantation",
        "Plans de niveaux détaillés",
        "Élévations et coupes architecturales",
        "Conformité aux réglementations locales"
      ],
      image: "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Layers className="h-16 w-16" />,
      title: "Plans Béton Armé",
      description: "Nos ingénieurs structures calculent et dimensionnent avec précision tous les éléments.",
      features: [
        "Calculs de structures et dimensionnement",
        "Plans de ferraillage détaillés",
        "Notes de calcul justificatives",
        "Optimisation des matériaux",
        "Respect des normes en vigueur"
      ],
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Wrench className="h-16 w-16" />,
      title: "Réalisation de Projets",
      description: "De la première pierre aux finitions, nous gérons intégralement vos projets de construction.",
      features: [
        "Gestion complète de projet",
        "Travaux de gros œuvre",
        "Second œuvre et finitions",
        "Coordination des corps d'état",
        "Contrôle qualité permanent"
      ],
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl text-blue-100">De la conception à la réalisation, nous couvrons tous vos besoins en construction</p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/devis"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus de Travail</h2>
            <p className="text-xl text-gray-600">Une méthode éprouvée pour garantir le succès de vos projets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Analyse de vos besoins et définition du projet" },
              { step: "02", title: "Étude", description: "Étude de faisabilité et analyse technique" },
              { step: "03", title: "Conception", description: "Élaboration des plans et documents techniques" },
              { step: "04", title: "Réalisation", description: "Exécution des travaux avec suivi qualité" },
              { step: "05", title: "Livraison", description: "Réception et mise en service" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Demander un Devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+221774548006"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Nous Appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;