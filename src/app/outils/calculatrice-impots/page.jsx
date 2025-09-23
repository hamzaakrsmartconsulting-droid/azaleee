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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#B99066]/20 to-[#253F60]/20 rounded-2xl"></div>
                
                {/* Main image */}
                <img
                  src="/images/calc.webp"
                  alt="Outils de calculs financiers avancés - Interface professionnelle de simulation"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    console.log('Calc image failed to load:', e.target.src);
                  }}
                  onLoad={() => console.log('Calc image loaded successfully')}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-[#112033] font-semibold text-sm">Outils Pro</p>
                      <p className="text-[#4A5568] text-xs">Simulation avancée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kwipper BIG EXPERT */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#253F60] rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#112033]">Kwipper BIG EXPERT</h3>
                  <p className="text-[#4A5568] text-sm">Simulation professionnelle</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#253F60] rounded-full mt-2"></div>
                  <p className="text-white leading-relaxed">
                    <strong>Simulation des plus-values, frais, taux</strong> sur assurance-vie, PER, PEA, CTO…
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B99066] rounded-full mt-2"></div>
                  <p className="text-white leading-relaxed">
                    <strong>Comparaison des enveloppes fiscales</strong> et impact réel sur le rendement net.
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                <p className="text-white font-medium text-sm">
                  <strong>Outil d'aide à la décision</strong> pour arbitrer entre fiscalité immédiate et différée.
                </p>
              </div>

              <button 
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="w-full bg-[#B99066] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A67A5A] transition-all duration-300 hover:scale-105"
              >
                Prendre rendez-vous
              </button>
            </div>

            {/* Features Grid */}
            <div className="lg:col-span-2 space-y-6">
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