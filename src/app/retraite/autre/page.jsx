"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function AutreRetraitePage() {
  const chartData = [
    { label: "Solutions complémentaires", value: "4" },
    { label: "Immobilier locatif", value: "LMNP" },
    { label: "SCPI rendement", value: "5-7%" },
    { label: "Assurance-vie", value: "8 ans" },
    { label: "Produits financiers", value: "ETF" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Autres solutions retraite
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              En complément du PER et des dispositifs d'entreprise, découvrez les solutions alternatives pour préparer votre retraite.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Immobilier locatif</h3>
              <p className="text-[#686868] text-sm">Revenus complémentaires</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">SCPI</h3>
              <p className="text-[#686868] text-sm">Rente mutualisée</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Assurance-vie</h3>
              <p className="text-[#686868] text-sm">Fiscalité douce</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Produits financiers</h3>
              <p className="text-[#686868] text-sm">ETF, obligations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Découvrir les solutions
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Solutions alternatives de retraite"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Détail des solutions Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Solutions complémentaires détaillées
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Solutions Overview */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🏠</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Immobilier locatif
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      <strong>Immobilier locatif</strong> (classique, LMNP, nue-propriété) pour générer des revenus complémentaires.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🏢</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      SCPI de rendement
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      <strong>SCPI de rendement</strong> pour une rente régulière et mutualisée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Assurance-vie
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      <strong>Assurance-vie</strong> : flexibilité, fiscalité douce après 8 ans, transmission optimisée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Produits financiers diversifiés
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      <strong>Produits financiers diversifiés</strong> (ETF, UCS, obligations).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Objectif */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Objectif : retraite sur-mesure
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
                  <h4 className="font-semibold mb-3">🎯 Objectif principal</h4>
                  <p className="text-sm">
                    Créer une <strong>retraite sur-mesure</strong>, adaptée à vos besoins et à votre horizon.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F8F9FA] rounded-lg p-4 text-center">
                    <h4 className="text-[#005C69] font-semibold mb-2">📈 Diversification</h4>
                    <p className="text-[#374151] text-sm">Répartition des risques</p>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-4 text-center">
                    <h4 className="text-[#005C69] font-semibold mb-2">🎯 Personnalisation</h4>
                    <p className="text-[#374151] text-sm">Selon vos besoins</p>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-4 text-center">
                    <h4 className="text-[#005C69] font-semibold mb-2">⏰ Horizon</h4>
                    <p className="text-[#374151] text-sm">Adapté à votre âge</p>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-4 text-center">
                    <h4 className="text-[#005C69] font-semibold mb-2">🔄 Flexibilité</h4>
                    <p className="text-[#374151] text-sm">Solutions modulables</p>
                  </div>
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
            Prêt à diversifier votre épargne retraite ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts Azalée Patrimoine vous accompagnent pour créer une retraite sur-mesure avec des solutions complémentaires adaptées à votre profil.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Découvrir les solutions
          </button>
        </div>
      </section>
    </>
  );
}