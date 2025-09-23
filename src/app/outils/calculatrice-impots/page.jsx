"use client";
import React from 'react';
import Header from '../../../components/common/Header';

export default function CalculatriceImpotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Advanced Financial Calculations Section */}
      <section className="py-16 bg-gradient-to-r from-[#253F60] to-[#B99066]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            {/* Features Grid */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#253F60] rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-[#112033]">Simulation Plus-values</h4>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Calculez précisément vos plus-values sur tous vos supports d'investissement avec prise en compte des frais et de la fiscalité.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-[#112033]">Comparaison Enveloppes</h4>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Comparez l'efficacité fiscale de vos différents placements : assurance-vie, PER, PEA, CTO, etc.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#253F60] rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-[#112033]">Aide à la Décision</h4>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Obtenez des recommandations personnalisées pour optimiser votre stratégie fiscale et patrimoniale.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-[#253F60] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Prêt à optimiser vos investissements ?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Utilisez nos outils professionnels pour prendre les meilleures décisions fiscales et patrimoniales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-[#B99066] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A67A5A] transition-colors"
                >
                  Prendre rendez-vous
                </button>
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#253F60] transition-colors"
                >
                  Consulter un expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 