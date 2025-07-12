import React from 'react';
import { MapPin, Clock, Home } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Résidence Moderne",
      description: "Complexe résidentiel de 24 logements avec espaces verts",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      status: "En cours",
      progress: 65,
      surface: "3,500m²",
      duration: "18 mois",
      units: "24 logements"
    },
    {
      id: 2,
      title: "Centre Commercial",
      description: "Surface commerciale moderne avec parking souterrain",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Thiès",
      status: "Planification",
      progress: 25,
      surface: "2,500m²",
      duration: "24 mois",
      units: "50 boutiques"
    },
    {
      id: 3,
      title: "Immeuble de Bureaux",
      description: "Tour moderne de bureaux avec façade en verre",
      image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Dakar",
      status: "En cours",
      progress: 45,
      surface: "4,200m²",
      duration: "30 mois",
      units: "8 étages"
    },
    {
      id: 4,
      title: "Villa Contemporaine",
      description: "Villa de luxe avec piscine et jardin paysager",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Saly",
      status: "Terminé",
      progress: 100,
      surface: "450m²",
      duration: "12 mois",
      units: "R+2"
    },
    {
      id: 5,
      title: "Complexe Hospitalier",
      description: "Centre médical moderne avec équipements de pointe",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Saint-Louis",
      status: "Planification",
      progress: 15,
      surface: "8,000m²",
      duration: "36 mois",
      units: "150 lits"
    },
    {
      id: 6,
      title: "Complexe Éducatif",
      description: "École moderne avec laboratoires et terrains de sport",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Kaolack",
      status: "En cours",
      progress: 75,
      surface: "5,500m²",
      duration: "20 mois",
      units: "1000 élèves"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Planification': return 'bg-yellow-100 text-yellow-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
            <p className="text-xl text-blue-100">Découvrez nos différentes maquettes et projets en cours de réalisation</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Home className="h-4 w-4 mr-2" />
                      {project.surface} - {project.units}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progression</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;