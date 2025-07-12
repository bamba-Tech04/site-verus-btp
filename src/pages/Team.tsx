import React from 'react';
import { Mail, Phone, Award, Users, Target, Clock } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Joefroid Thour",
      position: "Directeur Général",
      description: "Ingénieur Civil avec plus de 10 ans d'expérience dans le secteur du BTP. Diplômé de l'École Polytechnique ESEBAT.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Gestion de projet", "Ingénierie civile", "Management"]
    }
  ];

  const team = [
    {
      name: "Aïssatou NDIAYE",
      position: "Architecte en Chef",
      description: "Architecte diplômée avec 5 ans d'expérience en conception architecturale. Spécialisée dans l'architecture moderne et durable.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "a.ndiaye@verusbtp.sn"
    },
    {
      name: "Ousmane FALL",
      position: "Ingénieur Structures",
      description: "Expert en calculs de structures et béton armé. Responsable de la conception et du dimensionnement des ouvrages complexes.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "o.fall@verusbtp.sn"
    },
    {
      name: "Fatou SARR",
      position: "Chef de Projet Senior",
      description: "Spécialisée dans la gestion et coordination des chantiers. Assure le suivi qualité et le respect des délais.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "f.sarr@verusbtp.sn"
    },
    {
      name: "Ibrahima KANE",
      position: "Ingénieur Géotechnique",
      description: "Expert en études de sol et fondations. Réalise les analyses géotechniques nécessaires à la sécurité des constructions.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "i.kane@verusbtp.sn"
    },
    {
      name: "Moussa DIENG",
      position: "Conducteur de Travaux",
      description: "Supervise l'exécution des travaux sur chantier. Coordonne les équipes et veille au respect des normes de sécurité.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "m.dieng@verusbtp.sn"
    },
    {
      name: "Aminata BA",
      position: "Responsable Qualité",
      description: "Assure le contrôle qualité sur tous nos chantiers. Veille au respect des normes et standards de construction.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "a.ba@verusbtp.sn"
    }
  ];

  const values = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Collaboration",
      description: "Nous travaillons ensemble vers un objectif commun, en partageant nos expertises et nos expériences."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Excellence",
      description: "Chaque membre de l'équipe s'engage à donner le meilleur de lui-même pour atteindre l'excellence."
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Innovation",
      description: "Nous encourageons la créativité et l'innovation pour proposer des solutions toujours plus performantes."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Engagement",
      description: "Notre équipe s'engage pleinement dans chaque projet avec passion et détermination."
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
            <p className="text-xl text-blue-100">Le personnel qualifié qui fait la force de VERUS BTP</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direction</h2>
            <p className="text-xl text-gray-600">L'équipe dirigeante qui guide VERUS BTP vers l'excellence</p>
          </div>
          
          {leadership.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 mb-6">{leader.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {leader.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Équipe Technique</h2>
            <p className="text-xl text-gray-600">Nos experts techniques qui donnent vie à vos projets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">L'Esprit d'Équipe VERUS BTP</h2>
            <p className="text-xl text-gray-600">Les valeurs qui nous unissent et nous rendent plus forts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Équipe</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            VERUS BTP est toujours à la recherche de talents passionnés pour renforcer notre équipe. 
            Si vous partagez nos valeurs et souhaitez contribuer à des projets d'exception, nous serions ravis de vous rencontrer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rh@verusbtp.sn"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Postuler
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

export default Team;