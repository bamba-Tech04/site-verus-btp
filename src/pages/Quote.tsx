import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Users, Award, MapPin, Mail, Phone } from 'lucide-react';

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
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez intégrer EmailJS
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Formulaire de devis */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulaire de Demande de Devis</h2>
                  <p className="text-gray-600">Remplissez ce formulaire pour recevoir votre estimation personnalisée</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Informations personnelles */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                      <Users className="h-6 w-6 mr-2" />
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

                  {/* Détails du projet */}
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-900 mb-6 flex items-center">
                      <Award className="h-6 w-6 mr-2" />
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

                  {/* Informations complémentaires */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-6 flex items-center">
                      <Clock className="h-6 w-6 mr-2" />
                      Informations Complémentaires
                    </h3>
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

            {/* Sidebar avec informations de contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-blue-600" />
                  Besoin d'aide ?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600">+221 77 454 80 06</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@verusbtp.sn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">Keur Massar, Dakar</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Réponse Garantie</h4>
                  <p className="text-2xl font-bold">Sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Choisir VERUS BTP ?</h2>
            <p className="text-xl text-gray-600">Des avantages exclusifs pour votre tranquillité d'esprit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Devis 100% Gratuit</h3>
              <p className="text-gray-600">Estimation détaillée et personnalisée sans aucun engagement de votre part.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-orange-600 mb-4 flex justify-center">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Réponse Ultra-Rapide</h3>
              <p className="text-gray-600">Nous nous engageons à vous contacter sous 24h maximum.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 mb-4 flex justify-center">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise Reconnue</h3>
              <p className="text-gray-600">Accompagnement par nos experts certifiés avec plus de 15 ans d'expérience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;