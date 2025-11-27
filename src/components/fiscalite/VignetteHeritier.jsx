"use client";
import React from "react";
import Link from "next/link";

const VignetteHeritier = () => {
  return (
    <div className="w-full max-w-4xl bg-[#253F60] rounded-lg shadow-2xl overflow-hidden">
      {/* Titre */}
      <div className="bg-[#253F60] p-6 border-b border-[#B99066]/20">
        <h3 className="text-[#B99066] text-2xl font-cairo font-bold">
          Héritiers et optimisation patrimoniale
        </h3>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* Paragraphe d'introduction */}
        <p className="text-white text-sm font-inter leading-relaxed mb-6">
          Gérer un patrimoine hérité nécessite une approche fiscale spécifique, combinant l'optimisation des actifs reçus et la préparation de la transmission future. Les défis sont multiples pour l'héritier : valoriser les biens reçus, optimiser les revenus générés, préparer sa propre succession.
        </p>

        {/* Layout en deux colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Colonne gauche - Textes */}
          <div className="space-y-6">
            {/* Stratégies de transmission anticipée */}
            <div>
              <h4 className="text-[#B99066] text-lg font-cairo font-semibold mb-3">
                Stratégies de transmission anticipée
              </h4>
              <p className="text-white/80 text-sm font-inter leading-relaxed">
                Optimisation des abattements renouvelables tous les 15 ans (100 000€ entre parents/enfants, 31 865€ entre grands-parents/petits-enfants) et donation progressive avec conservation de l'usufruit.
              </p>
            </div>

            {/* Le démembrement de propriété */}
            <div>
              <h4 className="text-white text-lg font-cairo font-bold mb-3">
                Le démembrement de propriété
              </h4>
              <p className="text-white/80 text-sm font-inter leading-relaxed">
                Outil puissant consistant à donner la nue-propriété tout en conservant l'usufruit, réduisant ainsi l'assiette taxable tout en préservant les revenus et la jouissance du bien.
              </p>
            </div>

            {/* Quasi-usufruit sur l'assurance-vie */}
            <div>
              <h4 className="text-white text-lg font-cairo font-bold mb-3">
                Quasi-usufruit sur l'assurance-vie
              </h4>
              <p className="text-white/80 text-sm font-inter leading-relaxed">
                Permet au donateur de conserver la libre disposition des fonds tout en transférant progressivement la propriété économique du contrat.
              </p>
            </div>
          </div>

          {/* Colonne droite - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">Image bureau ancien</span>
            </div>
          </div>
        </div>

        {/* Section des 3 services numérotés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Service 01 */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#B99066] font-bold text-2xl">01</span>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">
                Audit patrimonial global
              </h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Évaluation précise des actifs reçus, analyse de leur rentabilité, identification des optimisations possibles et des contraintes fiscales héritées.
            </p>
          </div>

          {/* Service 02 */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#B99066] font-bold text-2xl">02</span>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">
                Restructuration optimisée
              </h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Arbitrage entre actifs sous-performants, réinvestissement dans des dispositifs fiscalement avantageux, diversification géographique et sectorielle.
            </p>
          </div>

          {/* Service 03 */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#B99066] font-bold text-2xl">03</span>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">
                Préparation transmission
              </h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Mise en place d'outils de transmission (<Link href="/immobilier/sci" className="text-[#B99066] hover:text-[#D4A574] underline">SCI</Link>, <Link href="/placements/assurance-vie" className="text-[#B99066] hover:text-[#D4A574] underline">assurance-vie</Link>, donations), planification sur 15-20 ans, intégration de la fiscalité future pour les héritiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VignetteHeritier;

