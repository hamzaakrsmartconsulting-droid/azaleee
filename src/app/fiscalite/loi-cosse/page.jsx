"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function LoiCossePage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/fiscalite/loi-cosse&type=cms`);
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
      title: "Dispositif Cosse",
      subtitle: "Inciter à louer à loyers modérés via un conventionnement avec l'ANAH",
      description: "Le dispositif Cosse offre une déduction spécifique sur les revenus fonciers (jusqu'à 85%). Un outil utile pour lisser l'imposition foncière d'un parc existant, nécessitant un calcul précis et une convention avec l'ANAH."
    },
    overview: {
      title: "Présentation du dispositif Cosse",
      description: "Le dispositif Cosse est un dispositif fiscal qui permet de réduire l'imposition sur les revenus fonciers en louant à loyers modérés via un conventionnement avec l'ANAH. Il vise à inciter les propriétaires à proposer des logements abordables.",
      keyPoints: [
        "Déduction spécifique jusqu'à 85%",
        "Sur les revenus fonciers",
        "Convention avec l'ANAH obligatoire",
        "Secteur intermédiaire, social ou très social"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Déduction spécifique",
          description: "Déduction spécifique sur les revenus fonciers jusqu'à 85%",
          amount: "Jusqu'à 85%",
          icon: "💰"
        },
        {
          title: "Convention ANAH",
          description: "Convention signée avec l'ANAH pour secteur social",
          amount: "Obligatoire",
          icon: "📋"
        },
        {
          title: "Loyers modérés",
          description: "Location à loyers plafonnés selon secteur",
          amount: "Encadré",
          icon: "🏠"
        },
        {
          title: "Lissage fiscal",
          description: "Utile pour lisser l'imposition foncière d'un parc existant",
          amount: "Optimisation",
          icon: "📈"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      conditions: [
        {
          category: "Convention",
          items: [
            "Convention signée avec l'ANAH",
            "Secteur intermédiaire, social ou très social",
            "Respect des conditions d'engagement",
            "Maintien de la convention pendant la durée"
          ]
        },
        {
          category: "Location",
          items: [
            "Location nue obligatoire",
            "Respect des plafonds de loyers",
            "Respect des plafonds de ressources des locataires",
            "Engagement de 6 ou 9 ans"
          ]
        },
        {
          category: "Calcul",
          items: [
            "Calcul précis nécessaire",
            "Déduction spécifique sur revenus fonciers",
            "Abattement jusqu'à 85%",
            "Optimisation fiscale patrimoniale"
          ]
        }
      ]
    },
    works: {
      title: "Secteurs ANAH éligibles",
      works: [
        {
          name: "Secteur intermédiaire",
          description: "Logements à loyer intermédiaire",
          avantages: "Déduction modérée",
          icon: "🏠"
        },
        {
          name: "Secteur social",
          description: "Logements sociaux classiques",
          avantages: "Déduction importante",
          icon: "🏘️"
        },
        {
          name: "Secteur très social",
          description: "Logements très sociaux",
          avantages: "Déduction maximale",
          icon: "🏚️"
        },
        {
          name: "Convention ANAH",
          description: "Conventionnement obligatoire",
          avantages: "Cadre légal sécurisé",
          icon: "📋"
        }
      ]
    },
    calculation: {
      title: "Calcul de la déduction fiscale",
      examples: [
        {
          travaux: "Revenus fonciers 12 000 €",
          reduction: "Abattement 70%",
          net: "Base fiscale 3 600 €",
          description: "Cas pratique Azalée"
        },
        {
          travaux: "Revenus fonciers 8 000 €",
          reduction: "Abattement 70%",
          net: "Base fiscale 2 400 €",
          description: "Exemple modéré"
        },
        {
          travaux: "Revenus fonciers 15 000 €",
          reduction: "Abattement 70%",
          net: "Base fiscale 4 500 €",
          description: "Exemple élevé"
        }
      ],
      cas_pratique: {
        titre: "Cas pratique Azalée Patrimoine",
        description: "Revenus fonciers 12 000€/an avec abattement de 70% = base fiscale 3 600€",
        details: [
          "Revenus fonciers bruts : 12 000€/an",
          "Abattement Cosse : 70%",
          "Base fiscale : 3 600€",
          "Utile pour lisser l'imposition foncière d'un parc existant"
        ]
      }
    },
    steps: {
      title: "Étapes d'investissement",
      steps: [
        {
          step: 1,
          title: "Diagnostic énergétique",
          description: "Réalisation d'un audit énergétique de votre logement"
        },
        {
          step: 2,
          title: "Planification des travaux",
          description: "Définition des travaux prioritaires et devis"
        },
        {
          step: 3,
          title: "Choix des professionnels",
          description: "Sélection d'artisans certifiés RGE"
        },
        {
          step: 4,
          title: "Réalisation des travaux",
          description: "Exécution des travaux de rénovation"
        },
        {
          step: 5,
          title: "Contrôle qualité",
          description: "Vérification de la conformité des travaux"
        },
        {
          step: 6,
          title: "Déclaration fiscale",
          description: "Déclaration de la réduction d'impôt"
        }
      ]
    },
    risks: {
      title: "Points d'attention",
      risks: [
        "Règles complexes",
        "Rentabilité nette modeste",
        "Convention ANAH obligatoire",
        "Respect des plafonds de loyers et ressources",
        "Engagement de 6 ou 9 ans",
        "Calcul précis nécessaire"
      ]
    },
    tips: {
      title: "Recommandation Azalée Patrimoine",
      tips: [
        "Utile pour lisser l'imposition foncière d'un parc existant",
        "Nécessite un calcul précis",
        "Convention ANAH obligatoire",
        "Respect des plafonds de loyers et ressources",
        "Engagement de 6 ou 9 ans selon secteur",
        "Optimisation fiscale patrimoniale"
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
            <p className="text-gray-600 text-lg">Chargement de la loi Cosse...</p>
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
              Transition écologique
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
                C
              </div>
              <p className="text-[#112033] text-sm font-medium">Cosse</p>
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
              { key: 'works', label: 'Travaux', icon: '🔨' },
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
                      <div className="text-2xl mb-3">🌱</div>
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

            {/* Works Tab */}
            {activeTab === 'works' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.works.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.works.works.map((work, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{work.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{work.name}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{work.avantages}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{work.description}</p>
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
                  <p className="text-[#686868] text-sm mb-6">Déduction spécifique sur les revenus fonciers jusqu'à 85%</p>
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
              Optimiser votre fiscalité avec le dispositif Cosse ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent pour lisser l'imposition foncière de votre parc existant avec le dispositif Cosse
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



