'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#253F60] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2 text-sm">
              <p>106 Rue de Richelieu</p>
              <p>75002 Paris</p>
              <p>contact@azalee-patrimoine.fr</p>
              <p>01 53 45 85 00</p>
            </div>
            <button
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="mt-4 bg-[#B99066] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#A67A5A] transition-colors duration-200"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Services */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Nos services</h3>
            <div className="space-y-2 text-sm">
              <p>Conseil en gestion de patrimoine</p>
              <p>Optimisation fiscale</p>
              <p>Investissement immobilier</p>
              <p>Placements financiers</p>
              <p>Transmission de patrimoine</p>
            </div>
          </div>

          {/* Outils */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Outils</h3>
            <div className="space-y-2 text-sm">
              <a href="/outils/calculatrice-impots" className="hover:text-[#B99066] transition-colors">
                Calculateur d'impôts
              </a>
              <a href="/outils/calculs-financiers" className="hover:text-[#B99066] transition-colors">
                Calculs financiers
              </a>
              <a href="/outils-financiers/assurance-vie-vs-per" className="hover:text-[#B99066] transition-colors">
                Assurance-vie vs PER
              </a>
            </div>
          </div>

          {/* Mentions légales */}
          <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Mentions légales</h3>
              <div className="space-y-2 text-sm">
                <p className="text-lg font-bold mb-2"><strong>Azalée Patrimoine</strong></p>
                <p className="text-sm mb-2">SASU au capital de 8 000 €</p>
              <p>106 rue de Richelieu, 75002 Paris</p>
              <p>SIREN 790 419 949 – RCS Paris</p>
              <p>TVA intracommunautaire : FR90790419949</p>
              <p>Inscrite à l'ORIAS n° 13001775 (<a href="https://www.orias.fr" className="hover:text-[#B99066] transition-colors">www.orias.fr</a>) en qualité d'intermédiaire en assurance, banque et finance.</p>
              <p>Adhérente à l'ANACOFI-CIF (92 rue d'Amsterdam, 75009 Paris) et à l'ANACOFI-Courtage (90 rue d'Amsterdam, 75009 Paris).</p>
              <p>Soumise au contrôle de l'ACPR (4 place de Budapest, 75436 Paris Cedex 09).</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <div className="mb-4 md:mb-0">
              <p>© 2025 AZALEE PATRIMOINE. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#B99066] transition-colors">
                Politique de confidentialité
              </a>
              <a href="/conditions-generales" className="hover:text-[#B99066] transition-colors">
                Conditions d'utilisation
              </a>
              <a href="/mentions-legales" className="hover:text-[#B99066] transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;