"use client";
import React from "react";
import Header from "../../components/common/Header";

export default function OutilsFinanciersPage() {
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
                Outils financiers – Calculez et simulez vos investissements avec Azalee Wealth
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Découvrez nos outils financiers pour calculer vos impôts, simuler vos investissements et optimiser votre patrimoine. Des calculateurs précis et des simulateurs interactifs pour vous aider dans vos décisions financières.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Accéder aux outils gratuits
                </button>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="w-full lg:w-[467px] bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 relative">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <img
                  src="/images/placements-responsive-header-icon-56586a.png"
                  alt="Expert Icon"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                />
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
                  Outils gratuits
                </h2>
              </div>
              
              {/* Floating Price Card */}
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">100% →<br /></span>
                  <span className="sm:hidden">100%</span>
                  <span className="hidden sm:block">Gratuit</span>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Calculateur d'impôts précis et à jour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Simulateur d'investissement interactif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Calculs financiers divers et spécialisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Guides pratiques et conseils personnalisés</span>
                  </li>
                </ul>
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
                Outils financiers
              </span>
            </nav>
          </div>

          {/* L'essentiel Block */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-10 mb-8 sm:mb-12 relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-cairo font-semibold leading-tight mb-4 sm:mb-6">
                  Nos outils financiers
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Calculateur d'impôts
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Calculez vos impôts en temps réel avec notre calculateur précis et à jour. Estimez vos droits d'impôt, optimisez votre fiscalité et planifiez vos investissements en toute sérénité.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Simulateur d'investissement
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Simulez vos investissements et projetez vos rendements futurs. Testez différents scénarios d'investissement et trouvez la stratégie qui correspond le mieux à vos objectifs.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                    <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                      Calculs financiers divers
                    </h3>
                    <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                      Accédez à une gamme complète d'outils de calcul financier : emprunts, épargne, retraite, assurance-vie et bien plus encore pour optimiser vos décisions financières.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-source-sans font-semibold mb-4 sm:mb-6">
                    Avantages de nos outils
                  </h3>
                  
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-source-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Calculs précis et à jour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Interface intuitive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Résultats instantanés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>100% gratuit</span>
                    </li>
                  </ul>
                  
                  <button className="w-full bg-white text-[#005C69] mt-6 sm:mt-8 py-3 sm:py-4 rounded-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200">
                    Essayer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Calculateur d'impôts
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Calculez vos impôts sur le revenu, optimisez votre fiscalité et planifiez vos investissements.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                Calculer maintenant →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Simulateur d'investissement
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Simulez vos investissements et projetez vos rendements futurs avec différents scénarios.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                Simuler maintenant →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                Guides pratiques
              </h3>
              <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                Accédez à nos guides pratiques et conseils pour optimiser vos décisions financières.
              </p>
              <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                Consulter les guides →
              </button>
            </div>
          </div>

          {/* Additional Tools Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-black text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center">
              Autres outils disponibles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2">
                  Calculs financiers
                </h3>
                <p className="text-[#374151] text-sm font-inter">
                  Emprunts, épargne, retraite
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2">
                  Simulations générales
                </h3>
                <p className="text-[#374151] text-sm font-inter">
                  Scénarios d'investissement
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2">
                  Guides pratiques
                </h3>
                <p className="text-[#374151] text-sm font-inter">
                  Conseils et astuces
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2">
                  Autres outils
                </h3>
                <p className="text-[#374151] text-sm font-inter">
                  Outils spécialisés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 