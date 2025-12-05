"use client";
import React from 'react';
import Link from 'next/link';
import Footer from '../../../components/common/Footer';

export default function InvestissementImmobilierRentablePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm font-inter">
            <Link href="/immobilier" className="text-[#6B7280] hover:text-[#253F60]">
              Immobilier
            </Link>
            <span className="text-[#6B7280]">/</span>
            <span className="text-[#253F60] font-semibold">Investissement immobilier rentable</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-8">
              Investissement immobilier rentable : comment bâtir une stratégie durable
            </h1>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-6">
                Pourquoi l'immobilier reste le pilier d'un patrimoine rentable
              </h2>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                En 2025, plus de <strong className="text-[#253F60] font-semibold">60 % des Français détiennent un bien immobilier</strong>. Malgré les variations du marché, l'immobilier demeure l'un des placements les plus appréciés, car il conjugue valeur refuge, rendement régulier et effet de levier.
              </p>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                Mais un investissement immobilier rentable ne se résume pas à acheter un appartement à louer. C'est une stratégie complète qui tient compte de la fiscalité, du financement, de la gestion et du temps.
              </p>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                Chez Azalée Patrimoine, nous accompagnons les investisseurs particuliers dans la construction d'un patrimoine immobilier équilibré, mêlant immobilier direct, pierre papier (SCPI) et produits hybrides.
              </p>
              <p className="text-lg font-inter text-[#253F60] font-semibold leading-relaxed">
                Notre objectif : transformer chaque projet en un levier de liberté financière.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-6">
                1. Qu'est-ce qu'un investissement immobilier rentable ?
              </h2>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                Un investissement immobilier rentable est avant tout <strong className="text-[#253F60] font-semibold">cohérent avec vos objectifs de vie</strong>.
              </p>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-6">
                Rentable ne signifie pas forcément "rendement maximal", mais plutôt rendement durable, fiscalement optimisé et adapté à votre profil.
              </p>
              
              <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md mb-6">
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                  Les trois piliers de la rentabilité :
                </h3>
                <ul className="space-y-3 text-base font-inter text-[#374151]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] font-bold">•</span>
                    <span><strong className="text-[#253F60] font-semibold">Le rendement brut</strong> : rapport entre les loyers perçus et le prix d'achat du bien.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] font-bold">•</span>
                    <span><strong className="text-[#253F60] font-semibold">Le rendement net</strong> : après déduction des charges, impôts et frais de gestion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] font-bold">•</span>
                    <span><strong className="text-[#253F60] font-semibold">La rentabilité globale</strong> : intègre l'effet de levier du crédit et la revalorisation du bien sur la durée.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[#E5E7EB] shadow-lg">
                <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-3">
                  💡 Exemple :
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed">
                  Un bien acheté 200 000 € générant 10 000 € de loyers bruts par an offre un rendement brut de 5 %. Après charges et impôts, la rentabilité nette peut descendre à 3,5 %, mais l'effet de levier du crédit peut la faire remonter au-delà de 6 % sur la durée.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-6">
                2. Les différentes formes d'investissement immobilier
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                    🏠 A. L'immobilier locatif classique
                  </h3>
                  <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                    Acheter un logement pour le louer reste la voie la plus directe pour générer des revenus. Les dispositifs comme le Pinel, le LMNP (Loueur Meublé Non Professionnel) ou le déficit foncier permettent d'alléger la fiscalité.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#F9FAFB] rounded-lg p-4">
                      <h4 className="font-cairo font-bold text-[#253F60] mb-2">Avantages :</h4>
                      <ul className="space-y-1 text-sm font-inter text-[#374151]">
                        <li>• Patrimoine tangible et transmissible</li>
                        <li>• Effet de levier du crédit</li>
                        <li>• Valorisation du bien à long terme</li>
                      </ul>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-4">
                      <h4 className="font-cairo font-bold text-[#253F60] mb-2">Inconvénients :</h4>
                      <ul className="space-y-1 text-sm font-inter text-[#374151]">
                        <li>• Gestion locative et charges</li>
                        <li>• Vacance possible</li>
                        <li>• Fiscalité parfois lourde</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                    🧱 B. Les SCPI : la pierre sans les contraintes
                  </h3>
                  <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                    Les Sociétés Civiles de Placement Immobilier (SCPI) permettent d'investir dans un portefeuille d'immeubles (bureaux, commerces, santé, logistique) sans gérer soi-même la location. C'est un investissement immobilier collectif, accessible dès quelques centaines d'euros.
                  </p>
                  <div className="bg-gradient-to-r from-[#253F60] to-[#2d4a6b] rounded-xl p-6 text-white">
                    <h4 className="font-cairo font-bold mb-3">Atouts majeurs :</h4>
                    <ul className="space-y-2 text-base font-inter">
                      <li>• Rendement moyen de 4 à 6 % brut par an</li>
                      <li>• Revenus trimestriels réguliers</li>
                      <li>• Gestion déléguée à des professionnels</li>
                      <li>• Diversification sectorielle et géographique</li>
                    </ul>
                    <p className="mt-4 text-sm font-inter text-white/90">
                      Exemple : Transition Europe, Comète ou Sofidynamic figurent parmi les SCPI les plus performantes et transparentes.
                    </p>
                    <p className="mt-2 text-sm font-inter text-[#B99066] font-semibold">
                      👉 Idéal pour les épargnants souhaitant un investissement immobilier rentable et passif.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                    🏦 C. L'immobilier via l'assurance vie ou le contrat de capitalisation
                  </h3>
                  <p className="text-lg font-inter text-[#374151] leading-relaxed">
                    Les SCPI peuvent être logées dans un contrat d'assurance vie. Avantage : la fiscalité des revenus est allégée (flat tax de 30 % contre TMI + 17,2 % en direct). Ce montage permet d'obtenir une rentabilité nette supérieure à long terme, tout en restant liquide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                    🌍 D. L'immobilier d'entreprise et les immeubles de rapport
                  </h3>
                  <p className="text-lg font-inter text-[#374151] leading-relaxed">
                    Pour les investisseurs plus aguerris, les immeubles de rapport et locaux professionnels offrent des rendements bruts élevés (6 à 9 %). En contrepartie, ils nécessitent une analyse patrimoniale rigoureuse et une stratégie juridique adaptée (SCI, IS, démembrement).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-6">
                3. Le rôle du crédit immobilier dans la rentabilité à long terme
              </h2>
              <p className="text-lg font-inter text-[#374151] leading-relaxed mb-6">
                L'un des grands avantages de l'immobilier est de pouvoir utiliser l'argent de la banque pour investir. Cet effet de levier multiplie la rentabilité réelle, surtout lorsque les taux restent inférieurs aux rendements locatifs.
              </p>
              
              <div className="bg-white rounded-xl p-6 border-2 border-[#E5E7EB] shadow-lg mb-6">
                <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-4">
                  Simulation :
                </h3>
                <ul className="space-y-2 text-base font-inter text-[#374151]">
                  <li>• Prix du bien : <strong className="text-[#253F60] font-semibold">200 000 €</strong></li>
                  <li>• Apport : <strong className="text-[#253F60] font-semibold">10 %</strong></li>
                  <li>• Taux d'intérêt : <strong className="text-[#253F60] font-semibold">4 % sur 20 ans</strong></li>
                  <li>• Rendement locatif : <strong className="text-[#253F60] font-semibold">5,5 %</strong></li>
                </ul>
                <p className="mt-4 text-base font-inter text-[#253F60] font-semibold">
                  ➡️ Après remboursement du capital, le patrimoine net acquis dépasse 70 000 €, avec un effort d'épargne mensuel limité.
                </p>
                <p className="mt-2 text-base font-inter text-[#374151] italic">
                  Autrement dit, le locataire finance une partie de votre patrimoine.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                <p className="text-lg font-inter text-[#374151] leading-relaxed italic">
                  💬 Chez Azalée Patrimoine, nous modélisons pour chaque client le rendement réel net d'impôts et d'intérêts, pour construire un projet rentable et sécurisé.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-6">
                4. Fiscalité comparée : immobilier direct vs SCPI
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB]">
                  <thead className="bg-gradient-to-r from-[#253F60] to-[#2d4a6b] text-white">
                    <tr>
                      <th className="p-4 text-left font-cairo font-bold">Type de placement</th>
                      <th className="p-4 text-center font-cairo font-bold">Fiscalité des revenus</th>
                      <th className="p-4 text-center font-cairo font-bold">Fiscalité à la revente</th>
                      <th className="p-4 text-center font-cairo font-bold">Points forts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB]">
                    <tr className="hover:bg-[#F9FAFB]">
                      <td className="p-4 font-inter font-semibold text-[#253F60]">Immobilier locatif</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Revenus fonciers (TMI + 17,2 %)</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Plus-value immobilière</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Effet de levier, maîtrise du bien</td>
                    </tr>
                    <tr className="hover:bg-[#F9FAFB] bg-[#F9FAFB]/50">
                      <td className="p-4 font-inter font-semibold text-[#253F60]">LMNP</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Amortissement du bien, abattements</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Plus-value sur prix amorti</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Fiscalité allégée</td>
                    </tr>
                    <tr className="hover:bg-[#F9FAFB]">
                      <td className="p-4 font-inter font-semibold text-[#253F60]">SCPI en direct</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Revenus fonciers (TMI + 17,2 %)</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Taxation des plus-values</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Simplicité et diversification</td>
                    </tr>
                    <tr className="hover:bg-[#F9FAFB] bg-[#F9FAFB]/50">
                      <td className="p-4 font-inter font-semibold text-[#253F60]">SCPI en assurance vie</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Flat tax (30 %)</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Exonération si rachat</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Rendement net optimisé</td>
                    </tr>
                    <tr className="hover:bg-[#F9FAFB]">
                      <td className="p-4 font-inter font-semibold text-[#253F60]">SCPI européennes</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Fiscalité du pays d'origine</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Souvent exonérées en France</td>
                      <td className="p-4 text-center font-inter text-[#374151]">Rendement net supérieur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                <p className="text-base font-inter text-[#374151] leading-relaxed">
                  💡 <strong className="text-[#253F60] font-semibold">Astuce Azalée</strong> : combiner plusieurs régimes (LMNP + SCPI assurance vie) permet de lisser la fiscalité globale tout en améliorant la rentabilité nette.
                </p>
              </div>
            </div>

            {/* Sections 5-8 */}
            <div className="mb-12 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-4">
                  5. Marché immobilier 2025 : entre correction et opportunités
                </h2>
                <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                  Après plusieurs années d'euphorie, le marché immobilier 2025 se rééquilibre : les prix reculent de 3 à 5 % dans les grandes villes, les loyers augmentent de 2 à 4 %, et les taux d'emprunt se stabilisent autour de 4 %. Résultat : la rentabilité nette d'un investissement immobilier reste attractive et supérieure à l'inflation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-4">
                  6. Immobilier responsable : la nouvelle dimension de la rentabilité
                </h2>
                <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                  Les Français attachent de plus en plus d'importance à l'impact environnemental de leurs placements. Les SCPI ESG et les rénovations énergétiques apportent une double rentabilité : financière et durable.
                </p>
                <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                  <p className="text-base font-inter text-[#374151] leading-relaxed italic">
                    "Chez Azalée Patrimoine, nous intégrons la durabilité dans chaque stratégie patrimoniale : rentabilité oui, mais jamais au détriment du sens."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-4">
                  7. Stratégie globale : combiner les leviers pour maximiser la rentabilité
                </h2>
                <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                  La rentabilité d'un placement immobilier dépend avant tout de la cohérence entre les leviers : Immobilier locatif pour créer du capital. SCPI pour la régularité du revenu. Assurance vie immobilière pour la fiscalité et la transmission. Crédit pour accélérer la constitution du patrimoine.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-[#E5E7EB] shadow-lg">
                  <p className="text-base font-inter text-[#253F60] font-semibold mb-2">👉 Exemple concret :</p>
                  <p className="text-base font-inter text-[#374151]">
                    Un couple investit 150 000 € en SCPI via assurance vie + 200 000 € en LMNP à crédit. Résultat : revenus réguliers, fiscalité optimisée et valorisation patrimoniale à long terme.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-cairo font-bold text-[#253F60] mb-4">
                  8. Comment sécuriser un investissement immobilier rentable
                </h2>
                <p className="text-lg font-inter text-[#374151] leading-relaxed mb-4">
                  La clé d'un projet réussi ne tient pas seulement au rendement annoncé, mais à la qualité de l'accompagnement : Analyse patrimoniale personnalisée, Étude de la fiscalité et du financement, Sélection des supports adaptés, Suivi annuel et reporting transparent.
                </p>
                <p className="text-lg font-inter text-[#253F60] font-semibold">
                  Chez Azalée Patrimoine, nous ne vendons pas de produits, nous construisons des stratégies durables.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12 bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Conclusion : bâtir un patrimoine qui vous ressemble
              </h2>
              <p className="text-lg font-inter leading-relaxed mb-4">
                L'investissement immobilier rentable n'est pas une course au rendement, mais un projet de vie structuré. En combinant diversification, fiscalité maîtrisée et accompagnement professionnel, chaque épargnant peut transformer son épargne en liberté financière.
              </p>
              <p className="text-lg font-inter leading-relaxed mb-6">
                Que vous souhaitiez investir dans une SCPI, un bien locatif ou une stratégie mixte, nos conseillers vous aident à trouver le bon équilibre entre rentabilité et sérénité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => alert('Téléchargement du guide')}
                  className="bg-[#B99066] hover:bg-[#A67A5A] text-white font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  👉 Téléchargez le guide "7 stratégies immobilières pour faire fructifier votre patrimoine"
                </button>
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-white text-[#253F60] hover:bg-gray-100 font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  👉 Prenez rendez-vous avec un conseiller Azalée Patrimoine
                </button>
              </div>
            </div>

            {/* Retour */}
            <div className="text-center">
              <Link 
                href="/immobilier"
                className="inline-flex items-center text-[#253F60] hover:text-[#B99066] font-inter font-semibold transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à la page Immobilier
              </Link>
            </div>
          </article>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

