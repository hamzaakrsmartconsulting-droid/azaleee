"use client";
import React from "react";
import Link from "next/link";

const VignetteProfessionnels = () => {
  return (
    <div className="w-[900px] bg-[#253F60] rounded-lg shadow-2xl overflow-hidden">
      {/* Titre */}
      <div className="bg-[#253F60] p-6 border-b border-[#B99066]/20">
        <h3 className="text-white text-2xl font-cairo font-bold">
          Profession libérale et chefs d'entreprise
        </h3>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* Paragraphe d'introduction */}
        <p className="text-white text-sm font-inter leading-relaxed mb-6">
          Les professionnels indépendants bénéficient de leviers fiscaux spécifiques mais complexes. Une approche stratégique permet d'optimiser à la fois la fiscalité personnelle et professionnelle. L'objectif dépasse la simple réduction d'impôt : protection sociale, retraite et transmission de l'entreprise.
        </p>

        {/* Grille 2x2 des stratégies */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Retraite supplémentaire */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30 hover:border-[#B99066] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">Retraite supplémentaire</h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#D4A574] underline">PER individuel</Link> et contrats <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#D4A574] underline">Madelin</Link> permettent des déductions importantes du bénéfice imposable. Les plafonds élevés (jusqu'à 10% des revenus professionnels) autorisent des versements substantiels, particulièrement adaptés aux revenus irréguliers des indépendants.
            </p>
          </div>

          {/* Prévoyance professionnelle */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30 hover:border-[#B99066] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">Prévoyance professionnelle</h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Contrats de prévoyance déductibles fiscalement, garantissant le maintien des revenus en cas d'incapacité. La déduction peut atteindre 3,75% du plafond annuel de la sécurité sociale plus 7% des revenus professionnels.
            </p>
          </div>

          {/* Structuration SCI */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30 hover:border-[#B99066] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">Structuration SCI</h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Acquisition des locaux professionnels via <Link href="/immobilier/sci" className="text-[#B99066] hover:text-[#D4A574] underline">SCI familiale</Link> optimisant la transmission tout en conservant la déduction des loyers. Structure permettant également l'association des enfants au patrimoine professionnel.
            </p>
          </div>

          {/* Préparation cession */}
          <div className="bg-[#1e3a5a] rounded-lg p-4 border border-[#B99066]/30 hover:border-[#B99066] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-[#B99066] font-cairo font-semibold text-sm">Préparation cession</h5>
            </div>
            <p className="text-white/80 text-xs font-inter leading-relaxed">
              Anticipation des plus-values de cession avec abattements pour durée de détention, possibilité d'apport-cession, ou donation progressive des parts sociales pour optimiser la transmission.
            </p>
          </div>
        </div>

        {/* Paragraphe de conclusion */}
        <div className="bg-[#1e3a5a] rounded-lg p-4 border-l-4 border-[#B99066]">
          <p className="text-white text-sm font-inter leading-relaxed">
            La spécificité des professions libérales réside dans l'irrégularité des revenus et l'importance de la transmission de clientèle. Une stratégie fiscale efficace intègre lissage des revenus, optimisation des charges sociales et préparation de la succession professionnelle sur plusieurs années.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VignetteProfessionnels;

