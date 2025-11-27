"use client";
import React from "react";
import Link from "next/link";

const VignetteInvestisseurImmobilier = () => {
  return (
    <div className="w-full max-w-4xl bg-[#253F60] rounded-lg shadow-2xl overflow-hidden">
      {/* Titre */}
      <div className="bg-[#253F60] p-6 border-b border-[#B99066]/20">
        <h3 className="text-white text-2xl font-cairo font-bold">
          Optimisation fiscale pour investisseurs immobiliers
        </h3>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* Paragraphe d'introduction */}
        <p className="text-white text-sm font-inter leading-relaxed mb-6">
          L'investisseur immobilier dispose d'un arsenal fiscal particulièrement développé pour optimiser sa situation. La stratégie doit s'adapter à votre profil de risque, vos objectifs patrimoniaux et votre niveau d'imposition actuel et futur.
        </p>

        {/* Processus en 3 étapes */}
        <div className="space-y-6 mb-6">
          {/* Étape 1 */}
          <div className="bg-[#1e3a5a] rounded-lg p-5 border-l-4 border-[#B99066]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center">
                  <span className="text-[#253F60] font-bold text-xl">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[#B99066] text-lg font-cairo font-semibold mb-3">
                  Choix du dispositif
                </h4>
                <p className="text-white/80 text-sm font-inter leading-relaxed">
                  <Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#D4A574] underline">Pinel</Link> et <Link href="/fiscalite/loi-denormandie" className="text-[#B99066] hover:text-[#D4A574] underline">Denormandie</Link> pour les réductions d'impôt échelonnées, <Link href="/fiscalite/loi-malraux" className="text-[#B99066] hover:text-[#D4A574] underline">Malraux</Link> et <Link href="/fiscalite/monument-historique" className="text-[#B99066] hover:text-[#D4A574] underline">Monuments Historiques</Link> pour les déductions immédiates importantes. L'arbitrage dépend de votre tranche marginale d'imposition.
                </p>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="bg-[#1e3a5a] rounded-lg p-5 border-l-4 border-[#B99066]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center">
                  <span className="text-[#253F60] font-bold text-xl">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[#B99066] text-lg font-cairo font-semibold mb-3">
                  Régime fiscal des revenus
                </h4>
                <p className="text-white/80 text-sm font-inter leading-relaxed">
                  Micro-foncier (abattement 30%) versus régime réel permettant la déduction des charges, intérêts d'emprunt, travaux, et amortissements. Le choix impact significativement la rentabilité nette.
                </p>
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="bg-[#1e3a5a] rounded-lg p-5 border-l-4 border-[#B99066]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center">
                  <span className="text-[#253F60] font-bold text-xl">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[#B99066] text-lg font-cairo font-semibold mb-3">
                  Structuration juridique
                </h4>
                <p className="text-white/80 text-sm font-inter leading-relaxed">
                  <Link href="/immobilier/sci" className="text-[#B99066] hover:text-[#D4A574] underline">SCI familiale</Link> pour optimiser la transmission, SCI à l'IS pour les gros patrimoines, démembrement de propriété pour réduire les droits de succession tout en conservant les revenus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Paragraphe de conclusion */}
        <div className="bg-[#1e3a5a] rounded-lg p-4 mb-4">
          <p className="text-white text-sm font-inter leading-relaxed">
            L'investisseur averti combine souvent plusieurs dispositifs : <Link href="/fiscalite/loi-pinel" className="text-[#B99066] hover:text-[#D4A574] underline">Pinel</Link> pour la réduction d'impôt régulière, <Link href="/fiscalite/loi-malraux" className="text-[#B99066] hover:text-[#D4A574] underline">Malraux</Link> pour l'optimisation ponctuelle, et structuration en <Link href="/immobilier/sci" className="text-[#B99066] hover:text-[#D4A574] underline">SCI</Link> pour la transmission. Cette approche globale nécessite un accompagnement professionnel pour éviter les écueils et maximiser les bénéfices fiscaux.
          </p>
        </div>

        {/* Note d'alerte */}
        <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/50">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              <strong className="text-white">La réforme de la fiscalité du logement ancien pourrait modifier certains arbitrages.</strong> Il convient d'anticiper ces évolutions dans votre stratégie d'investissement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VignetteInvestisseurImmobilier;

