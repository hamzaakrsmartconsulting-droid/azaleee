"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";

const LOCAL_STORAGE_KEY = 'lmnpPageContent';

const defaultContent = {
  heroTitle: "Investir avec le statut LMNP (location meublée non professionnelle) avec Azalee Wealth",
  heroSubtitle: "L'investissement locatif est une stratégie d'épargne efficace. Ce système de défiscalisation immobilière permet de se constituer un patrimoine tout en percevant, mensuellement, un complément de salaire. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre investissement LMNP.",
  heroButton: "Simuler votre projet LMNP",
  rightCardTitle: "Nos experts à votre service",
  rightCardBenefits: [
    "Ne payez pas d'impôt sur vos revenus locatifs",
    "Meilleure rentabilité qu'avec une location nue",
    "Récupération de la TVA",
    "Accompagnement complet de votre projet"
  ],
  floatingCardText: "0 € →\nAnalyse personnalisée gratuite"
};

export default function LMNPPage() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent({ ...defaultContent, ...parsed });
    }

    // Listen for custom content update events
    const handleContentUpdate = () => {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent({ ...defaultContent, ...parsed });
      }
    };

    window.addEventListener('contentUpdated', handleContentUpdate);
    return () => window.removeEventListener('contentUpdated', handleContentUpdate);
  }, []);

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
                {content.heroTitle}
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                {content.heroSubtitle}
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  {content.heroButton}
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
                  {content.rightCardTitle}
                </h2>
              </div>
              
              {/* Floating Price Card */}
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">{content.floatingCardText.split('\n')[0]}<br /></span>
                  <span className="sm:hidden">0€</span>
                  <span className="hidden sm:block">{content.floatingCardText.split('\n')[1]}</span>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  {content.rightCardBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
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
              <a href="/immobilier" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Immobilier
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                LMNP
              </span>
            </nav>
          </div>

          {/* Sommaire */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              Sommaire
            </h2>
            <ol className="space-y-2 text-[#374151] font-inter">
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">1.</span>
                <span>Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">2.</span>
                <span>Quels sont les avantages du statut LMNP ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">3.</span>
                <span>Quelles sont les conditions du statut LMNP ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">4.</span>
                <span>Comment déclarer ses revenus en LMNP ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">5.</span>
                <span>Comment obtenir le statut LMNP ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">6.</span>
                <span>Quels sont les inconvénients de la location meublée non professionnelle ?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59E2E4] font-semibold">7.</span>
                <span>Questions et réponses sur la LMNP</span>
              </li>
            </ol>
          </div>

          {/* Qu'est-ce que le statut LMNP */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              1. Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?
            </h2>
            <div className="space-y-6 text-[#374151] font-inter">
              <p>
                Le statut de loueur meublé non professionnel (LMNP) est un statut attribué aux <strong>bailleurs non-professionnels</strong> qui louent des biens meublés. Cette activité ne constitue pas l'activité principale du bailleur. Il s'agit davantage d'un <strong>complément de revenus</strong>.
              </p>
              <p>
                Le statut LMNP est ouvert à tout contribuable français qui souhaite préparer sa retraite en investissant dans un bien meublé. Depuis 1949, le statut LMNP offre une optimisation fiscale intéressante à tout investisseur.
              </p>
              <p>
                Pour être considéré comme non professionnel, le propriétaire doit remplir certaines conditions :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les recettes annuelles tirées de la location ne doivent pas dépasser <strong>23 000 €</strong> pour l'ensemble du foyer fiscal.</li>
                <li>Ces recettes doivent également être <strong>inférieures au montant total des autres revenus d'activité du foyer fiscal</strong> (salaires, autres BIC, etc.).</li>
              </ul>
              <p>
                Les revenus générés par la location meublée sont alors imposés en tant que <strong>bénéfices industriels et commerciaux</strong> (BIC) ou dans le cadre du <strong>régime réel</strong>. Ce statut peut offrir des avantages fiscaux, notamment en termes d'amortissement et d'imposition des plus-values lors de la revente du bien.
              </p>
            </div>
          </div>

          {/* Image Section - New Position */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-4">
                    Investissement LMNP en pratique
                  </h3>
                  <p className="text-[#374151] font-inter mb-4">
                    Découvrez comment l'investissement LMNP peut transformer votre approche de l'immobilier locatif. Nos experts vous accompagnent dans la sélection de biens optimisés pour la location meublée.
                  </p>
                  <ul className="text-[#374151] font-inter space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#59E2E4] mt-1">•</span>
                      <span>Biens sélectionnés pour la rentabilité LMNP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#59E2E4] mt-1">•</span>
                      <span>Accompagnement personnalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#59E2E4] mt-1">•</span>
                      <span>Optimisation fiscale garantie</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/images/imm1.jpg"
                    alt="Investissement immobilier LMNP - Exemple de bien locatif"
                    className="w-full h-auto rounded-lg object-cover shadow-lg"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Qu'est-ce que la location meublée */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-4">
              Qu'est-ce que la location meublée ?
            </h3>
            <div className="space-y-4 text-[#374151] font-inter">
              <p>
                La location meublée est un type de location où un logement est proposé avec les <strong>meubles et équipements nécessaires</strong> pour y vivre immédiatement. Les éléments indispensables incluent notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Une literie,</li>
                <li>Une table et des chaises,</li>
                <li>Des rangements,</li>
                <li>Des rideaux ou volets,</li>
                <li>Du matériel de cuisine (plaques de cuisson, réfrigérateur, ustensiles).</li>
              </ul>
              <p>
                Le bail pour une location meublée est généralement <strong>d'un an renouvelable</strong>, mais peut être réduit à neuf mois pour les étudiants. Quant au dépôt de garantie demandé, il est de <strong>deux mois de loyer hors charges</strong>, contre un mois pour une location vide.
              </p>
            </div>
          </div>

          {/* Changements 2025 */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 border-l-4 border-[#B99066]">
            <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-4">
              Quels sont les changements du statut LMNP en 2025
            </h3>
            <div className="space-y-4 text-[#374151] font-inter">
              <p>
                L'adoption de la <strong>loi de finances 2025</strong> par l'article 49.3 a renforcé les dispositions de la <strong>loi Le Meur</strong> relatives aux meublés de tourisme, impactant ainsi le statut LMNP. Désormais, <strong>l'amortissement</strong>, jusqu'à présent exclu du <strong>calcul de la plus-value lors de la revente</strong>, sera réintégré.
              </p>
              <p>
                Concrètement, si vous décidez de vendre votre bien, la somme totale des amortissements pratiqués pendant toute la durée de détention viendra diminuer votre prix d'achat initial. Résultat : la base taxable sur la plus-value augmente et, avec elle, l'impôt dû.
              </p>
            </div>
          </div>

          {/* Avantages du statut LMNP */}
          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              2. Quels sont les avantages du statut LMNP ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Optimisation fiscale</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Amortissement du bien immobilier</li>
                  <li>• Déduction des charges et intérêts</li>
                  <li>• Réduction de l'impôt sur le revenu</li>
                  <li>• Possibilité de déficit foncier</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Rentabilité améliorée</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Loyers plus élevés qu'en location nue</li>
                  <li>• Récupération de la TVA</li>
                  <li>• Complément de revenus mensuel</li>
                  <li>• Constitution d'un patrimoine</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Flexibilité</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Baux courts renouvelables</li>
                  <li>• Adaptation aux besoins locatifs</li>
                  <li>• Gestion simplifiée</li>
                  <li>• Possibilité de résidence personnelle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conditions du statut LMNP */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              3. Quelles sont les conditions du statut LMNP ?
            </h2>
            <div className="space-y-6 text-[#374151] font-inter">
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">Conditions de revenus</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Recettes annuelles de location ≤ 23 000 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Revenus locatifs &lt; autres revenus du foyer fiscal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">Conditions du bien</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Logement meublé avec équipements de base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Bail d'un an renouvelable (9 mois pour étudiants)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Dépôt de garantie : 2 mois de loyer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Déclaration des revenus */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              4. Comment déclarer ses revenus en LMNP ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Régime Micro-BIC</h3>
                <ul className="space-y-3 text-[#374151] font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Recettes ≤ 72 600 € par an</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Abattement forfaitaire de 50%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Pas de comptabilité obligatoire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#59E2E4] mt-1">•</span>
                    <span>Déclaration simplifiée</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Régime Réel</h3>
                <ul className="space-y-3 text-[#374151] font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Recettes &gt; 72 600 € par an</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Comptabilité obligatoire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Déduction des charges réelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B99066] mt-1">•</span>
                    <span>Amortissement du bien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
 
          {/* LMNP vs LMP: quelles différences ? */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              LMNP vs LMP : quelles différences ?
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#F2F2F2]">
                  <tr>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Critère</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">LMNP</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">LMP</th>
                  </tr>
                </thead>
                <tbody className="text-[#374151] font-inter">
                  <tr className="border-t">
                    <td className="px-4 py-3">Seuil de recettes</td>
                    <td className="px-4 py-3">≤ 23 000 € et &lt; autres revenus du foyer</td>
                    <td className="px-4 py-3">&gt; 23 000 € ou &gt; autres revenus du foyer</td>
                  </tr>
                  <tr className="border-t bg-[#FAFAFA]">
                    <td className="px-4 py-3">Statut</td>
                    <td className="px-4 py-3">Non professionnel</td>
                    <td className="px-4 py-3">Professionnel</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Régime fiscal</td>
                    <td className="px-4 py-3">BIC (micro-BIC ou réel)</td>
                    <td className="px-4 py-3">BIC réel (cotisations sociales possibles)</td>
                  </tr>
                  <tr className="border-t bg-[#FAFAFA]">
                    <td className="px-4 py-3">Amortissements</td>
                    <td className="px-4 py-3">Oui (impact plus-value en 2025)</td>
                    <td className="px-4 py-3">Oui</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Plus-value à la revente</td>
                    <td className="px-4 py-3">Régime des particuliers (avec réintégration des amortissements)</td>
                    <td className="px-4 py-3">Régime professionnel (selon situation)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[#686868] text-sm">
              Sources d'inspiration et synthèse basées sur des informations publiques du marché dont le dossier LMNP/LMP de Selexium.
            </p>
          </div>
 
          {/* Résidences éligibles au LMNP */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              Résidences éligibles au statut LMNP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold mb-2">Étudiantes</h3>
                <p className="text-[#374151] text-sm font-inter">Proches des campus, adaptées aux besoins étudiants.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold mb-2">Senior</h3>
                <p className="text-[#374151] text-sm font-inter">Résidences services pour personnes âgées autonomes.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold mb-2">EHPAD</h3>
                <p className="text-[#374151] text-sm font-inter">Établissements d'hébergement pour dépendance.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold mb-2">Affaires</h3>
                <p className="text-[#374151] text-sm font-inter">Hébergement dédié aux déplacements professionnels.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold mb-2">Tourisme</h3>
                <p className="text-[#374151] text-sm font-inter">Résidences de vacances avec services.</p>
              </div>
            </div>
          </div>
 
          {/* Comment obtenir le statut LMNP */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              5. Comment obtenir le statut LMNP ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Acquisition</h3>
                <p className="text-[#374151] text-sm font-inter">Achat d'un bien immobilier neuf ou ancien</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Aménagement</h3>
                <p className="text-[#374151] text-sm font-inter">Équipement du logement en meublé</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Location</h3>
                <p className="text-[#374151] text-sm font-inter">Mise en location avec bail meublé</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">Déclaration</h3>
                <p className="text-[#374151] text-sm font-inter">Déclaration des revenus en BIC</p>
              </div>
            </div>
          </div>

          {/* Inconvénients */}
          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              6. Quels sont les inconvénients de la location meublée non professionnelle ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Gestion locative</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Rotation plus fréquente des locataires</li>
                  <li>• Entretien des meubles et équipements</li>
                  <li>• Gestion administrative plus complexe</li>
                  <li>• Risque de vacance locative</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Contraintes fiscales</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Limitation des recettes à 23 000 €</li>
                  <li>• Obligation de respecter les conditions</li>
                  <li>• Risque de requalification en LMP</li>
                  <li>• Contrôles fiscaux possibles</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Investissement initial</h3>
                <ul className="text-[#374151] text-sm font-inter space-y-2">
                  <li>• Coût d'équipement du logement</li>
                  <li>• Amortissement sur plusieurs années</li>
                  <li>• Besoin de trésorerie initiale</li>
                  <li>• Délai de rentabilisation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              7. Questions et réponses sur la LMNP
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Quelles sont les différences entre la LMP et la LMNP ?</h3>
                <p className="text-[#374151] font-inter">Le statut de loueur en meublé professionnel implique de toucher des revenus locatifs suffisamment importants pour que le propriétaire-bailleur ait à les déclarer en tant que BIC (bénéfices industriels et commerciaux) à l'administration fiscale. Ceux-ci doivent être supérieurs à 23 000 € ou être plus importants que les revenus globaux du foyer fiscal soumis à l'impôt sur le revenu.</p>
              </div>
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Peut-on investir en LMNP dans l'ancien ?</h3>
                <p className="text-[#374151] font-inter">Il est tout à fait possible d'investir en LMNP dans l'ancien. Aussi connu sous le nom de LMNP d'occasion, le statut de loueur en meublé professionnel dans l'ancien est accessible à tout acquéreur investissant dans un bien en revente sur le marché secondaire, déjà équipé et parfois même occupé.</p>
              </div>
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Quelles résidences sont éligibles au statut LMNP ?</h3>
                <p className="text-[#374151] font-inter">Toutes les résidences donnent accès au statut LMNP : résidences étudiantes, senior, EHPAD, d'affaires et de tourisme. Chaque type de résidence répond à des besoins spécifiques et offre des avantages particuliers.</p>
              </div>
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Comment revendre son bien LMNP ?</h3>
                <p className="text-[#374151] font-inter">La revente de son bien immobilier acquis pour un investissement en LMNP se fait comme une revente classique d'un bien immobilier. La plus-value est imposée à hauteur de 19% en plus des 17,2% de prélèvements sociaux, mais elle est dégressive selon la durée de détention.</p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
              Prêt à investir en LMNP ?
            </h2>
            <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nos experts Azalee Wealth vous accompagnent pour construire votre stratégie d'investissement LMNP et optimiser votre défiscalisation immobilière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
                Simuler mon projet LMNP
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