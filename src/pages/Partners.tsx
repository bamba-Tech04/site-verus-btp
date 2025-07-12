import React from 'react';
import { Building, Truck, Wrench, CreditCard, Award, CheckCircle, DollarSign, Clock, Target } from 'lucide-react';

const Partners = () => {
  const materialPartners = [
    {
      name: "Ciments du Sahel",
      category: "Fournisseur de Ciment",
      description: "Leader dans la production de ciment au Sénégal, nous fournit des matériaux de haute qualité.",
      services: ["Ciment Portland", "Ciment Composite", "Livraison"]
    },
    {
      name: "Sococim Industries",
      category: "Matériaux de Construction",
      description: "Partenaire stratégique pour l'approvisionnement en ciment et matériaux de construction.",
      services: ["Ciment", "Granulats", "Support technique"]
    },
    {
      name: "Delta Construction",
      category: "Matériaux Divers",
      description: "Fournisseur de matériaux de construction variés : fer à béton, matériaux de finition.",
      services: ["Fer à béton", "Matériaux de finition", "Équipements"]
    }
  ];

  const technicalPartners = [
    {
      name: "Construction Plus",
      category: "Partenaire Technique",
      description: "Spécialiste en solutions techniques avancées et équipements de construction.",
      services: ["Équipements spécialisés", "Conseil technique", "Formation"]
    },
    {
      name: "GéoTech Sénégal",
      category: "Études Géotechniques",
      description: "Bureau d'études spécialisé en géotechnique pour nos projets de construction.",
      services: ["Études de sol", "Analyses géotechniques", "Recommandations"]
    },
    {
      name: "Électro Services",
      category: "Installations Électriques",
      description: "Entreprise spécialisée dans les installations électriques et la domotique.",
      services: ["Installation électrique", "Domotique", "Maintenance"]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "Qualité Garantie",
      description: "Nos partenaires sont sélectionnés pour leur excellence, garantissant la qualité de nos réalisations."
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Coûts Optimisés",
      description: "Des tarifs préférentiels négociés avec nos partenaires pour offrir les meilleurs prix."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Délais Respectés",
      description: "Un réseau fiable qui nous permet de respecter les délais de livraison et d'exécution."
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Innovation",
      description: "Accès aux dernières technologies et innovations grâce à nos partenaires spécialisés."
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires</h1>
            <p className="text-xl text-blue-100">Les différents collaborateurs qui nous accompagnent</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Un Réseau de Partenaires de Confiance</h2>
            <p className="text-lg text-gray-600 mb-6">
              Chez VERUS BTP, nous croyons fermement que la réussite de nos projets repose sur 
              la qualité de nos partenariats. Nous avons tissé au fil des années un réseau 
              solide de partenaires fiables qui partagent nos valeurs d'excellence et de qualité.
            </p>
            <p className="text-lg text-gray-600">
              Ces collaborations stratégiques nous permettent d'offrir à nos clients des solutions 
              complètes et innovantes, tout en garantissant les meilleurs standards de qualité 
              et de service.
            </p>
          </div>
        </div>
      </section>

      {/* Material Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fournisseurs de Matériaux</h2>
            <p className="text-xl text-gray-600">Nos partenaires pour l'approvisionnement en matériaux de construction de qualité</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{partner.category}</p>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex flex-wrap gap-2">
                  {partner.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partenaires Techniques</h2>
            <p className="text-xl text-gray-600">Nos collaborateurs techniques pour des solutions spécialisées</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{partner.category}</p>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex flex-wrap gap-2">
                  {partner.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Les Avantages de Nos Partenariats</h2>
            <p className="text-xl text-gray-600">Comment nos collaborations bénéficient à nos clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Devenir Notre Partenaire</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Vous êtes une entreprise sérieuse et souhaitez rejoindre notre réseau de partenaires ? 
            Nous sommes toujours ouverts à de nouvelles collaborations avec des acteurs 
            qui partagent nos valeurs de qualité et d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partenaires@verusbtp.sn"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Proposer un Partenariat
            </a>
            <a
              href="tel:+221774548006"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;