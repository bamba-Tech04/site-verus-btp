import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const Realizations = () => {
  const realizations = [
    {
      id: 1,
      title: "Résidence Les Palmiers",
      description: "Complexe résidentiel moderne de 24 logements",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      year: "2023",
      category: "Résidentiel",
      surface: "3,500m²",
      units: "24 logements"
    },
    {
      id: 2,
      title: "Tour Élégance",
      description: "Immeuble de bureaux de 12 étages",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      year: "2023",
      category: "Commercial",
      surface: "4,800m²",
      units: "12 étages"
    },
    {
      id: 3,
      title: "Villa Prestige",
      description: "Villa de luxe avec piscine",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Saly",
      year: "2022",
      category: "Villa",
      surface: "450m²",
      units: "R+2"
    },
    {
      id: 4,
      title: "Centre Sea Plaza",
      description: "Centre commercial de 2500m²",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      year: "2022",
      category: "Commercial",
      surface: "2,500m²",
      units: "50 boutiques"
    },
    {
      id: 5,
      title: "Complexe Horizon",
      description: "Complexe de bureaux - 8 étages",
      image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      year: "2021",
      category: "Bureaux",
      surface: "3,200m²",
      units: "8 étages"
    },
    {
      id: 6,
      title: "Cité Nouvelle",
      description: "150 logements sociaux",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Thiès",
      year: "2021",
      category: "Social",
      surface: "8,000m²",
      units: "150 logements"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Résidentiel': return 'bg-blue-100 text-blue-800';
      case 'Commercial': return 'bg-green-100 text-green-800';
      case 'Villa': return 'bg-purple-100 text-purple-800';
      case 'Bureaux': return 'bg-orange-100 text-orange-800';
      case 'Social': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
            <p className="text-xl text-blue-100">Nos chantiers en cours de réalisation et déjà réalisés</p>
          </div>
        </div>
      </section>

      {/* Realizations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizations.map((realization) => (
              <div key={realization.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={realization.image} 
                    alt={realization.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(realization.category)}`}>
                      {realization.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Terminé
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{realization.title}</h3>
                  <p className="text-gray-600 mb-4">{realization.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {realization.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {realization.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      {realization.surface} - {realization.units}
                    </div>
                  </div>
                  
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-sm text-green-600 mt-1 font-medium">Projet terminé</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients est notre plus belle récompense</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amadou DIOP",
                project: "Résidence Les Palmiers",
                text: "VERUS BTP a réalisé notre résidence avec un professionnalisme exemplaire. La qualité des finitions et le respect des délais nous ont impressionnés."
              },
              {
                name: "Fatou SARR",
                project: "Centre Sea Plaza",
                text: "Une équipe compétente et à l'écoute. Notre centre commercial a été livré dans les temps avec une qualité irréprochable."
              },
              {
                name: "Pierre MARTIN",
                project: "Villa Prestige",
                text: "VERUS BTP a su comprendre nos besoins et nous proposer des solutions innovantes. Notre villa dépasse toutes nos attentes."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realizations;