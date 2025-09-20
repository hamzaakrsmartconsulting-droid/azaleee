"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function MonumentHistoriquePage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/fiscalite/monument-historique&type=cms`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.content) {
            setCmsContent(JSON.parse(data.content.content));
          }
        }
      } catch (error) {
        console.log('No CMS content found, using defaults');
      } finally {
        setIsLoading(false);
      }
    };

    loadCmsContent();
  }, []);

  // Default content if CMS content is not available
  const content = cmsContent || {
    hero: {
      title: "Monument Historique",
      subtitle: "Conserver le patrimoine classé ou inscrit à l'inventaire",
      description: "Les Monuments Historiques offrent une déduction des dépenses de travaux (100% imputables sur le revenu global). Un outil d'excellence pour hauts revenus amoureux de la pierre et acceptant une durée d'immobilisation longue."
    },
    overview: {
      title: "Présentation des monuments historiques",
      description: "Les monuments historiques sont des biens immobiliers classés ou inscrits qui bénéficient d'une protection particulière et d'avantages fiscaux pour leur préservation. Ils visent à conserver le patrimoine classé ou inscrit à l'inventaire.",
      keyPoints: [
        "Déduction des dépenses de travaux (100%)",
        "Immeuble classé ou inscrit",
        "Conservation du bien pendant 15 ans",
        "Location possible mais non obligatoire"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Déduction travaux",
          description: "Déduction des dépenses de travaux (100% imputables sur le revenu global)",
          amount: "100%",
          icon: "💰"
        },
        {
          title: "Conservation patrimoine",
          description: "Contribution à la conservation du patrimoine historique",
          amount: "Culturel",
          icon: "🏛️"
        },
        {
          title: "Flexibilité usage",
          description: "Location possible mais non obligatoire",
          amount: "Flexibilité",
          icon: "🏠"
        },
        {
          title: "Plus-value patrimoniale",
          description: "Plus-value potentielle sur monument historique",
          amount: "Patrimoine",
          icon: "📈"
        }
      ]
    },
    types: {
      title: "Types de monuments historiques",
      types: [
        {
          name: "Monuments classés",
          description: "Bâtiments d'intérêt national",
          avantages: "Protection maximale",
          icon: "🏛️"
        },
        {
          name: "Monuments inscrits",
          description: "Bâtiments d'intérêt régional",
          avantages: "Protection importante",
          icon: "🏘️"
        },
        {
          name: "Secteurs sauvegardés",
          description: "Quartiers historiques protégés",
          avantages: "Rénovation urbaine",
          icon: "🏙️"
        },
        {
          name: "ZPPAUP",
          description: "Zones de protection du patrimoine",
          avantages: "Protection locale",
          icon: "🛡️"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      conditions: [
        {
          category: "Monument",
          items: [
            "Immeuble classé ou inscrit",
            "Travaux validés par les ABF",
            "Respect des règles de protection",
            "Autorisation préalable pour les travaux"
          ]
        },
        {
          category: "Propriétaire",
          items: [
            "Personne physique ou morale",
            "Conservation du bien pendant 15 ans",
            "Respect des obligations d'entretien",
            "Ouverture au public possible"
          ]
        },
        {
          category: "Usage",
          items: [
            "Location possible mais non obligatoire",
            "Respect des conditions d'usage",
            "Maintien de l'activité",
            "Pas de cession avant terme"
          ]
        }
      ]
    },
    investment: {
      title: "Types d'investissement",
      investment: [
        {
          name: "Résidence principale",
          description: "Habitation personnelle dans un monument historique",
          avantages: "Exonération ISF/IFI",
          icon: "🏠"
        },
        {
          name: "Résidence locative",
          description: "Location d'un monument historique",
          avantages: "Revenus locatifs + avantages fiscaux",
          icon: "🏘️"
        },
        {
          name: "Usage commercial",
          description: "Exploitation commerciale du monument",
          avantages: "Rentabilité + patrimoine",
          icon: "🏢"
        },
        {
          name: "Usage culturel",
          description: "Ouverture au public et activités culturelles",
          avantages: "Impact social + avantages fiscaux",
          icon: "🎭"
        }
      ]
    },
    calculation: {
      title: "Calcul des avantages fiscaux",
      examples: [
        {
          travaux: "200 000 €",
          reduction: "200 000 €",
          net: "0 €",
          description: "Effacement total de l'impôt",
          taux: "100%"
        },
        {
          travaux: "150 000 €",
          reduction: "150 000 €",
          net: "0 €",
          description: "Déduction complète",
          taux: "100%"
        },
        {
          travaux: "300 000 €",
          reduction: "300 000 €",
          net: "0 €",
          description: "Déduction sur plusieurs années",
          taux: "100%"
        }
      ],
      cas_pratique: {
        titre: "Cas pratique Azalée Patrimoine",
        description: "Travaux de 200 000€ imputés sur un revenu de 150 000€ : effacement de l'impôt sur 2 ans",
        details: [
          "Déduction totale des travaux : 200 000€",
          "Effacement de l'impôt sur le revenu",
          "Répartition sur plusieurs années si nécessaire",
          "Outil d'excellence pour hauts revenus"
        ]
      }
    },
    steps: {
      title: "Étapes d'investissement",
      steps: [
        {
          step: 1,
          title: "Recherche du monument",
          description: "Identification d'un monument historique éligible"
        },
        {
          step: 2,
          title: "Étude de faisabilité",
          description: "Analyse technique et financière du projet"
        },
        {
          step: 3,
          title: "Autorisation ABF",
          description: "Demande d'autorisation auprès de l'Architecte des Bâtiments de France"
        },
        {
          step: 4,
          title: "Signature du contrat",
          description: "Signature du contrat d'achat"
        },
        {
          step: 5,
          title: "Planification des travaux",
          description: "Définition des travaux et choix des artisans"
        },
        {
          step: 6,
          title: "Réalisation des travaux",
          description: "Exécution des travaux sous contrôle ABF"
        },
        {
          step: 7,
          title: "Mise en valeur",
          description: "Exploitation du monument restauré"
        }
      ]
    },
    risks: {
      title: "Points d'attention",
      risks: [
        "Très long terme : conservation du bien pendant 15 ans",
        "Coût de rénovation : travaux souvent très coûteux",
        "Fiscalité très favorable mais à forte contrepartie",
        "Contraintes architecturales strictes",
        "Délais administratifs importants",
        "Obligations d'entretien permanentes"
      ]
    },
    tips: {
      title: "Recommandation Azalée Patrimoine",
      tips: [
        "Outil d'excellence pour hauts revenus amoureux de la pierre",
        "Acceptant une durée d'immobilisation longue",
        "Choisissez des monuments dans des zones touristiques",
        "Vérifiez l'état du monument avant achat",
        "Prévoyez une marge importante sur le budget travaux",
        "Travaillez avec des artisans spécialisés",
        "Consultez un expert en monuments historiques"
      ]
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#4EBBBD] border-t-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Chargement des monuments historiques...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Patrimoine français
            </span>
          </div>
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            {content.hero.title}
          </h1>
          <p className="max-w-4xl mx-auto text-[#686868] text-base sm:text-lg leading-relaxed mb-8">
            {content.hero.description}
          </p>
          
          {/* Law Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                🏛️
              </div>
              <p className="text-[#112033] text-sm font-medium">Monument Historique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'overview', label: 'Présentation', icon: '📋' },
              { key: 'benefits', label: 'Avantages', icon: '💰' },
              { key: 'types', label: 'Types', icon: '🏛️' },
              { key: 'conditions', label: 'Conditions', icon: '📝' },
              { key: 'investment', label: 'Investissement', icon: '🏠' },
              { key: 'calculation', label: 'Calcul', icon: '🧮' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#4EBBBD] text-white shadow-lg"
                    : "bg-gray-100 text-[#686868] hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            {/* Tab Content */}
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.overview.title}
                  </h2>
                  <p className="text-[#686868] text-lg max-w-3xl mx-auto">
                    {content.overview.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.overview.keyPoints.map((point, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6 text-center">
                      <div className="text-2xl mb-3">🏛️</div>
                      <p className="font-semibold text-[#112033]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.benefits.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.benefits.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{benefit.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{benefit.title}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{benefit.amount}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Types Tab */}
            {activeTab === 'types' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.types.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.types.types.map((type, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{type.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{type.name}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{type.avantages}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions Tab */}
            {activeTab === 'conditions' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.conditions.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.conditions.conditions.map((condition, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#FFEFD5] to-[#FFE4B5] rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-4 text-center">
                        📋 {condition.category}
                      </h3>
                      <ul className="space-y-2">
                        {condition.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#B99066] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-[#112033] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Investment Tab */}
            {activeTab === 'investment' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.investment.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.investment.investment.map((invest, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{invest.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{invest.name}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{invest.avantages}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{invest.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calculation Tab */}
            {activeTab === 'calculation' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.calculation.title}
                  </h2>
                </div>

                <div className="mb-8">
                  <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Exemples de calcul</h3>
                  <p className="text-[#686868] text-sm mb-6">Déduction des dépenses de travaux (100% imputables sur le revenu global)</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.calculation.examples.map((example, index) => (
                      <div key={index} className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{example.reduction}</div>
                        <div className="text-[#112033] text-sm font-medium">{example.travaux}</div>
                        <div className="text-[#686868] text-xs mt-2">{example.description}</div>
                        <div className="text-[#4EBBBD] text-xs font-semibold mt-1">({example.taux})</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cas pratique Azalée */}
                {content.calculation.cas_pratique && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4">💡 {content.calculation.cas_pratique.titre}</h3>
                    <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white">
                      <p className="text-sm font-semibold mb-3">{content.calculation.cas_pratique.description}</p>
                      <ul className="space-y-2">
                        {content.calculation.cas_pratique.details.map((detail, index) => (
                          <li key={index} className="text-sm opacity-90 flex items-start gap-2">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl font-semibold mb-4">
              {content.steps.title}
            </h2>
          </div>

          <div className="space-y-4">
            {content.steps.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#112033] mb-1">{step.title}</h3>
                  <p className="text-[#686868] text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks and Tips Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Risks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>⚠️</span> {content.risks.title}
              </h3>
              <ul className="space-y-2">
                {content.risks.risks.map((risk, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#B99066] rounded-full mt-2 flex-shrink-0"></span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>💡</span> {content.tips.title}
              </h3>
              <ul className="space-y-2">
                {content.tips.tips.map((tip, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              Investir dans le patrimoine historique ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent dans votre projet d'investissement patrimonial
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🎯 Demander un conseil
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                🧮 Calculer mes avantages
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



