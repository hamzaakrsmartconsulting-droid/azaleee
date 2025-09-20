"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function LoiMalrauxPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/fiscalite/loi-malraux&type=cms`);
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
      title: "Loi Malraux",
      subtitle: "Restaurer des biens immobiliers situés dans des secteurs historiques",
      description: "La loi Malraux offre une réduction d'impôt sur le montant des travaux engagés (22 à 30%). Un dispositif fiscal d'excellence pour investisseurs hauts revenus amateurs de pierre de caractère, avec une stratégie de conservation long terme."
    },
    overview: {
      title: "Présentation de la loi Malraux",
      description: "La loi Malraux est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans la rénovation de monuments historiques classés ou inscrits. Elle vise à restaurer des biens immobiliers situés dans des secteurs historiques.",
      keyPoints: [
        "Réduction d'impôt de 22 à 30%",
        "Sur le montant des travaux engagés",
        "Immeuble situé en SPR, PSMV ou QAD",
        "Travaux encadrés par architecte des Bâtiments de France"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "22 à 30% du montant des travaux engagés selon le secteur",
          amount: "22 à 30%",
          icon: "💰"
        },
        {
          title: "Patrimoine historique",
          description: "Contribution à la préservation du patrimoine français",
          amount: "Culturel",
          icon: "🏛️"
        },
        {
          title: "Revenus locatifs",
          description: "Génération de revenus locatifs après rénovation",
          amount: "Rendement",
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
    conditions: {
      title: "Conditions d'éligibilité",
      conditions: [
        {
          category: "Monument",
          items: [
            "Immeuble situé en SPR (Secteur Sauvegardé)",
            "Immeuble situé en PSMV (Plan de Sauvegarde et de Mise en Valeur)",
            "Immeuble situé en QAD (Quartier Ancien Dégradé)",
            "Monument classé ou inscrit aux monuments historiques"
          ]
        },
        {
          category: "Travaux",
          items: [
            "Travaux encadrés par architecte des Bâtiments de France",
            "Respect des règles architecturales",
            "Utilisation de matériaux traditionnels",
            "Suivi par architecte des Bâtiments de France"
          ]
        },
        {
          category: "Engagement",
          items: [
            "Location nue pendant 9 ans",
            "Respect des conditions d'usage",
            "Maintien de l'activité locative",
            "Pas de cession avant terme"
          ]
        }
      ]
    },
    types: {
      title: "Types de monuments éligibles",
      types: [
        {
          name: "SPR - Secteur Sauvegardé",
          description: "Secteur sauvegardé avec protection renforcée",
          avantages: "Réduction maximale",
          icon: "🏛️"
        },
        {
          name: "PSMV - Plan de Sauvegarde",
          description: "Plan de Sauvegarde et de Mise en Valeur",
          avantages: "Réduction importante",
          icon: "🏘️"
        },
        {
          name: "QAD - Quartier Ancien",
          description: "Quartier Ancien Dégradé",
          avantages: "Rénovation urbaine",
          icon: "🏙️"
        },
        {
          name: "Monuments historiques",
          description: "Monuments classés ou inscrits",
          avantages: "Protection patrimoniale",
          icon: "🛡️"
        }
      ]
    },
    plafonds: {
      title: "Plafonds applicables",
      plafonds: [
        {
          nom: "Travaux maximum",
          montant: "400 000 €",
          description: "Plafond de travaux sur 4 ans maximum"
        },
        {
          nom: "Durée maximale",
          montant: "4 ans",
          description: "Durée maximale pour réaliser les travaux"
        },
        {
          nom: "Engagement location",
          montant: "9 ans",
          description: "Durée minimale d'engagement de location"
        },
        {
          nom: "Réduction maximale",
          montant: "30%",
          description: "Taux de réduction d'impôt maximum"
        }
      ]
    },
    calculation: {
      title: "Calcul de la réduction d'impôt",
      examples: [
        {
          travaux: "100 000 €",
          reduction: "30 000 €",
          net: "70 000 €",
          description: "Rénovation secteur sauvegardé (30%)"
        },
        {
          travaux: "200 000 €",
          reduction: "60 000 €",
          net: "140 000 €",
          description: "Rénovation secteur sauvegardé (30%)"
        },
        {
          travaux: "300 000 €",
          reduction: "90 000 €",
          net: "210 000 €",
          description: "Rénovation secteur sauvegardé (30%)"
        }
      ],
      cas_pratique: {
        titre: "Cas pratique Azalée Patrimoine",
        description: "200 000€ de travaux en secteur sauvegardé = 60 000€ d'économie fiscale",
        details: [
          "Réduction d'impôt : 30% de 200 000€ = 60 000€",
          "Coût net des travaux : 140 000€",
          "Stratégie de conservation long terme",
          "Pour investisseurs hauts revenus amateurs de pierre de caractère"
        ]
      }
    },
    steps: {
      title: "Étapes d'investissement",
      steps: [
        {
          step: 1,
          title: "Étude de faisabilité",
          description: "Analyse de votre situation fiscale et capacité d'investissement"
        },
        {
          step: 2,
          title: "Recherche du monument",
          description: "Sélection d'un monument historique éligible"
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
          title: "Réalisation des travaux",
          description: "Exécution des travaux sous contrôle ABF"
        },
        {
          step: 6,
          title: "Mise en location",
          description: "Location du monument rénové"
        },
        {
          step: 7,
          title: "Déclaration fiscale",
          description: "Déclaration de la réduction d'impôt"
        }
      ]
    },
    risks: {
      title: "Points d'attention",
      risks: [
        "Délais de livraison",
        "Coût des travaux",
        "Location obligatoire",
        "Engagement de location de 9 ans minimum",
        "Contraintes architecturales strictes",
        "Délais administratifs importants",
        "Risque de vacance locative"
      ]
    },
    tips: {
      title: "Recommandation Azalée Patrimoine",
      tips: [
        "Pour investisseurs hauts revenus, amateurs de pierre de caractère",
        "Stratégie de conservation long terme",
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
            <p className="text-gray-600 text-lg">Chargement de la loi Malraux...</p>
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
              Patrimoine historique
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
                M
              </div>
              <p className="text-[#112033] text-sm font-medium">Malraux</p>
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
              { key: 'conditions', label: 'Conditions', icon: '📝' },
              { key: 'types', label: 'Types', icon: '🏛️' },
              { key: 'plafonds', label: 'Plafonds', icon: '📊' },
              { key: 'calculation', label: 'Calcul', icon: '🧮' },
              { key: 'steps', label: 'Étapes', icon: '📈' }
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

            {/* Plafonds Tab */}
            {activeTab === 'plafonds' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.plafonds.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.plafonds.plafonds.map((plafond, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-3">{plafond.nom}</h3>
                      <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white text-center mb-3">
                        <div className="text-2xl font-bold">{plafond.montant}</div>
                      </div>
                      <p className="text-[#686868] text-sm">{plafond.description}</p>
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
                  <p className="text-[#686868] text-sm mb-6">Réduction d'impôt de 22 à 30% du montant des travaux</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.calculation.examples.map((example, index) => (
                      <div key={index} className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{example.reduction}</div>
                        <div className="text-[#112033] text-sm font-medium">{example.travaux}</div>
                        <div className="text-[#686868] text-xs mt-2">{example.description}</div>
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

            {/* Steps Tab */}
            {activeTab === 'steps' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
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
            )}
          </div>
        </div>
      </section>

      {/* Risks and Tips Section */}
      <section className="py-12 bg-white">
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
              Investir dans le patrimoine avec la loi Malraux ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent dans votre projet de rénovation de monument historique
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🎯 Demander un conseil
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                🧮 Calculer ma réduction
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



