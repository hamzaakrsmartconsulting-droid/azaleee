"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function FiscalitePage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* Hero Section - Deux cartes */}
      <section className="relative w-full min-h-[650px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors underline">Accueil</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-[#B99066]">Fiscalité</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Carte gauche */}
            <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <h1 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold leading-tight mb-8 tracking-tight">
                Optimiser votre fiscalité en 2025 pour mieux valoriser votre patrimoine
              </h1>
              
              <div className="space-y-5 mb-10">
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  La fiscalité influence directement la rentabilité de vos investissements et la transmission de votre patrimoine. Comprendre les mécanismes de l'impôt, maîtriser les déductions et utiliser les bons dispositifs vous permet de transformer la fiscalité en levier de croissance.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  <strong className="text-[#253F60] font-semibold">Azalée Patrimoine</strong> vous accompagne pour bâtir une stratégie fiscale cohérente, durable et adaptée à votre profil.
                </p>
              </div>
              
              <div className="mt-10">
              <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-[#253F60] text-white px-10 py-4 rounded-lg shadow-lg font-inter font-semibold text-base lg:text-lg hover:bg-[#1a2d47] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Je prends ma fiscalité en main maintenant
              </button>
            </div>
          </div>
            
            {/* Carte droite */}
            <div className="relative bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              {/* Bulle de discours avec économie */}
              <div className="absolute -top-6 -right-6 w-48 h-32 sm:w-56 sm:h-36 bg-white rounded-2xl shadow-xl border-2 border-[#B99066] flex items-center justify-center z-20">
                <div className="text-center px-4">
                  <p className="text-[#253F60] font-cairo font-bold text-lg sm:text-xl">
                    Jusqu'à <span className="text-[#B99066] text-2xl sm:text-3xl">66 768€</span>
                  </p>
                  <p className="text-[#4B5563] font-inter text-sm sm:text-base">d'économie d'impôts</p>
                </div>
                {/* Flèche pointant vers le bas */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#B99066]"></div>
                </div>
            </div>

              <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold leading-tight mb-8 tracking-tight pr-32">
                <span className="block font-bold">Je choisis</span>
                <span className="block">La meilleure stratégie</span>
                <span className="block font-bold">Pour réduire mes impôts</span>
                                  </h2>
              
              {/* Liste à puces avec checkmarks */}
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                                </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">
                    Optimisations immobilières, financières et déclaratives
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                            </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">
                    Jusqu'à <strong className="text-[#253F60]">10 700 €</strong> de déficit foncier imputable/an
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                          </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">
                    Jusqu'à <strong className="text-[#253F60]">45 %</strong> de mon investissement déductible de ma base imposable atteignant presque <strong className="text-[#253F60]">67 000€</strong> de baisse d'impôt
                              </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">
                    Approche <strong className="text-[#253F60]">100 % personnalisée</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section L'essentiel */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-6 sm:pl-8">
            {/* Ligne verticale rouge à gauche - plus épaisse et visible */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 rounded-full"></div>
            
            {/* En-tête avec icône et titre */}
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              {/* Icône cible avec flèche intégrée */}
              <div className="relative flex-shrink-0">
                <svg className="w-14 h-14 sm:w-16 sm:h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  {/* Cible */}
                  <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  {/* Flèche pointant vers la droite */}
                  <path d="M18 12L15 9M18 12L15 15M18 12H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-red-600 text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold italic">
                L'essentiel
              </h2>
            </div>

            {/* Liste à puces avec cercles rouges */}
            <ul className="space-y-6 sm:space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed pt-0.5">
                  L'optimisation fiscale consiste à réduire légalement votre impôt en combinant arbitrages déclaratifs, enveloppes fiscales (<Link href="/placements/assurance-vie" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">assurance-vie</Link>, <Link href="/placements/contrat-capitalisation" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">capitalisation</Link>, <Link href="/placements/pea-per" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">PEA</Link>, <Link href="/placements/per" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">PER</Link>) et investissements (<Link href="/immobilier" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">immobilier</Link>, financiers), sans prendre de risques inutiles.
                </p>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="flex-1 pt-0.5">
                  <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed mb-4">
                    Plusieurs leviers complémentaires existent :
                  </p>
                  <ul className="space-y-3 ml-4 sm:ml-6">
                    <li className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">IR</strong> (frais réels, déductions, crédits d'impôt)
                    </li>
                    <li className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Capital</strong> (<Link href="/fiscalite/pfu" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">PFU/flat tax</Link> ou barème, abattements)
                    </li>
                    <li className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Immobilier</strong> (<Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Pinel</Link>, <Link href="/fiscalite/loi-denormandie" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Denormandie</Link>, <Link href="/fiscalite/reductions-impot-deficit-foncier" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">déficit foncier</Link>, <Link href="/immobilier/lmnp" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">LMNP/LMP</Link>, <Link href="/fiscalite/loi-girardin" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Girardin</Link>, <Link href="/fiscalite/loi-malraux" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Malraux</Link>, <Link href="/fiscalite/monument-historique" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Monuments Historiques</Link>, <Link href="/fiscalite/loi-cosse" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">Cosse</Link>)
                    </li>
                    <li className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Retraite</strong> (<Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">versements PER</Link> déductibles)
                    </li>
                    <li className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Transmission</strong> (<Link href="/patrimoine/donation-gratuite" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">donations</Link>, démembrement)
                    </li>
                  </ul>
                          </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed pt-0.5">
                  Gains potentiels (selon votre situation et la réglementation) : jusqu'à <strong className="text-[#253F60] font-semibold">66 000 €</strong> de réduction d'IR sur certains dispositifs, jusqu'à <strong className="text-[#253F60] font-semibold">10 700 €/an</strong> de <Link href="/fiscalite/reductions-impot-deficit-foncier" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline transition-colors">déficit foncier</Link> imputable, et jusqu'à <strong className="text-[#253F60] font-semibold">45 %</strong> de l'investissement déductible de la base imposable sur des montages éligibles.
                </p>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed pt-0.5">
                  Le bon choix dépend de votre profil, de votre <Link href="/fiscalite/tmi-prelevements-sociaux" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">TMI</Link>, de votre horizon, de vos objectifs (revenus complémentaires, transmission) et de votre tolérance au risque.
                </p>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed pt-0.5">
                  Cette rubrique propose une définition claire des mots-clés pour comprendre les principaux mécanismes liés à la fiscalité (<Link href="/fiscalite/tmi-prelevements-sociaux" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">TMI</Link>, <Link href="/fiscalite/pfu" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline transition-colors">PFU/flat tax</Link>, quotient familial, déduction vs réduction, micro vs réel, IFI, abattements) et favoriser votre éducation financière.
                </p>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-2.5 flex-shrink-0 w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <p className="text-[#374151] text-base sm:text-lg lg:text-xl font-inter leading-relaxed pt-0.5">
                  Se faire accompagner par <strong className="text-[#253F60] font-semibold">Azalée Patrimoine</strong> permet d'orchestrer ces leviers dans une stratégie cohérente, durable et adaptée à votre situation.
                </p>
              </li>
            </ul>

            {/* Note de conclusion */}
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-[#4B5563] text-sm font-inter italic">
                Les avantages fiscaux dépendent de votre situation et des textes en vigueur. Ces exemples sont indicatifs, sous conditions d'éligibilité et plafonds. Une étude personnalisée est nécessaire.
              </p>
                  </div>
                </div>
              </div>
      </section>

      {/* Section Comprendre l'impôt sur le revenu */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              Comprendre l'impôt sur le revenu
            </h2>
            
            {/* Ligne horizontale grise */}
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            
            <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6">
              Comment fonctionne l'impôt en France
            </h3>
            
            <div className="space-y-6">
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                En France, l'impôt sur le revenu est prélevé sur l'ensemble des revenus perçus par un foyer fiscal au cours de l'année civile. Il s'applique de façon progressive : plus vos revenus sont élevés, plus le taux d'imposition applicable à chaque "tranche" de revenus augmente. Ce système vise l'équité fiscale, tout en incitant à la structuration de votre stratégie patrimoniale.
              </p>
              
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                L'impôt sur le revenu joue un rôle déterminant dans la gestion et la valorisation de votre patrimoine. Avant même de songer à l'optimisation fiscale, il est essentiel de bien comprendre son fonctionnement pour faire les bons choix et saisir toutes les opportunités offertes par la législation.
                          </p>
                        </div>
                      </div>
                    </div>
      </section>

      {/* Section Les différentes catégories de revenus */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-10">
            <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6">
              Les différentes catégories de revenus
            </h3>
            
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-10">
              Vos revenus sont classés en plusieurs catégories, chacune répondant à des règles spécifiques.
            </p>
          </div>

          {/* Grille 2x2 des catégories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Catégorie 1: Salaires et assimilés */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <h4 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold mb-5">
                Salaires et assimilés
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">rémunérations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">pensions retraites, alimentaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">allocations chômages</span>
                </li>
              </ul>
                </div>
                
            {/* Catégorie 2: Revenus fonciers */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <h4 className="text-[#B99066] text-lg sm:text-xl font-cairo font-bold mb-5">
                Revenus fonciers
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">loyers issus de biens immobiliers</span>
                </li>
              </ul>
                </div>

            {/* Catégorie 3: Revenus de Capitaux Mobiliers */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <h4 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold mb-5">
                Revenus de Capitaux Mobiliers
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">Intérêts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">Dividendes</span>
                </li>
              </ul>
              </div>

            {/* Catégorie 4: BIC / BNC */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <h4 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold mb-5">
                BIC / BNC
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">activités indépendantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">Professions libérales</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4B5563] text-base font-inter">revenus d'entreprise individuelle.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Texte de conclusion */}
          <div className="max-w-4xl mt-8">
            <p className="text-[#4B5563] text-sm sm:text-base font-inter leading-relaxed italic">
              Chaque catégorie répond à des règles propres et offre des dispositifs d'optimisation spécifiques (déductions, abattements, régimes particuliers).
            </p>
            </div>
          </div>
        </section>

      {/* Section Barème, tranches, décote et quotient familial */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Colonne gauche - Texte */}
            <div>
              <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-8 bg-yellow-100 inline-block px-4 py-2 rounded-lg">
                Barème, tranches, décote et quotient familial
                </h3>
              
              <div className="space-y-6">
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  L'imposition repose sur un <strong className="text-[#8B5CF6] font-semibold">barème progressif</strong> comportant plusieurs tranches : à chaque "part" du foyer fiscal, un taux s'applique selon le revenu déclaré. Plus vous avez de parts (enfants, conjoint), plus votre revenu imposable par part diminue, grâce au <strong className="text-[#8B5CF6] font-semibold">quotient familial</strong>.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  La <strong className="text-[#253F60] font-semibold">décote</strong> vient réduire l'impôt des foyers faiblement imposés. À l'inverse, pour les revenus les plus élevés, des contributions additionnelles peuvent s'appliquer, renforçant l'importance de bien organiser la déclaration et le choix des dispositifs fiscaux adaptés à votre profil.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  Bien comprendre ces fondamentaux permet de saisir le potentiel d'optimisation offert par le système français, de la réduction d'impôt via l'<strong className="text-[#8B5CF6] font-semibold">investissement immobilier (<Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#A67C52] underline">Pinel</Link>, <Link href="/fiscalite/loi-girardin" className="text-[#B99066] hover:text-[#A67C52] underline">Girardin</Link>...)</strong> à l'ajustement des frais réels ou à la mise en place de <strong className="text-[#8B5CF6] font-semibold">donations stratégiques</strong>.
                </p>
              </div>
            </div>

            {/* Colonne droite - Infographie */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-blue-100">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 text-sm font-inter font-semibold uppercase">Fiscalité</span>
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="none">
                      <rect x="0" y="0" width="6.67" height="20" fill="#002654"/>
                      <rect x="6.67" y="0" width="6.67" height="20" fill="#FFFFFF"/>
                      <rect x="13.33" y="0" width="6.67" height="20" fill="#ED2939"/>
                    </svg>
                  </div>
                  <h4 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-2">
                    Impôt sur le revenu
                  </h4>
                  <div className="bg-yellow-200 px-3 py-1 rounded inline-block mb-4">
                    <p className="text-[#253F60] text-sm sm:text-base font-cairo font-bold">
                      Tranches et taux d'imposition 2025
                    </p>
                  </div>
                </div>
                
                <div className="mb-6 space-y-3 text-sm text-[#4B5563] font-inter leading-relaxed">
                  <p>
                    L'impôt sur vos revenus de 2024, déclarés en 2025, est calculé par tranches, en fonction du montant de vos revenus. Chaque tranche correspond à un taux d'imposition (de 0 à 45 %).
                  </p>
                  <p>
                    Si votre revenu annuel dépasse celui de la tranche 1 (11 497 €), il sera concerné par plusieurs tranches successives, comme expliqué dans l'exemple.
                  </p>
                </div>

                {/* Image de l'infographie */}
                <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                  <img 
                    src="/images/I6644.jpg" 
                    alt="Barème de l'impôt sur le revenu 2025 - Tranches et taux d'imposition" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

      {/* Section Déclarer efficacement ses revenus */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              Déclarer efficacement ses revenus
            </h2>
            
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Déclarer ses revenus de manière rigoureuse est une étape clé pour éviter tout redressement fiscal et optimiser le montant de son impôt.
            </p>
            
            {/* Ligne de séparation */}
            <div className="w-full h-px bg-gray-300 mb-10"></div>
            
            <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-8">
              Quand et comment déclarer ?
            </h3>
            
            {/* Deux boîtes côte à côte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Boîte gauche - Période de déclaration */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[120px]">
                <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] text-white rounded-lg px-6 py-4 text-center w-full shadow-md">
                  <p className="text-lg sm:text-xl font-cairo font-bold">
                    Période de déclaration
                  </p>
                </div>
              </div>
              
              {/* Boîte droite - Site des impôts */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[120px]">
                <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] text-white rounded-lg px-6 py-4 text-center w-full shadow-md">
                  <p className="text-lg sm:text-xl font-cairo font-bold">
                    www.impots.gouv.fr
                  </p>
                </div>
              </div>
            </div>
            
            {/* Lien externe */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-[#4B5563] text-sm font-inter mb-2">
                Lien externe vers le site des impôts :
              </p>
              <a 
                href="https://www.service-public.gouv.fr/particuliers/vosdroits/F359" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8B5CF6] hover:text-[#7C3AED] font-inter underline text-base sm:text-lg transition-colors"
              >
                Quelle est la date limite pour faire sa déclaration de revenus pour les impôts ? | Service Public
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Profiter des dispositifs fiscaux */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-10">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              Profiter des dispositifs fiscaux
            </h2>
            
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              La fiscalité française regorge de "niches" permettant de réduire son impôt tout en investissant dans des actifs porteurs.
            </p>
          </div>

          {/* Bouton CTA */}
          <div className="mb-12 text-center">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#253F60] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-base lg:text-lg hover:bg-[#1a2d47] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Faites le point sur vos déductions possibles avec un conseiller
            </button>
          </div>

          {/* Grille 2 colonnes - Pinel et Girardin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Carte Pinel */}
            <Link href="/fiscalite/loi-pinel" className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                {/* Pictogramme maison neuve avec casque */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-[#253F60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    <circle cx="12" cy="6" r="2" fill="currentColor" />
                    <path d="M10 4h4" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#8B5CF6] text-xl sm:text-2xl font-cairo font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">
                    Dispositif Pinel :
                  </h3>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Investir dans un logement neuf à louer permet d'obtenir une réduction d'impôt pouvant aller jusqu'à <strong className="text-[#253F60] font-semibold">21%</strong> du montant investi, en fonction de la durée de mise en location.
                  </p>
                </div>
              </div>
            </Link>

            {/* Carte Girardin */}
            <Link href="/fiscalite/loi-girardin" className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                {/* Pictogramme soleil avec îles (DOM-TOM) */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-[#253F60]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v4M12 19v4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M1 12h4M19 12h4M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" />
                    <circle cx="16" cy="8" r="1" fill="currentColor" />
                    <circle cx="8" cy="16" r="1" fill="currentColor" />
                    <circle cx="16" cy="16" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#8B5CF6] text-xl sm:text-2xl font-cairo font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">
                    Loi Girardin :
                  </h3>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Soutenir le développement économique dans les DOM-TOM via l'immobilier ou l'industrie locale : en échange, réduction d'impôt très attractive (principalement sur une seule année).
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Les dispositifs de défiscalisation immobilière */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold text-center mb-12">
            Les dispositifs de défiscalisation immobilière
          </h2>

          {/* Grille 3x2 des dispositifs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Loi Pinel */}
            <Link href="/fiscalite/loi-pinel" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="pinel-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="url(#pinel-gradient)" fill="none" />
                  <circle cx="12" cy="6" r="2.5" fill="url(#pinel-gradient)" />
                  <path d="M10 4h4" strokeWidth="2" stroke="url(#pinel-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Loi Pinel</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Investissement dans le neuf avec engagement locatif de 6, 9 ou 12 ans. Réduction d'impôt progressive : <strong className="text-[#253F60] font-semibold">12%</strong> pour 6 ans, <strong className="text-[#253F60] font-semibold">18%</strong> pour 9 ans, jusqu'à <strong className="text-[#253F60] font-semibold">21% pour 12 ans</strong>. Plafonds de loyers et ressources locataires à respecter.
              </p>
            </Link>

            {/* Loi Girardin */}
            <Link href="/fiscalite/loi-girardin" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="girardin-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="5" fill="url(#girardin-gradient)" />
                  <path d="M12 1v4M12 19v4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M1 12h4M19 12h4M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="url(#girardin-gradient)" strokeWidth="2" fill="none" />
                  <circle cx="8" cy="8" r="1" fill="url(#girardin-gradient)" />
                  <circle cx="16" cy="8" r="1" fill="url(#girardin-gradient)" />
                  <circle cx="8" cy="16" r="1" fill="url(#girardin-gradient)" />
                  <circle cx="16" cy="16" r="1" fill="url(#girardin-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Loi Girardin</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Soutien aux investissements dans les DOM-TOM via l'immobilier ou l'industrie locale : en échange, <strong className="text-[#253F60] font-semibold">réduction d'impôt immédiate</strong> l'année suivante. Dispositifs industriels ou logement social offrant des taux attractifs mais nécessitant une analyse rigoureuse des risques.
              </p>
            </Link>

            {/* Loi Denormandie */}
            <Link href="/fiscalite/loi-denormandie" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="denormandie-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="url(#denormandie-gradient)" fill="none" />
                  <path d="M9 21V9l6-6" strokeWidth="2" stroke="url(#denormandie-gradient)" />
                  <path d="M12 3l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="url(#denormandie-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Loi Denormandie</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Encourager la rénovation dans certains centres-villes : l'achat et la rénovation d'un bien ancien à louer ouvre droit à une réduction d'impôt proche du Pinel. Travaux représentant au moins <strong className="text-[#253F60] font-semibold">25%</strong> du prix d'acquisition, favorisant la revitalisation des centres urbains.
              </p>
            </Link>

            {/* Loi Malraux */}
            <Link href="/fiscalite/loi-malraux" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="malraux-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#malraux-gradient)" fill="none" />
                  <path d="M12 2v4M12 18v4M6 12h12" strokeWidth="1.5" stroke="url(#malraux-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Loi Malraux</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Réservé à la restauration complète d'immeubles en secteur sauvegardé : <strong className="text-[#253F60] font-semibold">22 à 30%</strong> de réduction d'impôt sur le montant des travaux engagés, plafond annuel élevé. Investissement patrimonial et fiscal combinant plaisir et optimisation.
              </p>
            </Link>

            {/* Loi Cosse */}
            <Link href="/fiscalite/loi-cosse" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="cosse-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="url(#cosse-gradient)" fill="none" />
                  <path d="M8 12h8M12 8v8" strokeWidth="2" stroke="url(#cosse-gradient)" />
                  <circle cx="12" cy="12" r="1" fill="url(#cosse-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Loi Cosse</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Conventionnement "Louer abordable" permettant une <strong className="text-[#253F60] font-semibold">déduction majorée</strong> des revenus fonciers : <strong className="text-[#253F60] font-semibold">15% à 85%</strong> selon l'engagement pris et la zone géographique, en contrepartie d'un engagement social.
              </p>
            </Link>

            {/* Monuments Historiques */}
            <Link href="/fiscalite/monument-historique" className="group bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#B99066] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="monument-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#253F60" />
                      <stop offset="100%" stopColor="#B99066" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke="url(#monument-gradient)" fill="none" />
                  <path d="M12 2v4M12 18v4" strokeWidth="2" stroke="url(#monument-gradient)" />
                  <circle cx="12" cy="12" r="2" fill="url(#monument-gradient)" />
                </svg>
              </div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3 text-center">Monuments Historiques</h4>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                Les propriétaires d'immeubles classés peuvent déduire la quasi-totalité des travaux de restauration de leur revenu global, sans plafond, en échange de fortes contraintes de conservation. Investissement patrimonial d'exception pour contribuables fortement imposés.
              </p>
            </Link>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#253F60] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-base hover:bg-[#1a2d47] hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Télécharger le guide 2025 des lois de défiscalisation
            </button>
            <Link 
              href="/immobilier"
              className="bg-white text-[#253F60] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-base border-2 border-[#253F60] hover:bg-gray-50 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              Découvrir nos solutions d'investissement immobilier
            </Link>
          </div>
        </div>
      </section>

      {/* Section Les erreurs fréquentes à éviter */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8">
              Les erreurs fréquentes à éviter
            </h2>

            {/* Liste à puces */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-2 flex-shrink-0 w-2 h-2 bg-black rounded-full"></div>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  Oublier de mentionner certains revenus : revenus fonciers, plus-values, dividendes...
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 flex-shrink-0 w-2 h-2 bg-black rounded-full"></div>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  Se tromper dans le nombre de parts fiscales (quotient familial)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 flex-shrink-0 w-2 h-2 bg-black rounded-full"></div>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  Ignorer la possibilité d'opter pour les frais réels au lieu de l'abattement forfaitaire pour frais professionnels
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 flex-shrink-0 w-2 h-2 bg-black rounded-full"></div>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  Ne pas saisir tous les crédits ou déductions auxquels on a droit (emploi à domicile, dons, investissements...)
                </p>
              </li>
            </ul>

            {/* Section Astuce */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                <strong className="font-semibold text-[#253F60]">Astuce :</strong>{" "}
                <span className="italic">Relisez toujours votre déclaration et recoupez vos justificatifs ; conservez toutes vos pièces en cas de contrôle.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Optimiser sa fiscalité selon son profil */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              Optimiser sa fiscalité selon son profil
            </h2>
            
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-12">
              Adopter les bons réflexes et dispositifs en fonction de votre situation permet de transformer l'impôt en véritable levier patrimonial.
            </p>

            <div className="space-y-10">
              {/* Profil 1: Investisseur immobilier */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200">
                <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                  Investisseur immobilier
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Priorisez les dispositifs adaptés à vos objectifs : <Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Pinel</Link> et <Link href="/fiscalite/loi-denormandie" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Denormandie</Link> si vous ciblez la réduction d'impôt ; <Link href="/fiscalite/loi-malraux" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Malraux</Link> ou <Link href="/fiscalite/monument-historique" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Monuments Historiques</Link> pour les amateurs de rénovation de prestige.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Optimisez vos revenus fonciers : analysez l'intérêt du régime réel pour déduire au maximum vos charges.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Profil 2: Retraité avec revenus passifs */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200">
                <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                  Retraité avec revenus passifs
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Choisissez le bon mode d'imposition de vos rentes, revenus locatifs et placements : arbitrage entre <Link href="/fiscalite/pfu" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">flat tax</Link> et barème progressif, adaptation de votre portefeuille pour réduire la fiscalité sur les dividendes.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Pensez à la transmission : donations graduelles, souscription de contrats d'<Link href="/placements/assurance-vie" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">assurance-vie</Link> optimisés pour la succession.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Profil 3: Profession libérale / chef d'entreprise */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200">
                <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                  Profession libérale / chef d'entreprise
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Profitez des dispositifs de retraite complémentaire (<Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">PER</Link>, <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Madelin</Link>) pour déduire des versements tout en capitalisant pour l'avenir.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Valorisez la cession progressive de votre entreprise pour bénéficier d'abattements spécifiques, ou réorganisez la détention de vos actifs via des sociétés civiles.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Profil 4: Héritier d'un patrimoine */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-200">
                <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                  Héritier d'un patrimoine
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Anticipez les droits de succession</strong> : donations échelonnées, démembrement de propriété, utilisation des abattements familiaux, investissement dans des actifs défiscalisés.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Optimisez la gestion des biens transmis</strong> : Favorisez les outils juridiques permettant d'adapter la détention du patrimoine à votre situation personnelle et fiscale.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paragraphe de conclusion */}
            <div className="mt-12 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-xl shadow-lg p-6 sm:p-8 text-white">
              <p className="text-base sm:text-lg font-inter leading-relaxed text-center">
                Chaque profil a ses leviers d'optimisation : s'informer, se faire accompagner et ajuster régulièrement sa stratégie restent la clé pour valoriser durablement son patrimoine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conseils de l'expert Azalée Patrimoine */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8">
              Conseils de l'expert Azalée Patrimoine
            </h2>

            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-semibold mb-6">
              Pourquoi travailler avec un Conseiller en Gestion de Patrimoine (CGP) ?
            </h3>

            <div className="space-y-4 mb-10">
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Faire appel à un CGP permet de transformer la complexité fiscale et patrimoniale en véritables leviers pour atteindre vos objectifs de vie.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Un CGP ne se limite pas à vous vendre des solutions : il vous accompagne dans la durée, en toute indépendance, avec une vue globale sur votre situation et en tenant compte de l'évolution permanente des dispositifs fiscaux.
              </p>
            </div>

            {/* Grille Avantages / Inconvénients */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Avantages */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Les avantages d'un accompagnement par un CGP :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Diagnostic précis de votre situation fiscale et patrimoniale ;
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Accès à des stratégies sur-mesure, souvent inaccessibles au grand public ;
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Veille réglementaire et anticipation des évolutions fiscales ;
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Vision transversale : immobilier, placements, retraite, succession, transmission.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Inconvénients */}
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Inconvénients à considérer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-red-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Trouver le bon profil : privilégier un professionnel pluridisciplinaire et équilibré (pas "mono-produit"), transparent sur son univers d'investissement.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-red-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Coût de l'accompagnement : honoraires de conseil et/ou intégration de la rémunération dans les rétro-commissions si un investissement est mis en place ; demander une lettre de mission claire.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-red-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Transparence & conflits d'intérêts : exiger le détail des frais (entrée, gestion, arbitrages) et un rapport d'adéquation justifiant chaque recommandation.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 bg-red-600 rounded-full"></div>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Suivi dans le temps : sans revue annuelle et reporting, la stratégie peut devenir obsolète (évolutions de vie, fiscalité, marchés).
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Astuce */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-10">
              <h3 className="text-[#253F60] text-lg font-cairo font-bold mb-3">Astuce :</h3>
              <ul className="space-y-2 text-[#4B5563] text-sm font-inter">
                <li>• Comparez au moins 2 CGP</li>
                <li>• Vérifiez statuts et agréments (CIF, IAS...)</li>
                <li>• L'assurance RCP</li>
                <li>• Demandez des références.</li>
              </ul>
            </div>

            {/* Audit fiscal personnalisé */}
            <div className="mb-10">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-semibold mb-4">
                Audit fiscal personnalisé
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Un audit fiscal est la première étape pour optimiser votre impôt et structurer votre patrimoine de façon cohérente.
              </p>
            </div>

            {/* Le CGP réalise un diagnostic complet */}
            <div className="mb-10">
              <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Le CGP réalise un diagnostic complet :
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Une analyse approfondie de vos revenus, investissements, dettes et charges ;
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    L'identification des dispositifs fiscaux réellement adaptés à votre profil (optimisation <Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Pinel</Link>, <Link href="/fiscalite/loi-girardin" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Girardin</Link>, <Link href="/fiscalite/loi-denormandie" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">Denormandie</Link>, <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#A67C52] font-semibold underline">PER</Link>, etc.) ;
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Un calcul précis des économies potentielles ou des risques de surimposition ;
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Un rapport de synthèse clair, accompagné de préconisations concrètes et chiffrées.
                  </p>
                </li>
              </ul>
            </div>

            {/* Accompagnement sur mesure */}
            <div className="mb-10">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-semibold mb-4">
                Accompagnement sur mesure
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
                Votre situation patrimoniale évolue : revenus, famille, projets, fiscalité... Un accompagnement sur mesure avec Azalée Patrimoine vous offre :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Des solutions choisies et ajustées chaque année en fonction des évolutions législatives et de vos priorités.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Un interlocuteur unique pour piloter vos déclarations, investissements, donations, successions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Le suivi opérationnel : la mise en place de solutions, l'aide à la collecte des pièces, la prise en charge administrative.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full"></div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Une réactivité pour saisir les opportunités (nouveaux dispositifs, arbitrages...) ou anticiper les contraintes (réformes, transmission, expatriation).
                  </p>
                </li>
              </ul>
            </div>

            {/* Paragraphe de conclusion */}
            <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-xl shadow-lg p-6 sm:p-8 text-white">
              <p className="text-base sm:text-lg font-inter leading-relaxed">
                En résumé, s'entourer d'un CGP Azalée Patrimoine, c'est s'assurer la tranquillité et l'efficacité d'une gestion patrimoniale et fiscale sur-mesure, tournée vers la valorisation durable de votre patrimoine et la réalisation de vos objectifs personnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section L'expertise Azalée Patrimoine à votre service */}
      <section className="w-full bg-[#253F60] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#B99066] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              L'expertise Azalée Patrimoine à votre service
            </h2>
            <p className="text-white text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
              Faire appel à un Conseiller en Gestion de Patrimoine (CGP) indépendant représente un investissement stratégique pour optimiser durablement votre situation fiscale et patrimoniale. Notre approche holistique dépasse la simple recherche de réduction d'impôt pour construire une véritable stratégie patrimoniale cohérente.
            </p>
          </div>

          {/* Diagramme circulaire segmenté (Donut Chart) */}
          <div className="relative mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative w-full aspect-square max-w-[600px] mx-auto mb-12">
                {/* Donut Chart SVG avec 4 segments */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <marker id="arrowhead-gold" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
                      <polygon points="0 0, 12 4, 0 8" fill="#B99066" />
                    </marker>
                  </defs>
                  
                  {/* Segment 1: Diagnostic (Top Left - 0° à 90°) */}
                  <path
                    d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z"
                    fill="#B99066"
                    opacity="0.9"
                    className="hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Segment 2: Stratégie (Top Right - 90° à 180°) */}
                  <path
                    d="M 100 100 L 180 100 A 80 80 0 0 1 100 180 Z"
                    fill="#D4A574"
                    opacity="0.9"
                    className="hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Segment 3: Mise en œuvre (Bottom Right - 180° à 270°) */}
                  <path
                    d="M 100 100 L 100 180 A 80 80 0 0 1 20 100 Z"
                    fill="#B99066"
                    opacity="0.9"
                    className="hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Segment 4: Suivi (Bottom Left - 270° à 360°) */}
                  <path
                    d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z"
                    fill="#D4A574"
                    opacity="0.9"
                    className="hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Cercle intérieur (donut) avec bordure dorée */}
                  <circle cx="100" cy="100" r="50" fill="#253F60" stroke="#B99066" strokeWidth="2" />
                  
                  {/* Lignes de séparation entre segments */}
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#253F60" strokeWidth="2" />
                  <line x1="100" y1="100" x2="180" y2="100" stroke="#253F60" strokeWidth="2" />
                  <line x1="100" y1="100" x2="100" y2="180" stroke="#253F60" strokeWidth="2" />
                  <line x1="100" y1="100" x2="20" y2="100" stroke="#253F60" strokeWidth="2" />
                  
                  {/* Racines : Lignes connectant le logo aux 4 icônes */}
                  {/* Ligne vers Diagnostic (Top Left) - part du bord du cercle vers l'icône */}
                  <line 
                    x1="64.6" 
                    y1="64.6" 
                    x2="50" 
                    y2="50" 
                    stroke="#B99066" 
                    strokeWidth="2.5" 
                    opacity="0.8"
                  />
                  
                  {/* Ligne vers Stratégie (Top Right) */}
                  <line 
                    x1="135.4" 
                    y1="64.6" 
                    x2="150" 
                    y2="50" 
                    stroke="#B99066" 
                    strokeWidth="2.5" 
                    opacity="0.8"
                  />
                  
                  {/* Ligne vers Mise en œuvre (Bottom Right) */}
                  <line 
                    x1="135.4" 
                    y1="135.4" 
                    x2="150" 
                    y2="150" 
                    stroke="#B99066" 
                    strokeWidth="2.5" 
                    opacity="0.8"
                  />
                  
                  {/* Ligne vers Suivi (Bottom Left) */}
                  <line 
                    x1="64.6" 
                    y1="135.4" 
                    x2="50" 
                    y2="150" 
                    stroke="#B99066" 
                    strokeWidth="2.5" 
                    opacity="0.8"
                  />
                  
                </svg>

                {/* Badge 1: Diagnostic (Top Left segment - positionné à l'intérieur du segment) */}
                <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#B99066]">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Texte Diagnostic - Top Left (autour du cercle, éloigné) */}
                <div className="absolute -top-8 -left-4 sm:-top-12 sm:-left-8 lg:-left-16 max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]">
                  <h3 className="text-[#B99066] text-lg sm:text-xl lg:text-2xl font-cairo font-bold mb-3">Diagnostic complet</h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-inter leading-relaxed">
                    Analyse approfondie de votre situation fiscale, patrimoniale, professionnelle et familiale pour identifier tous les leviers d'optimisation disponibles.
                  </p>
                </div>

                {/* Badge 2: Stratégie (Top Right segment - positionné à l'intérieur du segment) */}
                <div className="absolute top-[25%] right-[25%] transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#B99066]">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Texte Stratégie - Top Right (autour du cercle, éloigné) */}
                <div className="absolute -top-8 -right-4 sm:-top-12 sm:-right-8 lg:-right-16 max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] text-right">
                  <h3 className="text-[#B99066] text-lg sm:text-xl lg:text-2xl font-cairo font-bold mb-3">Stratégie personnalisée</h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-inter leading-relaxed">
                    Élaboration d'un plan d'action sur-mesure intégrant vos objectifs, contraintes et aversion au risque, avec priorisation des actions selon leur impact.
                  </p>
                </div>

                {/* Badge 3: Mise en œuvre (Bottom Right segment - positionné à l'intérieur du segment) */}
                <div className="absolute bottom-[25%] right-[25%] transform translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#B99066]">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
                
                {/* Texte Mise en œuvre - Bottom Right (autour du cercle, éloigné) */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 lg:-right-16 max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] text-right">
                  <h3 className="text-[#B99066] text-lg sm:text-xl lg:text-2xl font-cairo font-bold mb-3">Mise en œuvre</h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-inter leading-relaxed">
                    Accompagnement opérationnel pour la concrétisation des recommandations : sélection des investissements, formalités administratives, suivi des échéances.
                  </p>
                </div>

                {/* Badge 4: Suivi (Bottom Left segment - positionné à l'intérieur du segment) */}
                <div className="absolute bottom-[25%] left-[25%] transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#B99066]">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Texte Suivi - Bottom Left (autour du cercle, éloigné) */}
                <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 lg:-left-16 max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]">
                  <h3 className="text-[#B99066] text-lg sm:text-xl lg:text-2xl font-cairo font-bold mb-3">Suivi et ajustement</h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-inter leading-relaxed">
                    Veille réglementaire continue, adaptation de la stratégie aux évolutions législatives, optimisation permanente selon l'évolution de votre situation.
                  </p>
                </div>

                {/* Logo central dans le donut */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <img 
                    src="/images/azalee-patrimoine.png" 
                    alt="Azalée Patrimoine" 
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Grille 2 colonnes - Audit fiscal et Accompagnement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audit fiscal personnalisé */}
            <div className="bg-[#1e3a5a] rounded-xl p-6 sm:p-8 border-2 border-[#B99066]/30">
              <h3 className="text-[#B99066] text-xl sm:text-2xl font-cairo font-bold mb-6">
                Audit fiscal personnalisé
              </h3>
              <div className="space-y-4 text-white text-sm sm:text-base font-inter leading-relaxed">
                <p>
                  Notre audit fiscal approfondi examine l'ensemble de vos revenus, placements et charges pour identifier les optimisations possibles. Cette analyse produit un rapport chiffré détaillant les économies potentielles et les risques associés à chaque préconisation.
                </p>
                <p>
                  Nous analysons votre déclaration fiscale sur les 3 dernières années, identifions les erreurs ou omissions, et proposons des rectificatives si nécessaire. L'audit intègre également une projection sur 5 à 10 ans pour anticiper l'évolution de votre situation.
                </p>
              </div>
            </div>

            {/* Accompagnement sur-mesure */}
            <div className="bg-[#1e3a5a] rounded-xl p-6 sm:p-8 border-2 border-[#B99066]/30">
              <h3 className="text-[#B99066] text-xl sm:text-2xl font-cairo font-bold mb-6">
                Accompagnement sur-mesure
              </h3>
              <div className="space-y-4 text-white text-sm sm:text-base font-inter leading-relaxed">
                <p>
                  Au-delà du conseil, nous assurons le pilotage opérationnel de vos déclarations et investissements. Notre équipe vous accompagne dans tous les arbitrages patrimoniaux, la gestion des échéances fiscales et le suivi de la performance de vos placements.
                </p>
                <p>
                  Notre réactivité face aux évolutions législatives et aux opportunités de marché vous garantit une optimisation continue de votre stratégie patrimoniale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière Bilan fiscal offert */}
      <section className="w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-8">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-cairo font-semibold">
              Bilan fiscal offert pour toute souscription d'un placement de 25 000€ avec Azalée Patrimoine
            </p>
          </div>
        </div>
      </section>

      {/* Section FAQ Fiscalité */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12">
              FAQ Fiscalité
            </h2>

            <div className="space-y-4">
              {/* Question 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(0)}
                  className="w-full text-left p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold pr-4">
                    Quelle est la meilleure loi de défiscalisation en 2025 ?
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#B99066] flex-shrink-0 transition-transform ${openQuestion === 0 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 0 && (
                  <div className="p-4 sm:p-6 pt-0 bg-white">
                    <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                      Selon votre profil : <Link href="/fiscalite/loi-pinel" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline">Pinel/Denormandie</Link> (neuf/ancien), <Link href="/fiscalite/loi-girardin" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline">Girardin</Link> (réduction ponctuelle), <Link href="/fiscalite/loi-malraux" className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold underline">Malraux/MH</Link> (rénovation patrimoniale).
                    </p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(1)}
                  className="w-full text-left p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold pr-4">
                    Comment réduire son impôt sans risque ?
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#B99066] flex-shrink-0 transition-transform ${openQuestion === 1 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 1 && (
                  <div className="p-4 sm:p-6 pt-0 bg-white">
                    <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                      En combinant dispositifs légaux, <span className="text-[#8B5CF6] font-semibold">diversification</span> des placements et accompagnement par un conseiller agréé.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(2)}
                  className="w-full text-left p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold pr-4">
                    Pourquoi confier sa fiscalité à un CGP ?
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#B99066] flex-shrink-0 transition-transform ${openQuestion === 2 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 2 && (
                  <div className="p-4 sm:p-6 pt-0 bg-white">
                    <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                      Pour bénéficier d'une <span className="text-[#8B5CF6] font-semibold">approche globale</span> (fiscalité, placements, retraite, transmission) intégrée dans une stratégie cohérente et évolutive.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section En savoir plus sur Azalée Patrimoine */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12">
              En savoir plus sur Azalée Patrimoine
            </h2>

            <div className="space-y-4">
              <Link 
                href="/patrimoine" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Qui sommes-nous ?
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/patrimoine" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Gestion de patrimoine
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/placements" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Placement financier
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/immobilier" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Investissement immobilier
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/retraite" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Retraite
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/retraite/simulation" 
                className="block bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#B99066] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#253F60] text-base sm:text-lg font-inter font-medium group-hover:text-[#B99066] transition-colors">
                    Simulateurs
                  </span>
                  <svg className="w-5 h-5 text-[#B99066] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 
