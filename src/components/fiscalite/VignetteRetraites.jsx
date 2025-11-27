"use client";
import React from "react";
import Link from "next/link";

const VignetteRetraites = () => {
  return (
    <div className="w-full max-w-4xl bg-[#253F60] rounded-lg shadow-2xl overflow-hidden">
      {/* Titre */}
      <div className="bg-[#253F60] p-6 border-b border-[#B99066]/20">
        <h3 className="text-white text-2xl font-cairo font-bold">
          Stratégies pour retraités et revenus passifs
        </h3>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* Section Optimisation des revenus de capitaux */}
        <div className="mb-6">
          <h4 className="text-[#B99066] text-lg font-cairo font-semibold mb-3">
            Optimisation des revenus de capitaux
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-white text-sm font-inter leading-relaxed">
              <p className="mb-3">
                Le choix fiscal pour vos revenus de placement : <strong>prélèvement forfaitaire unique (flat tax à 30%)</strong> versus <strong>intégration au barème progressif</strong> de l'impôt sur le revenu.
              </p>
              <p className="mb-3">
                La décision dépend de votre <Link href="/fiscalite/tmi-prelevements-sociaux" className="text-[#B99066] hover:text-[#D4A574] underline">tranche marginale d'imposition (TMI)</Link>. Pour les TMI inférieures à 30%, le barème progressif peut être avantageux grâce à l'abattement de 40% sur les dividendes et la déduction de la CSG.
              </p>
              <p>
                L'étalement des plus-values dans le temps permet de lisser l'impact fiscal.
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder pour l'image - à remplacer par une vraie image */}
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white/50 text-sm">Image couple retraité</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline des phases */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Phase 1 */}
            <div className="bg-[#1e3a5a] rounded-lg p-4 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#B99066] text-[#253F60] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center">1</span>
                <h5 className="text-white font-cairo font-semibold text-sm">Phase pré-retraite (55-62 ans)</h5>
              </div>
              <p className="text-white/80 text-xs font-inter leading-relaxed">
                Optimisation des revenus d'activité, constitution d'un <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#D4A574] underline">PER</Link>, arbitrages sur l'<Link href="/placements/assurance-vie" className="text-[#B99066] hover:text-[#D4A574] underline">assurance-vie</Link> pour préparer la transition fiscale.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#1e3a5a] rounded-lg p-4 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#B99066] text-[#253F60] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <h5 className="text-white font-cairo font-semibold text-sm">Début de retraite (62-70 ans)</h5>
              </div>
              <p className="text-white/80 text-xs font-inter leading-relaxed">
                Activation progressive des revenus de remplacement, optimisation du calendrier de liquidation des placements, choix du régime fiscal optimal.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#1e3a5a] rounded-lg p-4 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#B99066] text-[#253F60] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center">3</span>
                <h5 className="text-white font-cairo font-semibold text-sm">Retraite confirmée (70+ ans)</h5>
              </div>
              <p className="text-white/80 text-xs font-inter leading-relaxed">
                Préparation de la transmission, utilisation des abattements successoraux, structuration du patrimoine pour les héritiers.
              </p>
            </div>
          </div>
        </div>

        {/* Note sur l'assurance-vie */}
        <div className="bg-[#1e3a5a] rounded-lg p-4 border-l-4 border-[#B99066]">
          <h5 className="text-[#B99066] font-cairo font-semibold mb-2">L'assurance-vie</h5>
          <p className="text-white text-sm font-inter leading-relaxed">
            Outil privilégié du retraité : avantages fiscaux attractifs après 8 ans (abattement annuel), transmission hors succession jusqu'à 152 500€ par bénéficiaire, flexibilité de gestion, diversification des supports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VignetteRetraites;


