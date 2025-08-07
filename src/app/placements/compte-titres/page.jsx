"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function CompteTitresPage() {
  const chartData = [
    { label: "Valeur moyenne du portefeuille", value: "€45,000" },
    { label: "Rendement annuel moyen", value: "6.8%" },
    { label: "Nombre de titres détenus", value: "12" },
    { label: "Frais de gestion", value: "0.5%" },
    { label: "Performance YTD", value: "+4.2%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[543px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              {/* Main Title */}
              <h1 className="text-black text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                Compte Titres – Investissez en actions avec flexibilité
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Le compte titres vous permet d'investir directement en actions, obligations et autres valeurs mobilières. 
                Profitez d'une gestion flexible de votre portefeuille avec des frais optimisés et un accès aux marchés internationaux.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Ouvrir un compte titres
                </button>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="w-full lg:w-[467px] bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 relative">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#4EBBBD] font-bold text-lg">📈</span>
                </div>
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
                  Avantages du compte titres
                </h2>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Accès direct aux marchés actions et obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Gestion flexible de votre portefeuille</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Frais de transaction optimisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Accès aux marchés internationaux</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance du compte titres"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Features Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Pourquoi choisir un compte titres ?
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Le compte titres offre une flexibilité maximale pour construire un portefeuille d'investissement 
              personnalisé selon vos objectifs et votre profil de risque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Diversification
              </h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                Accédez à une large gamme d'actifs : actions françaises et internationales, 
                obligations, ETF, et produits structurés.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Flexibilité
              </h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                Achetez et vendez vos titres à tout moment selon vos besoins 
                et les opportunités de marché.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Marchés internationaux
              </h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                Investissez sur les principales places boursières mondiales 
                pour optimiser votre diversification géographique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Comment fonctionne un compte titres ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Ouverture
              </h3>
              <p className="text-[#686868] text-sm">
                Ouvrez votre compte titres en ligne ou auprès de votre conseiller
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Alimentation
              </h3>
              <p className="text-[#686868] text-sm">
                Effectuez un virement pour alimenter votre compte
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Investissement
              </h3>
              <p className="text-[#686868] text-sm">
                Choisissez vos titres et passez vos ordres
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Suivi
              </h3>
              <p className="text-[#686868] text-sm">
                Suivez l'évolution de votre portefeuille en temps réel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à commencer vos investissements ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans l'ouverture et la gestion de votre compte titres 
            pour optimiser vos investissements selon vos objectifs.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Demander un rendez-vous
          </button>
        </div>
      </section>
    </>
  );
} 