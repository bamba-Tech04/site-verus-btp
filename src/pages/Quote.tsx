import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    surface: '',
    niveaux: '',
    localisation: '',
    service: '',
    budget: '',
    delai: '',
    message: '',
    consent: false,
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Votre demande de devis a été envoyée avec succès ! Nous vous contacterons sous 24h.');
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Demande de Devis Gratuit</h1>
            <p className="text-xl text-blue-100">Obtenez une estimation personnalisée pour votre projet de construction</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Devis Gratuits</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">24h</div>
              <p className="text-gray-600">Délai de réponse</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
              <p className="text-gray-600">Devis réalisés</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Demander Votre Devis Chez VERUS BTP ?</h2>
            <p className="text-xl text-gray-600">Des avantages exclusifs pour votre tranquillité d'esprit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: "Devis 100% Gratuit",
                description: "Estimation détaillée et personnalisée sans aucun engagement de votre part."
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Réponse Ultra-Rapide",
                description: "Nous nous engageons à vous contacter sous 24h maximum."
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Expertise Reconnue",
                description: "Accompagnement par nos experts certifiés avec plus de 15 ans d'expérience."
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulaire de Demande de Devis</h2>
              <p className="text-xl text-gray-600">Remplissez ce formulaire pour recevoir votre estimation personnalisée</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-600" />
                  Vos Informations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      placeholder="+221 XX XXX XX XX"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-orange-500" />
                  Détails du Projet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-2">
                      Surface du terrain (m²) *
                    </label>
                    <input
                      type="number"
                      id="surface"
                      name="surface"
                      required
                      min="1"
                      placeholder="Ex: 500"
                      value={formData.surface}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="niveaux" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de Niveaux *
                    </label>
                    <input
                      type="text"
                      id="niveaux"
                      name="niveaux"
                      required
                      placeholder="Ex: R+1, R+2..."
                      value={formData.niveaux}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="localisation" className="block text-sm font-medium text-gray-700 mb-2">
                      Localisation *
                    </label>
                    <input
                      type="text"
                      id="localisation"
                      name="localisation"
                      required
                      placeholder="Ville, quartier, région"
                      value={formData.localisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="plans-architecturaux">Plans Architecturaux</option>
                      <option value="plan-beton-arme">Plan Béton Armé</option>
                      <option value="realisation">Réalisation</option>
                      <option value="etude-complete">Étude Complète</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Prévisionnel
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="moins-10m">Moins de 10 millions FCFA</option>
                      <option value="10-25m">10 à 25 millions FCFA</option>
                      <option value="25-50m">25 à 50 millions FCFA</option>
                      <option value="50-100m">50 à 100 millions FCFA</option>
                      <option value="plus-100m">Plus de 100 millions FCFA</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="delai" className="block text-sm font-medium text-gray-700 mb-2">
                      Délai souhaité
                    </label>
                    <select
                      id="delai"
                      name="delai"
                      value={formData.delai}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un délai</option>
                      <option value="urgent">Urgent (moins de 3 mois)</option>
                      <option value="court">Court terme (3-6 mois)</option>
                      <option value="moyen">Moyen terme (6-12 mois)</option>
                      <option value="long">Long terme (plus de 12 mois)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message complémentaire
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Décrivez votre projet en détail..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              {/* Consent */}
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                    J'accepte d'être contacté par VERUS BTP concernant ma demande de devis *
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                    Je souhaite recevoir les actualités et offres de VERUS BTP
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer ma Demande de Devis
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
            <p className="text-xl text-gray-600">Notre équipe est là pour vous accompagner</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600">+221 77 454 80 06</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@verusbtp.sn</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">Keur Massar, Dakar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;