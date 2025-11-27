"use client";
import React from "react";
import Link from "next/link";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function SimulateurRetraitePage() {
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
              <span className="text-[#B99066]">Simulateur Retraite</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold mb-6 leading-tight">
              Simulateur Retraite : estimez vos droits et optimisez votre futur revenu
            </h1>
            <p className="text-lg sm:text-xl font-inter text-white/90 max-w-3xl">
              Anticipez votre retraite et construisez une stratégie sur mesure avec Azalée Patrimoine.
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
              Grâce à un simulateur retraite, vous pouvez estimer vos droits, calculer votre taux de remplacement, et identifier les leviers à activer pour préserver votre niveau de vie.
            </p>
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 sm:p-8 text-white mt-8">
              <p className="text-white text-base sm:text-lg font-inter leading-relaxed">
                Chez <strong className="text-[#B99066]">Azalée Patrimoine</strong>, nous allons plus loin qu'un simple calcul automatique : nous analysons votre relevé de carrière retraite, vos régimes de cotisation, votre épargne retraite existante (PER, PERCO, Préfon Retraite, contrat Madelin) et vos indemnités de départ pour construire une stratégie sur mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi utiliser un simulateur retraite ? */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Pourquoi utiliser un simulateur retraite ?
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Un simulateur retraite permet d'estimer :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Point 1 */}
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-cairo font-bold mb-3 text-lg">Votre âge de départ à la retraite</h3>
                    <p className="font-inter leading-relaxed text-white/90 text-sm">
                      Selon vos trimestres validés
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-cairo font-bold mb-3 text-lg">Le montant de votre pension mensuelle</h3>
                    <p className="font-inter leading-relaxed text-white/90 text-sm">
                      Régime de base + complémentaire
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-cairo font-bold mb-3 text-lg">Votre taux de remplacement</h3>
                    <p className="font-inter leading-relaxed text-white/90 text-sm">
                      Revenu net à la retraite / dernier revenu d'activité
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="font-cairo font-bold mb-3 text-lg">L'écart entre votre future pension et vos besoins réels</h3>
                    <p className="font-inter leading-relaxed text-white/90 text-sm">
                      Pour identifier les leviers d'optimisation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note importante */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-3">
                    <strong className="text-[#253F60]">En moyenne, un salarié cadre perd entre 30 et 40 % de ses revenus à la retraite.</strong>
                  </p>
                  <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                    Ce taux de remplacement chute souvent davantage pour les professions libérales, les dirigeants d'entreprise ou les fonctionnaires aux carrières incomplètes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Les meilleurs simulateurs retraite */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Les meilleurs simulateurs retraite disponibles en ligne
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Il existe plusieurs outils fiables pour estimer vos droits :
            </p>

            <div className="space-y-4 mb-8">
              {/* Info-Retraite.fr */}
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cairo font-bold mb-2 text-lg">Info-Retraite.fr</h3>
                    <p className="font-inter text-sm text-white/90 mb-2">
                      <strong>Spécificité :</strong> Officiel, accessible avec FranceConnect. Agrège tous vos régimes.
                    </p>
                    <a href="https://info-retraite.fr" target="_blank" rel="noopener noreferrer" className="text-[#B99066] hover:text-[#D4A574] font-inter text-sm underline">
                      info-retraite.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Agirc-Arrco */}
              <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cairo font-bold mb-2 text-lg">Agirc-Arrco</h3>
                    <p className="font-inter text-sm text-white/90 mb-2">
                      <strong>Spécificité :</strong> Calcule la retraite complémentaire des salariés du privé.
                    </p>
                    <a href="https://agirc-arrco.fr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#253F60] font-inter text-sm underline">
                      agirc-arrco.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Préfon Retraite */}
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cairo font-bold mb-2 text-lg">Préfon Retraite</h3>
                    <p className="font-inter text-sm text-white/90 mb-2">
                      <strong>Spécificité :</strong> Simulateur dédié aux fonctionnaires et assimilés.
                    </p>
                    <a href="https://prefon-retraite.fr" target="_blank" rel="noopener noreferrer" className="text-[#B99066] hover:text-[#D4A574] font-inter text-sm underline">
                      prefon-retraite.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Public */}
              <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cairo font-bold mb-2 text-lg">Service Public - Simulateur global</h3>
                    <p className="font-inter text-sm text-white/90 mb-2">
                      <strong>Spécificité :</strong> Compare votre âge de départ selon votre carrière et votre statut.
                    </p>
                    <a href="https://service-public.fr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#253F60] font-inter text-sm underline">
                      service-public.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* BNP Paribas */}
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cairo font-bold mb-2 text-lg">BNP Paribas Retraite Épargne Entreprise</h3>
                    <p className="font-inter text-sm text-white/90 mb-2">
                      <strong>Spécificité :</strong> Simulateur interne pour les plans d'épargne entreprise.
                    </p>
                    <a href="https://bnpparibas.fr" target="_blank" rel="noopener noreferrer" className="text-[#B99066] hover:text-[#D4A574] font-inter text-sm underline">
                      bnpparibas.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-green-600">🌿</span>
                <p className="text-[#4B5563] text-sm font-inter">
                  Chez <strong className="text-[#253F60]">Azalée Patrimoine</strong>, nous croisons les résultats de ces simulateurs avec une analyse patrimoniale complète pour déterminer vos besoins de revenus complémentaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Comprendre votre taux de remplacement */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Comprendre votre taux de remplacement
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Le taux de remplacement moyen varie selon les régimes :
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white">
                    <th className="px-4 py-3 text-left font-cairo font-bold">Statut</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Taux moyen de remplacement</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Commentaires</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4 font-cairo font-bold text-[#253F60]">Salarié du privé</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter">50 à 60 % du dernier salaire</td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">Variable selon la prime départ retraite Arrco et la durée de cotisation</td>
                  </tr>
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4 font-cairo font-bold text-[#253F60]">Fonctionnaire</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter">65 à 75 % du dernier traitement brut</td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">Hors indemnités et primes non intégrées</td>
                  </tr>
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4 font-cairo font-bold text-[#253F60]">Indépendant / TNS</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter">30 à 45 % du revenu net</td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">À compléter avec un plan épargne retraite</td>
                  </tr>
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4 font-cairo font-bold text-[#253F60]">Militaire</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter">70 à 80 %</td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">Selon l'ancienneté et les bonifications</td>
                  </tr>
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4 font-cairo font-bold text-[#253F60]">Ministre ou haut fonctionnaire</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter">Variable, dépend des régimes spéciaux</td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">La retraite ministre reste encadrée par des plafonds spécifiques</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mt-8">
              <div className="flex items-start gap-3">
                <span className="text-green-600">🌿</span>
                <p className="text-[#4B5563] text-sm font-inter">
                  Pour obtenir une "bonne retraite", il est donc essentiel d'évaluer le manque à gagner et de compenser cette différence grâce à l'<Link href="/retraite/independance-financiere" className="text-[#253F60] hover:text-[#B99066] font-bold underline">épargne individuelle</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Infographie: Taux de remplacement moyen par profil */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6">
              Infographie - Taux de remplacement moyen par profil
            </h2>
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter max-w-3xl mx-auto">
              À la retraite, vos revenus chutent de 30 à 50% selon votre statut. Savez-vous combien il vous restera ?
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white">
                    <th className="px-4 py-3 text-left font-cairo font-bold">Profil</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Dernier revenu d'activité (exemple)</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Pension estimée à la retraite</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Taux de remplacement moyen</th>
                    <th className="px-4 py-3 text-left font-cairo font-bold">Commentaires Azalée Patrimoine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Cadre salarié */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#253F60] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">💼</span>
                        </div>
                        <span className="font-cairo font-bold text-[#253F60]">Cadre salarié</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">4 000 € nets / mois</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">2 200 € nets / mois</td>
                    <td className="px-4 py-4">
                      <span className="bg-[#B99066] text-white font-bold px-3 py-1 rounded-full text-sm">55%</span>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">
                      Retraite de base + complémentaire Arrco-Agirc. Nécessite un PER pour maintenir le niveau de vie.
                    </td>
                  </tr>
                  {/* Fonctionnaire */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🏛️</span>
                        </div>
                        <span className="font-cairo font-bold text-[#253F60]">Fonctionnaire</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">3 000 € bruts / mois</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">2 100 € bruts / mois</td>
                    <td className="px-4 py-4">
                      <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">70%</span>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">
                      Pension calculée sur le dernier traitement, hors primes. Un plan Préfon Retraite peut combler l'écart.
                    </td>
                  </tr>
                  {/* Indépendant / Profession libérale */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#253F60] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🔧</span>
                        </div>
                        <span className="font-cairo font-bold text-[#253F60]">Indépendant / Profession libérale</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">5 000 € nets / mois</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">2 000 € nets / mois</td>
                    <td className="px-4 py-4">
                      <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm">40%</span>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">
                      Retraite Madelin ou PER à privilégier pour compenser le faible régime de base.
                    </td>
                  </tr>
                  {/* Militaire */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🛡️</span>
                        </div>
                        <span className="font-cairo font-bold text-[#253F60]">Militaire</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">3 500 € nets / mois</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">2 700 € nets / mois</td>
                    <td className="px-4 py-4">
                      <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">75%</span>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">
                      Bonifications avantageuses, mais départ anticipé à compléter par un PER ou immobilier locatif.
                    </td>
                  </tr>
                  {/* Ministre / Haut fonctionnaire */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#253F60] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🏛️</span>
                        </div>
                        <span className="font-cairo font-bold text-[#253F60]">Ministre / Haut fonctionnaire</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">10 000 € nets / mois</td>
                    <td className="px-4 py-4 text-[#4B5563] font-inter font-semibold">6 500 € nets / mois</td>
                    <td className="px-4 py-4">
                      <span className="bg-[#B99066] text-white font-bold px-3 py-1 rounded-full text-sm">65%</span>
                    </td>
                    <td className="px-4 py-4 text-[#4B5563] text-xs font-inter">
                      Retraite spécifique plafonnée, fiscalité élevée. Optimisation via assurance vie et PER.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Lecture Azalée Patrimoine */}
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 mt-8 text-white">
              <h3 className="font-cairo font-bold mb-4 text-lg">📊 Lecture Azalée Patrimoine</h3>
              <p className="font-inter leading-relaxed text-white/90 text-sm">
                Le taux de remplacement dépend du statut, du niveau de revenu et de la durée de cotisation. Pour obtenir une bonne retraite, il faut compléter les régimes obligatoires par une épargne retraite adaptée (PER, Préfon, PERCO, contrat Madelin).
              </p>
            </div>

            {/* Notre conseil */}
            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 mt-6 text-white text-center">
              <h3 className="font-cairo font-bold mb-4 text-lg">💡 Notre conseil</h3>
              <p className="font-inter leading-relaxed mb-4 text-white/90">
                Simulez votre retraite, estimez votre manque à gagner et construisez votre plan avec un conseiller Azalée.
              </p>
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#253F60] px-6 py-3 rounded-lg font-inter font-bold hover:bg-[#F9FAFB] transition-colors"
              >
                📞 Prendre rendez-vous avec un conseiller Azalée Patrimoine
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Les leviers pour améliorer votre future retraite */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Les leviers pour améliorer votre future retraite
          </h2>

          <div className="space-y-8">
            {/* H3 - 1. Le PER */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                1. Le Plan d'Épargne Retraite (PER)
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Le <strong className="text-[#253F60]">PER retraite</strong> est aujourd'hui l'outil de référence.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Il permet de déduire vos versements du revenu imposable et de choisir entre sortie en capital ou en rente.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Vous pouvez également transférer vos anciens contrats (PERCO, Madelin, PERP).
              </p>
              <Link href="/placements/per" className="text-[#B99066] hover:text-[#D4A574] font-inter font-bold underline transition-colors">
                🔗 Découvrir le PER individuel
              </Link>
            </div>

            {/* H3 - 2. Dispositifs fonction publique */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                2. Les dispositifs dédiés à la fonction publique
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Les fonctionnaires et militaires bénéficient d'une pension de base spécifique, souvent complétée par la <strong className="text-[#253F60]">Préfon Retraite</strong> ou le <strong className="text-[#253F60]">RAFP</strong>.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Ces dispositifs permettent d'améliorer une pension qui peut parfois être limitée, notamment en cas de carrière hachée ou de congés parentaux.
              </p>
              <Link href="/retraite/plan-retraite" className="text-[#B99066] hover:text-[#D4A574] font-inter font-bold underline transition-colors">
                📎 En savoir plus sur la retraite des fonctionnaires
              </Link>
            </div>

            {/* H3 - 3. Épargne salariale */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                3. L'épargne salariale et les plans collectifs
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Certaines entreprises proposent des plans comme l'<strong className="text-[#253F60]">Épargne Retraite BNP Paribas Entreprise</strong> ou le <strong className="text-[#253F60]">PER d'entreprise collectif (PERECO)</strong>, alimentés par la participation, l'intéressement et les primes de retraite dans le privé.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Ces plans bénéficient d'une fiscalité avantageuse et permettent une préparation progressive à la retraite.
              </p>
            </div>

            {/* H3 - 4. Gestion indemnités */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                4. La gestion des indemnités de départ et la fiscalité
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Au moment du départ à la retraite, plusieurs revenus exceptionnels peuvent être optimisés :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Prime de départ à la retraite,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Indemnités de départ en retraite,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Chômage et cotisation retraite si la transition est différée.</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    Une bonne stratégie consiste souvent à réinvestir tout ou partie de ces sommes dans un plan d'épargne retraite, afin de réduire la fiscalité et d'augmenter vos revenus futurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Anticiper la fiscalité à la retraite */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Anticiper la fiscalité à la retraite
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-6">
              La fiscalité des pensions évolue régulièrement.
            </h3>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Le taux de <strong className="text-[#253F60]">CSG retraite 2025</strong> et les règles de taxation des revenus complémentaires influent sur le pouvoir d'achat des retraités.
            </p>
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
              <p className="text-white text-base sm:text-lg font-inter leading-relaxed">
                Chez <strong className="text-[#B99066]">Azalée Patrimoine</strong>, nous intégrons ces paramètres dans votre projection afin de déterminer votre <strong>montant retraite minimum net d'impôts et de prélèvements sociaux.</strong> Pour en savoir plus sur l'<Link href="/fiscalite" className="text-[#B99066] hover:text-[#D4A574] underline">optimisation fiscale</Link>, consultez notre section dédiée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: L'approche Azalée Patrimoine */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            L'approche Azalée Patrimoine
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Notre cabinet vous accompagne dans une approche globale :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Lecture et analyse de votre <strong className="text-[#253F60]">relevé de carrière retraite,</strong>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Calcul personnalisé de votre <strong className="text-[#253F60]">taux de remplacement,</strong>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Optimisation de vos <strong className="text-[#253F60]">indemnités et primes de départ retraite,</strong>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Mise en place d'un <strong className="text-[#253F60]">plan d'épargne retraite sur mesure,</strong>
                </span>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Intégration de votre fiscalité actuelle et future (CSG, TMI, revenus différés).
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-8 text-white text-center">
              <p className="text-xl sm:text-2xl font-cairo font-bold italic">
                🌸 Notre mission : transformer vos revenus en patrimoine et votre patrimoine en liberté.
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
              Simulez votre retraite avec un expert
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              📄 Vous souhaitez connaître votre <strong className="text-[#253F60]">pension estimée, le manque à gagner à compenser ou le montant optimal à verser sur votre PER ?</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
              >
                📅 Prenez rendez-vous avec un conseiller Azalée Patrimoine
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
