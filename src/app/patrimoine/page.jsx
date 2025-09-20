"use client";
import React from "react";
import Header from "../../components/common/Header";

export default function PatrimoinePage() {
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
                Patrimoine – Protégez et transmettez votre héritage avec Azalee Wealth
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Votre expert en transmission patrimoniale depuis plus de 30 ans. Nous vous accompagnons pour protéger votre famille, optimiser la transmission de votre patrimoine, et sécuriser l'avenir de vos proches avec des solutions personnalisées.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Demander un bilan patrimonial gratuit
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-[467px] flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#B99066]/20 to-[#4EBBBD]/20 rounded-2xl"></div>
                
                {/* Main image */}
                <img
                  src="/images/pqtri;oine.webp"
                  alt="Expert en gestion de patrimoine consultant des documents financiers dans un bureau élégant"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    console.log('Patrimoine card image failed to load:', e.target.src);
                  }}
                  onLoad={() => console.log('Patrimoine card image loaded successfully')}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-[#112033] font-semibold text-sm">0 €</p>
                      <p className="text-[#4A5568] text-xs">Bilan gratuit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <nav className="flex items-center text-xs sm:text-sm lg:text-base">
              <a href="#" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Accueil
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                Patrimoine
              </span>
            </nav>
          </div>

          {/* L'essentiel Block */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-10 mb-8 sm:mb-12 relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-cairo font-semibold leading-tight mb-4 sm:mb-6">
                  L'essentiel du patrimoine
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Succession et héritage
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Optimisez la transmission de votre patrimoine avec nos conseils en succession. Nous vous accompagnons pour minimiser les droits de succession et sécuriser l'avenir de vos proches.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Donation et transmission
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Anticipez la transmission de votre patrimoine grâce aux donations. Nos experts vous conseillent sur les meilleures stratégies de donation à titre gratuit ou onéreux.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Protection familiale
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Protégez votre famille avec des solutions adaptées. De l'assurance-vie aux contrats de prévoyance, nous vous proposons les meilleures options de protection.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-source-sans font-semibold mb-4 sm:mb-6">
                    Pourquoi choisir Azalee Wealth ?
                  </h3>
                  
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-source-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Plus de 30 ans d'expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Conseils personnalisés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Accompagnement complet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Solutions sur mesure</span>
                    </li>
                  </ul>
                  
                  <button className="w-full bg-white text-[#005C69] mt-6 sm:mt-8 py-3 sm:py-4 rounded-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200">
                    Contactez-nous
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Bilan patrimonial
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Analysez votre situation patrimoniale actuelle et identifiez les opportunités d'optimisation.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                En savoir plus →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Conseils patrimoniaux
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Bénéficiez de conseils personnalisés pour optimiser votre patrimoine et sa transmission.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                En savoir plus →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Transmission
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Préparez la transmission de votre patrimoine avec des stratégies adaptées à votre situation.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                En savoir plus →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 