"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function BilanPage() {
  const chartData = [
    { label: "Patrimoine moyen analysé", value: "€1,250,000" },
    { label: "Optimisations identifiées", value: "8-12" },
    { label: "Économies potentielles", value: "€85,000" },
    { label: "Durée d'analyse", value: "2-3 semaines" },
    { label: "Taux de satisfaction", value: "94.7%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Bilan patrimonial
            </h1>
            <p className="text-white text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              Un <strong>bilan patrimonial</strong> est l'équivalent d'une radiographie complète de votre situation financière, fiscale et familiale.
            </p>
            <div className="bg-white bg-opacity-20 border-l-4 border-white p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-white text-sm font-inter">
                C'est le point de départ indispensable pour construire une <strong>stratégie patrimoniale sur mesure</strong>.
              </p>
            </div>
            
            {/* Bilan Image */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/bilan.png" 
                alt="Bilan patrimonial" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Bilan Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="text-[#686868] text-sm font-medium mb-2">Actifs analysés</h3>
              <p className="text-[#253F60] text-3xl font-bold">€1.25M</p>
              <p className="text-[#686868] text-sm">Patrimoine moyen</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="text-[#686868] text-sm font-medium mb-2">Optimisations</h3>
              <p className="text-[#B99066] text-3xl font-bold">8-12</p>
              <p className="text-[#686868] text-sm">Solutions identifiées</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="text-[#686868] text-sm font-medium mb-2">Économies</h3>
              <p className="text-[#253F60] text-3xl font-bold">€85K</p>
              <p className="text-[#686868] text-sm">Potentielles</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="text-[#686868] text-sm font-medium mb-2">Satisfaction</h3>
              <p className="text-[#B99066] text-3xl font-bold">94.7%</p>
              <p className="text-[#686868] text-sm">Clients satisfaits</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67C52] transition-colors duration-200"
            >
              Réaliser mon bilan
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#253F60] transition-colors duration-200">
              Télécharger l'exemple
            </button>
          </div>
        </div>
      </section>


      {/* Pourquoi réaliser un bilan patrimonial Section */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Pourquoi réaliser un bilan patrimonial ?
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un <strong>bilan patrimonial</strong> est l'équivalent d'une radiographie complète de votre situation financière, fiscale et familiale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Pourquoi faire un bilan */}
            <div>
              <h3 className="text-[#112033] text-xl font-semibold mb-8">
                Il permet de :
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#253F60] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-3">
                      Faire un état des lieux de vos <strong>actifs</strong>
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Immobilier, placements financiers, épargne professionnelle, parts sociales…
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-3">
                      Identifier vos <strong>passifs</strong>
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Emprunts, dettes fiscales, engagements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#253F60] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-3">
                      Évaluer votre <strong>fiscalité actuelle</strong> et ses optimisations possibles
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Identifier les leviers d'optimisation fiscale disponibles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-3">
                      Mettre en cohérence vos <strong>objectifs de vie</strong>
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Retraite, transmission, protection de la famille, projets immobiliers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bilan Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-semibold mb-6">
                Calculez votre potentiel d'optimisation
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Valeur de votre patrimoine
                  </label>
                  <input 
                    type="number" 
                    placeholder="€1,250,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253F60] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Situation familiale
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253F60] focus:border-transparent">
                    <option>Célibataire</option>
                    <option>Marié(e) sans enfants</option>
                    <option>Marié(e) avec enfants</option>
                    <option>Divorcé(e)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Âge
                  </label>
                  <input 
                    type="number" 
                    placeholder="45"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253F60] focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-[#253F60] text-white py-3 rounded-lg font-medium hover:bg-[#1A2F4A] transition-colors duration-200">
                  Estimer mes économies
                </button>

                <div className="bg-[#F0F9FF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Économies potentielles :</strong><br />
                    <span className="text-[#253F60] text-xl font-bold">€85,000</span> par an
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Que contient un bilan patrimonial Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Que contient un bilan patrimonial ?
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un rapport complet qui analyse :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#253F60] to-[#3A5A7A] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Situation familiale</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Régime matrimonial, clauses bénéficiaires d'assurance-vie, protection du conjoint et des enfants.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Situation financière</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Placements existants, rendement, frais.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Situation immobilière</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Résidence principale, locatif, SCI, valorisation et fiscalité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#253F60] to-[#3A5A7A] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Situation professionnelle</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Statut social, épargne salariale, retraite (PER, PERCO, Article 83, Madelin).
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl font-bold">5</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Vos objectifs</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Constitution d'un capital, transmission, optimisation fiscale, diversification.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">6</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Résultat</h3>
              </div>
              <p className="text-sm mb-4 relative z-10">
                Un document clair, pédagogique et opérationnel qui propose des <strong>scénarios d'optimisation</strong> et des <strong>solutions concrètes</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarification du bilan patrimonial Section */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Tarification du bilan patrimonial chez Azalée
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Club Azalée */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#3A5A7A] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Club Azalée</h3>
                <p className="text-lg font-bold mb-4">250 €/mois</p>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✓</span>
                  <p className="text-sm">Le bilan patrimonial est <strong>inclus gratuitement</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✓</span>
                  <p className="text-sm">Accompagnement personnalisé</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✓</span>
                  <p className="text-sm">Suivi régulier</p>
                </div>
              </div>
            </div>

            {/* Non-membres */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Non-membres</h3>
                <p className="text-lg font-bold mb-4">2 500 € HT</p>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">2</span>
                  <p className="text-sm">Le bilan est facturé <strong>2 500 € HT</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">⏱️</span>
                  <p className="text-sm">Environ <strong>10 heures de travail d'expert</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">📊</span>
                  <p className="text-sm">Collecte des données, analyses, simulations, recommandations</p>
                </div>
              </div>
            </div>

            {/* Club Azalée VIP */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#253F60] text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Club Azalée VIP</h3>
                <p className="text-lg font-bold mb-4">1 800 € HT/an</p>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-xl">3</span>
                  <p className="text-sm">Offre premium à <strong>1 800 € HT/an</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-xl">👨‍👩‍👧‍👦</span>
                  <p className="text-sm">Suivi patrimonial personnalisé pour l'ensemble des <strong>branches familiales</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-xl">🤝</span>
                  <p className="text-sm">Parents, enfants, grands-parents</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white border-l-4 border-[#253F60] p-6 rounded-r-lg">
            <p className="text-[#112033] text-center font-semibold">
              Idéal pour coordonner la stratégie patrimoniale d'une <strong>famille élargie</strong>, harmoniser les donations, préparer les successions et optimiser la fiscalité de plusieurs générations.
            </p>
          </div>
        </div>
      </section>

      {/* Exemple concret Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Exemple concret
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un couple de 50 ans, avec deux enfants majeurs et des parents âgés de 75 ans :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Situation initiale */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Situation initiale
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-[#F0F9FF] rounded-lg">
                  <span className="text-[#112033] font-medium">Résidence principale</span>
                  <span className="text-[#253F60] font-bold text-lg">900 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#FFF8E1] rounded-lg">
                  <span className="text-[#112033] font-medium">Patrimoine financier</span>
                  <span className="text-[#B99066] font-bold text-lg">600 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#F0F9FF] rounded-lg">
                  <span className="text-[#112033] font-medium">Parts d'entreprise</span>
                  <span className="text-[#253F60] font-bold text-lg">1,5 M€</span>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="text-orange-800 font-semibold mb-2">Problématiques :</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Retraite à préparer</li>
                  <li>• Transmission anticipée aux enfants</li>
                  <li>• Protection du conjoint</li>
                  <li>• Gestion de l'IFI</li>
                </ul>
              </div>
            </div>

            {/* Solutions Azalée */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Grâce au <strong>bilan patrimonial Azalée</strong>
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">1</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Mise en place d'une donation-partage</p>
                    <p className="text-green-700 text-xs">Pour réduire les droits futurs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">2</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Intégration d'un contrat de capitalisation</p>
                    <p className="text-green-700 text-xs">Pour lisser la fiscalité</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">3</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Préparation d'un pacte Dutreil</p>
                    <p className="text-green-700 text-xs">Pour l'entreprise familiale</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">4</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Mise en place d'une prévoyance décès</p>
                    <p className="text-green-700 text-xs">Pour sécuriser la transmission</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="text-green-800 font-semibold mb-2">Résultat :</h4>
                <p className="text-green-700 text-sm">
                  Une stratégie globale qui <strong>réduit de moitié les droits de succession</strong> et sécurise le patrimoine pour les générations futures.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              Résultat : une stratégie globale qui <strong>réduit de moitié les droits de succession</strong> et sécurise le patrimoine pour les générations futures.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Réduction des droits de succession</strong><br />
                  De moitié grâce à l'anticipation
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Sécurisation du patrimoine</strong><br />
                  Pour les générations futures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#253F60] to-[#B99066] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à réaliser votre bilan patrimonial ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Le bilan patrimonial n'est pas un simple document : c'est une <strong>feuille de route stratégique</strong>.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              Chez <strong>Azalée Patrimoine</strong>, nous vous apportons :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une analyse <strong>indépendante et complète</strong>
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Des <strong>solutions concrètes et chiffrées</strong>
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Un <strong>accompagnement personnalisé</strong> dans le temps
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67C52] transition-colors duration-200"
            >
              Réaliser mon bilan
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#253F60] transition-colors duration-200"
            >
              Prendre rendez-vous
            </button>
          </div>

          <div className="mt-8 bg-white bg-opacity-20 border-l-4 border-white p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-white text-center font-semibold">
              <strong>Prenez rendez-vous dès aujourd'hui</strong> pour réaliser votre bilan patrimonial et préparer l'avenir avec sérénité.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}