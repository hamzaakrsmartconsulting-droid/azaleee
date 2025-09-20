"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function SimulationPage() {
  const chartData = [
    { label: "État des lieux", value: "Droits acquis" },
    { label: "Projection", value: "Revenus futurs" },
    { label: "Comparaison", value: "Niveau souhaité" },
    { label: "Plan d'épargne", value: "Solutions" },
    { label: "Simulations", value: "Personnalisées" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Simulation retraite
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Anticipez vos revenus futurs et identifiez les solutions à mettre en place dès aujourd'hui pour préparer votre retraite en toute sérénité.
            </p>
          </div>
          
          {/* Étapes de simulation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">État des lieux</h3>
              <p className="text-[#686868] text-sm">Droits acquis (base + complémentaires)</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Projection</h3>
              <p className="text-[#686868] text-sm">Revenus à la retraite</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Comparaison</h3>
              <p className="text-[#686868] text-sm">Pension vs niveau souhaité</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Plan d'épargne</h3>
              <p className="text-[#686868] text-sm">Solutions complémentaires</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Lancer ma simulation
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Voir les exemples
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Étapes de la simulation retraite"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Détail des étapes Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les étapes de votre simulation retraite
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Étapes détaillées */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      État des lieux de vos droits acquis
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Analyse de vos <strong>droits acquis</strong> (base + complémentaires). Nous recensons l'ensemble de vos trimestres validés et estimons vos droits futurs selon votre carrière actuelle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Projection de vos revenus à la retraite
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Calcul précis de vos <strong>revenus futurs</strong> selon différents scénarios d'âge de départ et d'évolution de carrière.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Comparaison entre pension attendue et niveau de vie souhaité
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Analyse de l'écart entre vos <strong>revenus futurs</strong> et le <strong>niveau de vie souhaité</strong> pour identifier les besoins de complément.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Mise en place d'un plan d'épargne complémentaire adapté
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Solutions personnalisées : <strong>PER, assurance-vie, immobilier, SCPI</strong> selon votre profil et vos objectifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Solutions d'épargne */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Solutions d'épargne complémentaire
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">PER</span>
                  <span className="text-[#4EBBBD] font-semibold">Déductible</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">Assurance-vie</span>
                  <span className="text-[#B99066] font-semibold">Flexible</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">Immobilier</span>
                  <span className="text-[#59E2E4] font-semibold">Revenus locatifs</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">SCPI</span>
                  <span className="text-[#4EBBBD] font-semibold">Mutualisation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              👉 Chez Azalée Patrimoine
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                Nous réalisons des <strong>simulations personnalisées</strong> permettant de visualiser vos revenus futurs et d'identifier les <strong>solutions à mettre en place dès aujourd'hui</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">📊 Analyse précise</h3>
                  <p className="text-sm">De vos droits acquis actuels</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🔮 Projection</h3>
                  <p className="text-sm">Revenus futurs selon scénarios</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🎯 Identification</h3>
                  <p className="text-sm">Des besoins de complément</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🛠️ Solutions</h3>
                  <p className="text-sm">Personnalisées et adaptées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à simuler votre retraite ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts Azalée Patrimoine vous accompagnent pour réaliser une simulation personnalisée et identifier les meilleures solutions pour votre retraite.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Commencer ma simulation
          </button>
        </div>
      </section>
    </>
  );
}