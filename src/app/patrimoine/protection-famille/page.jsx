"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ProtectionFamillePage() {
  const chartData = [
    { label: "Couverture prévoyance", value: "€400,000" },
    { label: "Droits de succession", value: "€400,000" },
    { label: "Coût mensuel moyen", value: "€85" },
    { label: "Durée de couverture", value: "25 ans" },
    { label: "Protection famille", value: "100%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Protection de la famille
            </h1>
            <p className="text-white text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              Construire un patrimoine est une étape importante, mais encore faut-il s'assurer que sa famille pourra <strong>en bénéficier dans de bonnes conditions</strong>.
            </p>
            <div className="bg-white bg-opacity-20 border-l-4 border-white p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-white text-sm font-inter">
                En cas de décès prématuré, d'accident ou d'invalidité, un patrimoine peut vite devenir un <strong>poids</strong> plutôt qu'un soutien s'il est <strong>trop immobilisé</strong> (immobilier, parts sociales, entreprise).
              </p>
            </div>
            <p className="text-white text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              La protection familiale, c'est garantir à ses proches :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white text-xl font-bold relative z-10">1</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Revenus immédiats</h3>
                <p className="text-[#686868] text-sm">Pour maintenir leur niveau de vie</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="w-12 h-12 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#1A2F4A] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white text-xl font-bold relative z-10">2</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Garder le patrimoine</h3>
                <p className="text-[#686868] text-sm">Sans devoir tout vendre</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white text-xl font-bold relative z-10">3</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Sécurité financière</h3>
                <p className="text-[#686868] text-sm">Dans un moment difficile</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67C52] transition-colors duration-200"
            >
              Évaluer mes besoins
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#253F60] transition-colors duration-200"
            >
              Comparer les offres
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Indicateurs de protection familiale
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les paramètres clés de la protection familiale
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <PlacementChart 
              title="Indicateurs de protection familiale"
              data={chartData}
              chartImage="/images/variation-chart-image-944f04.png"
            />
          </div>
        </div>
      </section>

      {/* La prévoyance décès Section */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              La prévoyance décès : l'oubli qui coûte cher
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              La plupart des épargnants négligent la <strong>prévoyance décès</strong>, pensant que leur patrimoine suffira.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Problèmes au décès */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-400">
              <h3 className="text-[#112033] text-xl font-semibold mb-6">
                En réalité, au décès :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-[#686868] text-sm">
                      Les <strong>droits de succession</strong> doivent être payés rapidement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-[#686868] text-sm">
                      Le patrimoine peut être <strong>bloqué</strong> (indivision, délais notariaux)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-[#686868] text-sm">
                      Les revenus locatifs ou professionnels <strong>ne suffisent pas toujours</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conséquences sans prévoyance */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-400">
              <h3 className="text-[#112033] text-xl font-semibold mb-6">
                Sans liquidités, les héritiers doivent parfois <strong>vendre dans l'urgence</strong> :
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <span className="text-orange-600 text-xl">1</span>
                  <p className="text-[#686868] text-sm">
                    Une <strong>résidence secondaire</strong>
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <span className="text-orange-600 text-xl">2</span>
                  <p className="text-[#686868] text-sm">
                    Un bien <strong>immobilier locatif</strong>
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <span className="text-orange-600 text-xl">3</span>
                  <p className="text-[#686868] text-sm">
                    Des <strong>parts d'entreprise familiale</strong>
                  </p>
                </div>
              </div>
              <div className="bg-[#F0F9FF] border-l-4 border-[#253F60] p-4 rounded-r-lg mt-6">
                <p className="text-[#112033] text-xs text-center">
                  ("les bijoux de famille")
                </p>
              </div>
            </div>
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
              Un chef d'entreprise décède à 58 ans, laissant :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Situation sans prévoyance */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Situation sans prévoyance
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-[#F0F9FF] rounded-lg">
                  <span className="text-[#112033] font-medium">Maison familiale</span>
                  <span className="text-[#253F60] font-bold text-lg">800 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#FFF8E1] rounded-lg">
                  <span className="text-[#112033] font-medium">Parts de société</span>
                  <span className="text-[#B99066] font-bold text-lg">1 M€</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#F0F9FF] rounded-lg">
                  <span className="text-[#112033] font-medium">Épargne liquide</span>
                  <span className="text-[#253F60] font-bold text-lg">100 000 €</span>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="text-red-800 font-semibold mb-2">Problème :</h4>
                <p className="text-red-700 text-sm mb-2">
                  Les droits de succession dus par les enfants dépassent <strong>400 000 €</strong>.
                </p>
                <p className="text-red-700 text-sm">
                  Sans prévoyance, les héritiers n'ont pas d'autre choix que de vendre rapidement des actifs, parfois à perte.
                </p>
              </div>
            </div>

            {/* Situation avec prévoyance */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Avec un contrat de prévoyance décès de 400 000 €
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-medium">Maison familiale</span>
                  <span className="text-green-600 font-bold text-lg">800 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-medium">Parts de société</span>
                  <span className="text-green-600 font-bold text-lg">1 M€</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-medium">Épargne liquide</span>
                  <span className="text-green-600 font-bold text-lg">100 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#253F60] to-[#B99066] text-white rounded-lg">
                  <span className="font-medium">Prévoyance décès</span>
                  <span className="font-bold text-xl">400 000 €</span>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="text-green-800 font-semibold mb-2">Résultat :</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Les droits sont réglés <strong>immédiatement</strong></li>
                  <li>• L'entreprise et l'immobilier sont <strong>conservés</strong> dans le giron familial</li>
                  <li>• La transmission est <strong>sereine et équitable</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              Avec un contrat de prévoyance décès de 400 000 € :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  Les droits sont réglés <strong>immédiatement</strong>
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  L'entreprise et l'immobilier sont <strong>conservés</strong> dans le giron familial
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  La transmission est <strong>sereine et équitable</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les autres leviers de protection Section */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Les autres leviers de protection
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Découvrez les 3 principaux leviers de protection familiale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-3">
                  Assurance-vie
                </h3>
              </div>
              <p className="text-[#686868] text-sm text-center relative z-10">
                Clause bénéficiaire personnalisée pour protéger le conjoint ou les enfants.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066] hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-3">
                  Aménagement du régime matrimonial
                </h3>
              </div>
              <p className="text-[#686868] text-sm text-center relative z-10">
                Communauté universelle, clauses de préciput pour favoriser le conjoint survivant.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-3">
                  Mandat de protection future
                </h3>
              </div>
              <p className="text-[#686868] text-sm text-center relative z-10">
                Anticiper une perte de capacité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La vision Azalée Patrimoine Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="text-[#253F60] text-3xl">🚀</span>
              La vision Azalée Patrimoine
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Chez <strong>Azalée Patrimoine</strong>, nous intégrons toujours la <strong>protection familiale</strong> dans nos stratégies patrimoniales :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Contrats de prévoyance adaptés
              </h3>
              <p className="text-[#686868] text-sm">
                Mise en place de contrats de prévoyance adaptés à votre situation familiale et patrimoniale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Clause bénéficiaire optimisée
              </h3>
              <p className="text-[#686868] text-sm">
                Optimisation de la clause bénéficiaire des assurances-vie pour protéger vos proches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Coordination d'experts
              </h3>
              <p className="text-[#686868] text-sm">
                Coordination avec notaire et expert-comptable pour protéger conjoint et enfants.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Anticipation de la liquidité
              </h3>
              <p className="text-[#686868] text-sm">
                Anticipation de la liquidité nécessaire pour éviter les ventes forcées.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              La prévoyance décès est souvent ignorée, mais elle peut être le <strong>véritable sauveur</strong> d'un patrimoine transmis.
            </h3>
            
            <div className="mt-8 bg-white bg-opacity-20 border-l-4 border-white p-6 rounded-r-lg">
              <p className="text-white text-center font-semibold">
                <strong>Prenez rendez-vous avec Azalée Patrimoine</strong> pour mettre en place un plan de protection familiale sur mesure et assurer la pérennité de votre patrimoine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#253F60] to-[#B99066] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à protéger votre famille ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour mettre en place un plan de protection familiale sur mesure et assurer la pérennité de votre patrimoine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67C52] transition-colors duration-200"
            >
              Évaluer mes besoins
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#253F60] transition-colors duration-200"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </>
  );
}