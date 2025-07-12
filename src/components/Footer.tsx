import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">VERUS BTP</h3>
                <p className="text-sm text-gray-400">Excellence en construction</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos projets de construction au Sénégal. 
              De la conception à la réalisation, nous donnons vie à vos projets avec expertise et qualité.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Keur Massar, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+221 77 454 80 06</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">contact@verusbtp.sn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Études</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Plans Architecturaux</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Plans Béton Armé</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Réalisation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><Link to="/a-propos" className="text-gray-300 hover:text-blue-400 transition-colors">À Propos</Link></li>
              <li><Link to="/equipe" className="text-gray-300 hover:text-blue-400 transition-colors">Notre Équipe</Link></li>
              <li><Link to="/partenaires" className="text-gray-300 hover:text-blue-400 transition-colors">Partenaires</Link></li>
              <li><Link to="/realisations" className="text-gray-300 hover:text-blue-400 transition-colors">Réalisations</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 VERUS BTP. Tous droits réservés. Conçu avec excellence pour construire l'avenir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;