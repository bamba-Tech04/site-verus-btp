import React from 'react';
import { CheckCircle, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de VERUS BTP</h1>
            <p className="text-xl text-blue-100">Construire l'avenir du Sénégal avec excellence et innovation</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Années d'expérience" },
              { number: "200+", label: "Projets réalisés" },
              { number: "50+", label: "Clients satisfaits" },
              { number: "100%", label: "Projets livrés" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée avec la vision de transformer le paysage architectural du Sénégal, VERUS BTP 
                s'est imposée comme un acteur incontournable du secteur du bâtiment et des travaux publics.
              </p>
              <p className="text-gray-600 mb-6">
                Depuis nos débuts, nous avons su allier tradition et modernité pour créer des espaces 
                qui répondent aux besoins d'aujourd'hui tout en anticipant ceux de demain. Notre équipe 
                d'experts passionnés travaille sans relâche pour offrir des solutions innovantes et durables.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">Technologies de pointe et méthodes modernes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">Qualité</h4>
                  <p className="text-sm text-gray-600">Standards élevés et finitions impeccables</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Équipe VERUS BTP" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-600">Notre Mission</h3>
              </div>
              <p className="text-gray-700">
                Fournir des solutions de construction innovantes et durables au Sénégal. Nous combinons 
                expertise technique, créativité et respect des délais pour réaliser des projets d'exception 
                qui marquent positivement le développement urbain et rural du pays.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-orange-500">Notre Vision</h3>
              </div>
              <p className="text-gray-700">
                Être le leader incontournable du secteur du BTP au Sénégal, reconnu pour notre 
                qualité irréprochable, notre innovation constante et notre engagement envers nos clients 
                et l'environnement. Contribuer significativement au développement durable du Sénégal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident chacune de nos actions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: "Excellence",
                description: "Nous visons l'excellence dans tous nos projets, de la conception à la livraison, sans compromis sur la qualité."
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Collaboration",
                description: "Nous travaillons ensemble vers un objectif commun, en partageant nos expertises et nos expériences."
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Innovation",
                description: "Nous intégrons les dernières technologies et méthodes de construction pour des solutions innovantes."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;