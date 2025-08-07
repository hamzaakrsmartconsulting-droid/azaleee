"use client";
import React from "react";
import Header from "../../../components/common/Header";

export default function AssuranceVieLuxembourgPage() {
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
                Assurance Vie Luxembourg – L'excellence européenne pour votre patrimoine avec Azalee Wealth
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Découvrez les avantages uniques de l'assurance vie luxembourgeoise. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre épargne avec les meilleures conditions fiscales européennes et une sécurité juridique renforcée.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Demander une étude patrimoniale gratuite
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
                  Nos experts à votre service
                </h2>
              </div>
              
              {/* Floating Price Card */}
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">0 € →<br /></span>
                  <span className="sm:hidden">0€</span>
                  <span className="hidden sm:block">Analyse personnalisée gratuite</span>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Expertise en droit luxembourgeois et européen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Optimisation fiscale internationale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Accès aux meilleurs contrats européens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Accompagnement multilingue et personnalisé</span>
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
              <a href="/" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Accueil
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <a href="/placements" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Solutions de placement
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                Assurance Vie Luxembourg
              </span>
            </nav>
          </div>

          {/* L'essentiel Block */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-10 mb-8 sm:mb-12 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#59E2E4] to-[#B99066] rounded-t-lg"></div>
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-4 sm:mb-6">
              L'essentiel de l'Assurance Vie Luxembourg
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-4 rounded-lg">
                <h3 className="text-[#005C69] font-cairo font-semibold text-base mb-2">Sécurité juridique</h3>
                <p className="text-[#374151] text-sm font-inter">Contrats régis par le droit luxembourgeois, reconnu pour sa stabilité et sa protection des investisseurs.</p>
              </div>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-4 rounded-lg">
                <h3 className="text-[#005C69] font-cairo font-semibold text-base mb-2">Fiscalité européenne</h3>
                <p className="text-[#374151] text-sm font-inter">Bénéficiez des avantages fiscaux européens avec une transparence et une conformité optimales.</p>
              </div>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-4 rounded-lg">
                <h3 className="text-[#005C69] font-cairo font-semibold text-base mb-2">Diversification internationale</h3>
                <p className="text-[#374151] text-sm font-inter">Accès à une large gamme de supports d'investissement européens et internationaux.</p>
              </div>
            </div>
          </div>

          {/* Pourquoi choisir l'Assurance Vie Luxembourg */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Pourquoi choisir l'Assurance Vie Luxembourg ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Stabilité européenne</h3>
                <p className="text-[#374151] text-sm font-inter">Luxembourg, centre financier européen reconnu pour sa stabilité politique et économique.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Réglementation stricte</h3>
                <p className="text-[#374151] text-sm font-inter">Contrôles rigoureux de la CSSF et conformité aux standards européens.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Performance optimale</h3>
                <p className="text-[#374151] text-sm font-inter">Accès aux meilleurs gestionnaires européens et performances historiques élevées.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Transmission internationale</h3>
                <p className="text-[#374151] text-sm font-inter">Solutions de transmission adaptées aux familles internationales et expatriées.</p>
              </div>
            </div>
          </div>

          {/* Nos Solutions d'Assurance Vie Luxembourg */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Nos Solutions d'Assurance Vie Luxembourg
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-[#59E2E4]">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Contrats Unit-Linked</h3>
                <ul className="space-y-3 text-[#374151] font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Gestion en unités de compte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Accès aux fonds européens de qualité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Gestion pilotée par des experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Flexibilité totale des versements</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-[#B99066]">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Contrats Multi-Supports</h3>
                <ul className="space-y-3 text-[#374151] font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Diversification maximale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Fonds en euros garantis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Unités de compte performantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Gestion personnalisée selon votre profil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Avantages Spécifiques Luxembourg */}
          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Les Avantages Spécifiques du Luxembourg
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Réglementation européenne</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Directive Solvabilité II</li>
                  <li>• Contrôles CSSF stricts</li>
                  <li>• Protection des investisseurs</li>
                  <li>• Transparence maximale</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Fiscalité avantageuse</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Pas de retenue à la source</li>
                  <li>• Traités fiscaux européens</li>
                  <li>• Optimisation internationale</li>
                  <li>• Conformité CRS/FATCA</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Expertise multilingue</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Support en français</li>
                  <li>• Documentation multilingue</li>
                  <li>• Accompagnement international</li>
                  <li>• Expertise cross-border</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Notre Accompagnement Spécialisé */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Notre Accompagnement Spécialisé Luxembourg
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Analyse internationale</h3>
                <p className="text-[#374151] text-sm font-inter">Évaluation de votre situation fiscale et patrimoniale internationale</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Stratégie européenne</h3>
                <p className="text-[#374151] text-sm font-inter">Élaboration d'une stratégie d'investissement européenne optimisée</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Souscription</h3>
                <p className="text-[#374151] text-sm font-inter">Accompagnement dans la souscription et la configuration du contrat</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Suivi international</h3>
                <p className="text-[#374151] text-sm font-inter">Suivi régulier et ajustements selon l'évolution de vos besoins</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Quels sont les avantages fiscaux de l'assurance vie luxembourgeoise ?</h3>
                <p className="text-[#374151] font-inter">L'assurance vie luxembourgeoise bénéficie d'une fiscalité européenne avantageuse avec une transparence optimale et des traités fiscaux favorables pour les résidents français.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">La réglementation luxembourgeoise est-elle sûre ?</h3>
                <p className="text-[#374151] font-inter">Oui, le Luxembourg applique les plus hauts standards européens avec la directive Solvabilité II et des contrôles stricts de la CSSF pour protéger les investisseurs.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Puis-je souscrire depuis la France ?</h3>
                <p className="text-[#374151] font-inter">Oui, les contrats luxembourgeois sont accessibles aux résidents français. Notre équipe vous accompagne dans toutes les démarches administratives.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Quelle est la différence avec l'assurance vie française ?</h3>
                <p className="text-[#374151] font-inter">L'assurance vie luxembourgeoise offre une diversification européenne, une réglementation internationale et des avantages fiscaux optimisés pour les investisseurs internationaux.</p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
              Prêt à découvrir l'excellence européenne ?
            </h2>
            <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nos experts Azalee Wealth vous accompagnent pour construire une stratégie d'assurance vie luxembourgeoise adaptée à vos objectifs internationaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
                Demander une étude gratuite
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#005C69] transition-colors duration-200">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 