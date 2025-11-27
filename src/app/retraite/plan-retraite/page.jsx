"use client";
import React from "react";
import Link from "next/link";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function PlanRetraitePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/retraite" className="hover:text-white transition-colors">Retraite</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-[#B99066]">Plans d'épargne retraite</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold mb-6 leading-tight">
              Plan d'Épargne Retraite : PER, PERP, PERCO, Madelin, Préfon - quel dispositif choisir selon votre profil ?
            </h1>
            <p className="text-lg sm:text-xl font-inter text-white/90 max-w-3xl">
              Découvrez les solutions d'épargne retraite adaptées à votre statut et optimisez votre préparation à la retraite.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Préparer sa retraite, c'est anticiper la baisse de revenus qui survient au moment du départ de la vie active.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Pour maintenir votre niveau de vie, plusieurs solutions d'épargne retraite existent : le <strong className="text-[#253F60]">PER</strong> (Plan d'Épargne Retraite), l'ancien <strong className="text-[#253F60]">PERP</strong>, le <strong className="text-[#253F60]">PERCO</strong> d'entreprise, le contrat <strong className="text-[#253F60]">Madelin</strong> pour les indépendants, ou encore <strong className="text-[#253F60]">Préfon Retraite</strong> pour les fonctionnaires.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Ces solutions vous permettent de transformer votre épargne en revenus durables à la retraite.
            </p>
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 sm:p-8 text-white mt-8">
              <p className="text-white text-base sm:text-lg font-inter leading-relaxed">
                Chez <strong className="text-[#B99066]">Azalée Patrimoine</strong>, nous vous accompagnons dans le choix du dispositif le plus adapté selon votre statut (salarié, indépendant, fonctionnaire, militaire, dirigeant) pour une retraite sereine et fiscalement optimisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comprendre les différences */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            PER, PERP, PERCO, Madelin, Préfon : comprendre les différences
            </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Colonne gauche : Contenu textuel */}
            <div className="lg:col-span-2 space-y-12">
              {/* H3: Le PER */}
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-bold mb-6">
                  Le PER : le nouveau standard de l'épargne retraite
                </h3>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Depuis la loi PACTE, le <strong className="text-[#253F60]">PER</strong> (Plan d'Épargne Retraite) remplace progressivement les anciens dispositifs comme le PERP, le PERCO et le contrat Madelin (Article 83).
                </p>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Le PER offre une grande flexibilité : versements volontaires, transfert des anciens contrats, sortie en capital ou en rente.
                </p>
                
                <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 mb-6">
                  <h4 className="text-white text-lg font-cairo font-bold mb-4">
                    Ses principaux avantages :
                  </h4>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Déduction fiscale sur les versements ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Choix entre gestion pilotée ou libre ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Possibilité de sortie 100% en capital ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Clause bénéficiaire souple en cas de décès ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Intégration dans votre stratégie de revenus complémentaires à la retraite.</span>
                    </li>
                  </ul>
          </div>
          
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                  Le PER est aujourd'hui le produit privilégié des cadres et dirigeants pour préparer une retraite anticipée, sécuriser la transmission et réduire la fiscalité.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <Link href="/retraite/plan-retraite/per-individuel" className="text-[#253F60] font-inter font-bold hover:text-[#B99066] transition-colors underline">
                        En savoir plus sur le PER individuel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* H3: PERP et Madelin */}
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-bold mb-6">
                  Le PERP et le contrat Madelin : les anciens dispositifs encore actifs
                </h3>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Les contrats PERP et Madelin restent valides pour ceux qui les détiennent déjà, mais il est souvent plus avantageux de les transférer vers un PER plus moderne.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-[#F9FAFB] rounded-xl p-6 border-2 border-[#253F60]/20">
                    <h4 className="text-[#253F60] font-cairo font-bold mb-3">
                      Le PERP (Plan d'Épargne Retraite Populaire)
                    </h4>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Permettait de constituer une rente viagère, avec des versements déductibles du revenu imposable.
              </p>
            </div>
            
                  <div className="bg-[#F9FAFB] rounded-xl p-6 border-2 border-[#B99066]/20">
                    <h4 className="text-[#253F60] font-cairo font-bold mb-3">
                      Le contrat Madelin
                    </h4>
                    <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                      Destiné aux travailleurs indépendants et professions libérales, offrait les mêmes avantages fiscaux mais ne permettait qu'une sortie en rente.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mt-6">
                  <p className="text-[#4B5563] text-sm font-inter italic">
                    💡 Aujourd'hui, un transfert vers un PER permet plus de flexibilité et un meilleur rendement sur la durée.
                  </p>
                </div>
              </div>

              {/* H3: PERCO et plans d'épargne entreprise */}
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-bold mb-6">
                  Le PERCO et les plans d'épargne entreprise
                </h3>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Le <strong className="text-[#253F60]">PERCO</strong> (remplacé par le <strong className="text-[#253F60]">PERECO</strong>) est une solution d'épargne retraite d'entreprise qui permet aux salariés de placer leur participation, leur intéressement ou leurs versements volontaires, souvent abondés par l'employeur.
                </p>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Des entreprises comme <strong className="text-[#253F60]">BNP Paribas Retraite Épargne Entreprise</strong> proposent des formules collectives performantes.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <p className="text-[#4B5563] text-sm font-inter">
                      <strong className="text-[#253F60]">Bon à savoir :</strong> La prime de départ à la retraite dans le privé peut être investie sur un PERCO/PERECO pour capitaliser sans fiscalité immédiate.
              </p>
            </div>
                </div>
              </div>

              {/* H3: Préfon Retraite */}
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl sm:text-2xl lg:text-3xl font-cairo font-bold mb-6">
                  La Préfon Retraite : le plan des fonctionnaires
                </h3>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  La <strong className="text-[#253F60]">Préfon Retraite</strong> est un plan d'épargne retraite complémentaire destiné aux fonctionnaires et assimilés.
                </p>
                
                <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 mb-6">
                  <h4 className="text-white text-lg font-cairo font-bold mb-4">
                    Ses avantages :
                  </h4>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Compense les limites du système public, qui peut être moins avantageux pour les carrières hachées ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Les versements sont déductibles du revenu imposable, et la pension complémentaire s'ajoute à la pension principale ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="font-inter">Intéressant pour les profils dont la retraite de la fonction publique ou militaire ne couvre pas le niveau de vie souhaité.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Colonne droite : Tableau récapitulatif */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20 sticky top-8">
                <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6 text-center">
                  Les plans d'épargne retraite en un coup d'œil
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white">
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Dispositif</th>
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Public</th>
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Fiscalité</th>
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Sortie</th>
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Avantage</th>
                        <th className="px-3 py-3 text-left font-cairo font-bold text-xs">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* PER */}
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="px-3 py-4 font-cairo font-bold text-[#253F60]">PER</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Tous les actifs</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Versements déductibles du revenu imposable (plafond fiscal retraite)</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Capital, rente ou mixte</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Flexible, transférable, fiscalement optimisé</td>
                        <td className="px-3 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">En cours</span>
                        </td>
                      </tr>
                      {/* PERCO/PERECO */}
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="px-3 py-4 font-cairo font-bold text-[#253F60]">PERCO / PERECO</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Salariés d'entreprise</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Exonération sur participation, intéressement, abondement</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Capital ou rente</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Épargne salariale abondée par l'employeur</td>
                        <td className="px-3 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">✔ En cours (remplace PERCO)</span>
                        </td>
                      </tr>
                      {/* Madelin */}
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="px-3 py-4 font-cairo font-bold text-[#253F60]">Contrat Madelin</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Indépendants / professions libérales</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Déduction du bénéfice imposable</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Rente viagère obligatoire</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Fiscalité attractive à l'entrée</td>
                        <td className="px-3 py-4">
                          <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">▲ Remplacé par PER</span>
                        </td>
                      </tr>
                      {/* PERP */}
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="px-3 py-4 font-cairo font-bold text-[#253F60]">PERP</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Tous les actifs</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Déduction revenu imposable</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Rente (20% max en capital)</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Sécurité à long terme</td>
                        <td className="px-3 py-4">
                          <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">▲ Remplacé par PER</span>
                        </td>
                      </tr>
                      {/* Préfon Retraite */}
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="px-3 py-4 font-cairo font-bold text-[#253F60]">Préfon Retraite</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Fonctionnaires, assimilés</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Déduction revenu imposable</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Rente viagère</td>
                        <td className="px-3 py-4 text-[#4B5563] text-xs font-inter">Pension complémentaire publique</td>
                        <td className="px-3 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">✔ En cours</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Reconstituer sa carrière */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Reconstituer sa carrière et anticiper le montant de sa retraite
            </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Avant de choisir un plan, il est essentiel de connaître vos droits et d'anticiper le montant de votre retraite.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
          </div>
                <h3 className="font-cairo font-bold mb-3 text-lg">Consulter vos relevés</h3>
                <p className="font-inter text-sm text-white/90">
                  Vérifier vos trimestres validés sur vos relevés de carrière retraite
                </p>
            </div>
            
              <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-cairo font-bold mb-3 text-lg">Identifier les années incomplètes</h3>
                <p className="font-inter text-sm text-white/90">
                  Repérer les années incomplètes (congé parental, chômage, invalidité, temps partiel)
                </p>
                  </div>

              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-cairo font-bold mb-3 text-lg">Estimer votre retraite</h3>
                <p className="font-inter text-sm text-white/90">
                  Estimer le montant minimum de retraite, incluant la prime ARRCO pour les salariés du privé
                </p>
              </div>
                  </div>

            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <span className="text-3xl">👉</span>
                <div>
                  <h3 className="font-cairo font-bold mb-3 text-lg">Un audit retraite Azalée</h3>
                  <p className="font-inter leading-relaxed text-white/90">
                    Cet audit vous permet de calculer votre future pension, d'estimer le taux de CSG retraite 2025, et de définir le capital nécessaire pour combler l'éventuel écart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Situations spécifiques */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Et pour les situations spécifiques : chômage, départ ou réversion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chômage */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4">
                Chômage et cotisations retraite
              </h3>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed mb-4">
                Les périodes de chômage indemnisé peuvent valider des trimestres, mais sans cotisations complémentaires.
              </p>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                L'intérêt d'un <strong className="text-[#253F60]">PER individuel</strong> pour continuer à capitaliser.
              </p>
            </div>

            {/* Départ à la retraite */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#B99066]/20">
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4">
                Retraite et prime de départ
              </h3>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed mb-4">
                La prime de départ à la retraite ou prime de retraite dans le privé peut être partiellement exonérée ou versée sur un plan d'épargne retraite pour différer la fiscalité.
              </p>
            </div>

            {/* Fonctionnaire et réversion */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4">
                Fonctionnaire et réversion
              </h3>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed mb-4">
                La pension de réversion dans le public ne compense pas toujours les écarts de revenus.
              </p>
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                L'importance d'un <strong className="text-[#253F60]">plan retraite individuel</strong> pour le conjoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: L'accompagnement Azalée Patrimoine */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            L'accompagnement Azalée Patrimoine
            </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Avec plus de 20 ans d'expertise, Azalée Patrimoine accompagne :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <h3 className="font-cairo font-bold mb-4 text-lg">Salariés du privé</h3>
                <p className="font-inter text-sm text-white/90">
                  Pour optimiser leur prime de départ à la retraite
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <h3 className="font-cairo font-bold mb-4 text-lg">Indépendants</h3>
                <p className="font-inter text-sm text-white/90">
                  Pour transférer leurs contrats Madelin vers un PER
            </p>
          </div>
          
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <h3 className="font-cairo font-bold mb-4 text-lg">Fonctionnaires et militaires</h3>
                <p className="font-inter text-sm text-white/90">
                  Pour compléter leur retraite publique via Préfon Retraite ou un PER individuel
                </p>
                </div>

              <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <h3 className="font-cairo font-bold mb-4 text-lg">Dirigeants d'entreprise</h3>
                <p className="font-inter text-sm text-white/90">
                  Pour structurer un plan retraite fiscalement optimisé dans leur holding
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-8 text-white text-center">
              <p className="text-xl sm:text-2xl font-cairo font-bold mb-4">
                Notre mission
              </p>
              <p className="text-lg font-inter text-white/90 italic">
                Faire de votre épargne retraite un véritable levier de liberté financière, adapté à votre profil et à votre fiscalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#253F60] via-[#1e3a5a] to-[#253F60] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-4 sm:mb-6">
              Prendre rendez-vous avec un conseiller Azalée
          </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              👉 Vous souhaitez savoir quel plan d'épargne retraite correspond à votre profil ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
              >
                👉 Prendre rendez-vous avec un conseiller Azalée Patrimoine
              </a>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <a
                href="mailto:contact@azalee-patrimoine.fr"
                className="text-[#253F60] hover:text-[#B99066] font-inter font-semibold text-base sm:text-lg transition-colors"
              >
                📧 contact@azalee-patrimoine.fr
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/retraite"
                className="text-[#B99066] hover:text-[#D4A574] font-inter font-semibold text-base transition-colors"
              >
                Retour à la page Retraite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
