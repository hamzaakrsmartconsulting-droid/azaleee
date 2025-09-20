"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PrevoyanceProtectionPage() {
  const chartData = [
    { label: "Couverture invalidité", value: "85%" },
    { label: "Maintien niveau de vie", value: "€2,800" },
    { label: "Couverture santé", value: "100%" },
    { label: "Protection famille", value: "Intégrée" },
    { label: "Approche globale", value: "✓" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                Prévoyance / Protection de la famille
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                La retraite ne se limite pas à l'épargne : il faut aussi <strong>protéger sa famille</strong>.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm">
                  👉 Azalée Patrimoine propose une approche intégrée : <strong>anticiper les risques de la vie</strong> pour sécuriser la transmission et la stabilité financière de la famille.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Évaluer mes besoins
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Comparer les offres
                </button>
              </div>
            </div>
            
            {/* Right: Protection Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🛡️</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    Prévoyance
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">85%</p>
                  <p className="text-[#686868] text-xs">
                    Couverture invalidité
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    Protection famille
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">€2,800</p>
                  <p className="text-[#686868] text-xs">
                    Maintien niveau de vie
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🏥</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    Santé
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">100%</p>
                  <p className="text-[#686868] text-xs">
                    Couverture adaptée
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🎯</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    Approche intégrée
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">✓</p>
                  <p className="text-[#686868] text-xs">
                    Azalée Patrimoine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de prévoyance et protection"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Types de protection Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les piliers de la protection familiale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contrats de prévoyance */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Contrats de prévoyance</h3>
              </div>
              <p className="text-sm text-center">
                Pour maintenir un revenu en cas d'invalidité ou décès prématuré
              </p>
            </div>

            {/* Maintien du niveau de vie */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Maintien du niveau de vie</h3>
              </div>
              <p className="text-sm text-center">
                Du conjoint et des enfants
              </p>
            </div>

            {/* Couverture santé */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🏥</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Couverture complémentaire santé</h3>
              </div>
              <p className="text-sm text-center">
                Adaptée à la retraite
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Azalée Patrimoine Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              👉 Approche intégrée Azalée Patrimoine
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                Azalée Patrimoine propose une approche intégrée : <strong>anticiper les risques de la vie</strong> pour sécuriser la transmission et la stabilité financière de la famille.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🔮 Anticipation</h3>
                  <p className="text-sm">Des risques de la vie</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🔒 Sécurisation</h3>
                  <p className="text-sm">De la transmission</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">💰 Stabilité</h3>
                  <p className="text-sm">Financière de la famille</p>
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
            Prêt à protéger votre famille ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts Azalée Patrimoine vous accompagnent pour mettre en place une protection familiale adaptée à votre situation et sécuriser l'avenir de vos proches.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Évaluer mes besoins
          </button>
        </div>
      </section>
    </>
  );
}