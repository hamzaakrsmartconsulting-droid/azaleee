"use client";
import React from "react";
import Header from "../../../../components/common/Header";
import Footer from "../../../../components/common/Footer";
import Link from "next/link";

export default function AthenaLuxe2025Page() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white font-semibold text-sm">Produit structuré</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-6">
              ATHENA DÉGRESSIF LUXE
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              JUILLET 2025 - Exposition au secteur du luxe et de la consommation mondiale
            </p>
            <div className="mt-8 inline-block bg-[#B99066] rounded-full px-8 py-4 shadow-xl">
              <span className="text-white font-bold text-2xl">+15% PAR AN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Informations principales */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#253F60]/10 to-[#B99066]/10 rounded-xl p-8 border-l-4 border-[#253F60] mb-8">
              <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Informations du produit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">ISIN / Code</p>
                  <p className="text-[#253F60] font-semibold text-lg">FR001400ZAJ7</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Thématique</p>
                  <p className="text-[#253F60] font-semibold text-lg">Luxe & consommation mondiale</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Émetteur</p>
                  <p className="text-[#253F60] font-semibold text-lg">Natixis Structured Issuance SA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Garant</p>
                  <p className="text-[#253F60] font-semibold text-lg">Natixis (Notation A / A1 / A+)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sous-jacent</p>
                  <p className="text-[#253F60] font-semibold text-lg">iEdge Transatlantic Luxury Goods & Services 10 EW Decrement 50 Points GTR®</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Durée maximale</p>
                  <p className="text-[#253F60] font-semibold text-lg">10 ans (échéance 2035)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Souscription</p>
                  <p className="text-[#253F60] font-semibold text-lg">Jusqu'au 31 juillet 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Éligibilité</p>
                  <p className="text-[#253F60] font-semibold text-lg">Assurance-vie, PER, Compte-titres</p>
                </div>
              </div>
            </div>
          </div>

          {/* Objectif de rendement */}
          <div className="mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
              Objectif de rendement
            </h2>
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#B99066] p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-full px-8 py-4 mb-4">
                  <span className="text-white font-bold text-3xl">+15% PAR AN</span>
                </div>
                <p className="text-[#4B5563] text-lg">
                  +1,25 % par mois écoulé, soit jusqu'à +15 % par an
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#253F60] font-semibold mb-2">Mécanisme :</p>
                <p className="text-[#4B5563]">
                  Le rendement est calculé de manière dégressive : +1,25 % par mois écoulé depuis le lancement, 
                  avec un maximum de +15 % par an. Le rendement est versé à l'échéance ou lors d'un rappel anticipé.
                </p>
              </div>
            </div>
          </div>

          {/* Barrière et protection */}
          <div className="mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
              Barrière et protection du capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#253F60]/10 to-[#B99066]/10 rounded-xl p-6 border-l-4 border-[#253F60]">
                <h3 className="text-[#253F60] font-bold text-lg mb-4">Rappel anticipé</h3>
                <p className="text-[#4B5563] mb-4">
                  Rappel anticipé possible chaque mois à partir du 12ᵉ mois si l'indice ≥ barrière dégressive 
                  (100 % → 79,67 %)
                </p>
                <p className="text-[#253F60] font-semibold">
                  Le produit peut être remboursé avant l'échéance si les conditions sont remplies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#253F60]/10 to-[#B99066]/10 rounded-xl p-6 border-l-4 border-[#B99066]">
                <h3 className="text-[#253F60] font-bold text-lg mb-4">À l'échéance</h3>
                <p className="text-[#4B5563] mb-4">
                  Remboursement +150 % du nominal si indice ≥ 79,48 %
                </p>
                <p className="text-[#253F60] font-semibold mb-2">Protection du capital :</p>
                <ul className="list-disc list-inside text-[#4B5563] space-y-1">
                  <li>Capital protégé à 100 % si indice ≥ 50 %</li>
                  <li>Perte proportionnelle si indice &lt; 50 %</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Points forts */}
          <div className="mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
              Points forts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-[#253F60] font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Thématique premium internationale
                </h3>
                <p className="text-[#4B5563]">
                  Exposition au secteur du luxe et de la consommation mondiale, un secteur résilient 
                  et porteur de croissance à long terme.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-[#253F60] font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Barrière dégressive facilitant le rappel anticipé
                </h3>
                <p className="text-[#4B5563]">
                  La barrière dégressive (de 100 % à 79,67 %) augmente les chances de rappel anticipé 
                  au fil du temps, permettant de verrouiller les gains plus rapidement.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-[#253F60] font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Potentiel de rendement élevé
                </h3>
                <p className="text-[#4B5563]">
                  Jusqu'à +15 % par an, avec un mécanisme de rendement dégressif qui récompense 
                  la durée de détention.
                </p>
              </div>
            </div>
          </div>

          {/* Risques clés */}
          <div className="mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
              Risques clés
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#253F60] font-bold text-lg mb-2">⚠️ Risque de perte en capital</h3>
                  <p className="text-[#4B5563]">
                    Risque de perte en capital partielle ou totale si l'indice baisse de plus de 50 % à l'échéance. 
                    Le capital n'est pas garanti en cas de forte baisse du sous-jacent.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#253F60] font-bold text-lg mb-2">⚠️ Risque de solvabilité de l'émetteur</h3>
                  <p className="text-[#4B5563]">
                    En cas de défaillance de Natixis (émetteur), le remboursement du capital et des intérêts 
                    pourrait être compromis. Natixis bénéficie d'une notation A / A1 / A+.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#253F60] font-bold text-lg mb-2">⚠️ Risque de liquidité</h3>
                  <p className="text-[#4B5563]">
                    Le produit est conçu pour être détenu jusqu'à l'échéance ou le rappel anticipé. 
                    Une sortie anticipée peut entraîner des pertes ou des frais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pourquoi ce produit */}
          <div className="mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
              Pourquoi investir dans ce produit ?
            </h2>
            <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-2xl p-10 text-white shadow-2xl">
              <p className="text-xl sm:text-2xl leading-relaxed font-light mb-6">
                Le secteur du luxe et de la consommation mondiale représente un pilier solide de l'économie internationale. 
                Ce produit structuré vous permet de participer à cette croissance tout en bénéficiant d'une protection 
                partielle du capital.
              </p>
              <p className="text-lg leading-relaxed">
                Avec un rendement potentiel de +15 % par an et une barrière dégressive qui facilite le rappel anticipé, 
                ce produit s'adresse aux investisseurs souhaitant diversifier leur portefeuille vers un secteur résilient 
                et porteur, avec un niveau de risque maîtrisé.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#253F60]/10 to-[#B99066]/10 rounded-xl p-8 border-2 border-[#253F60]">
              <h3 className="text-[#253F60] text-2xl font-cairo font-bold mb-4">
                Intéressé par ce produit ?
              </h3>
              <p className="text-[#4B5563] mb-6">
                Contactez un conseiller Azalée Patrimoine pour obtenir la documentation complète 
                et vérifier l'adéquation de ce produit avec votre profil d'investisseur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/contact-azalee-patrimoine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#253F60] hover:bg-[#1a2d47] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-center transition-all duration-300"
                >
                  Prendre rendez-vous avec un conseiller
                </a>
                <Link
                  href="/placements/produits-structures"
                  className="bg-[#B99066] hover:bg-[#A67A5A] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-center transition-all duration-300"
                >
                  Voir les autres produits structurés
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <p className="text-sm text-[#4B5563]">
              <strong className="text-[#253F60]">🔒 Avertissement :</strong> Ce produit est destiné à des investisseurs avertis 
              ayant une bonne compréhension des mécanismes et des risques associés aux produits structurés. 
              Il ne constitue pas un conseil en investissement personnalisé. Avant toute souscription, 
              il est impératif de vérifier l'adéquation du produit avec le profil de risque et les objectifs 
              d'investissement de chaque investisseur. Les performances passées ne préjugent pas des performances futures.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


