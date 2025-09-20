"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function BourseActionsCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "Bourse, Actions et Indices – Investissez sur les marchés financiers",
      description: "Découvrez les opportunités d'investissement en actions, obligations et indices boursiers. Nos experts Azalee Wealth vous accompagnent pour construire un portefeuille diversifié et performant sur les marchés financiers.",
      ctaText: "Demander une étude patrimoniale gratuite"
    },
    rightCard: {
      title: "Nos experts à votre service",
      services: [
        "Analyse de votre profil investisseur",
        "Conseil en sélection de titres",
        "Gestion de portefeuille personnalisée",
        "Suivi régulier et ajustements stratégiques"
      ]
    },
    essentiel: {
      title: "L'essentiel de la Bourse",
      blocks: [
        {
          title: "Investissement en actions",
          description: "Devenez actionnaire d'entreprises et participez à leur croissance et rentabilité."
        },
        {
          title: "Diversification",
          description: "Répartissez vos investissements sur différents secteurs et géographies."
        },
        {
          title: "Potentiel de performance",
          description: "Accédez à un potentiel de rendement supérieur aux placements traditionnels."
        }
      ]
    },
    pourquoiChoisir: {
      title: "Pourquoi investir en Bourse ?",
      reasons: [
        {
          number: "1",
          title: "Performance",
          description: "Potentiel de rendement supérieur aux placements traditionnels sur le long terme."
        },
        {
          number: "2",
          title: "Diversification",
          description: "Répartition des risques sur différents secteurs et marchés."
        },
        {
          number: "3",
          title: "Liquidité",
          description: "Possibilité de vendre vos titres rapidement selon vos besoins."
        },
        {
          number: "4",
          title: "Transparence",
          description: "Marchés réglementés avec une information transparente et continue."
        }
      ]
    },
    produits: {
      title: "Produits d'Investissement",
      categories: [
        {
          title: "Actions",
          description: "Titres de propriété d'entreprises avec participation aux bénéfices.",
          features: [
            "Dividendes réguliers",
            "Plus-values potentielles",
            "Droits de vote",
            "Participation aux décisions"
          ]
        },
        {
          title: "Obligations",
          description: "Titres de créance avec intérêts fixes et remboursement à échéance.",
          features: [
            "Coupons fixes",
            "Capital garanti à échéance",
            "Risque de défaut",
            "Rendement prévisible"
          ]
        },
        {
          title: "Indices",
          description: "Paniers de titres représentatifs d'un marché ou d'un secteur.",
          features: [
            "Diversification automatique",
            "Réplication de marché",
            "Frais réduits",
            "Gestion passive"
          ]
        }
      ]
    },
    marches: {
      title: "Marchés Financiers",
      categories: [
        {
          title: "Marchés français",
          points: [
            "CAC 40 et SBF 120",
            "Actions de croissance",
            "Actions de valeur",
            "PME et ETI"
          ]
        },
        {
          title: "Marchés internationaux",
          points: [
            "S&P 500 américain",
            "Nikkei japonais",
            "DAX allemand",
            "Marchés émergents"
          ]
        },
        {
          title: "Secteurs d'activité",
          points: [
            "Technologie et innovation",
            "Énergie et environnement",
            "Santé et biotechnologie",
            "Finance et immobilier"
          ]
        }
      ]
    },
    risques: {
      title: "Gestion des Risques",
      points: [
        "• Diversification sectorielle et géographique",
        "• Gestion de la volatilité",
        "• Stop-loss et ordres de vente",
        "• Suivi régulier du portefeuille"
      ]
    },
    fiscalite: {
      title: "Fiscalité des Actions",
      points: [
        "• Plus-values : 30% (PFU) ou barème progressif selon choix",
        "• Dividendes : 30% (PFU) ou barème progressif selon choix",
        "• Déficits reportables sur 10 ans",
        "• Abattement de 1 000€ par an pour les actions françaises"
      ]
    },
    strategie: {
      title: "Stratégies d'Investissement",
      categories: [
        {
          title: "Investissement long terme",
          description: "Stratégie de buy and hold pour profiter de la croissance des entreprises."
        },
        {
          title: "Investissement en dividendes",
          description: "Focus sur les actions à fort rendement pour générer des revenus réguliers."
        },
        {
          title: "Investissement en croissance",
          description: "Sélection d'entreprises à fort potentiel de développement."
        }
      ]
    },
    accompagnement: {
      title: "Notre Accompagnement Personnalisé",
      steps: [
        {
          icon: "✓",
          title: "Diagnostic",
          description: "Analyse de votre profil investisseur et de vos objectifs"
        },
        {
          icon: "✓",
          title: "Stratégie",
          description: "Élaboration d'une stratégie d'investissement adaptée à votre profil"
        },
        {
          icon: "✓",
          title: "Sélection",
          description: "Sélection des titres et construction du portefeuille"
        },
        {
          icon: "✓",
          title: "Suivi",
          description: "Suivi régulier et ajustements selon l'évolution des marchés"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      questions: [
        {
          question: "Quel est le montant minimum pour investir en bourse ?",
          answer: "Vous pouvez commencer avec des montants modestes grâce aux PEA et comptes titres. Certains ETF permettent d'investir à partir de 50€."
        },
        {
          question: "Quels sont les risques de la bourse ?",
          answer: "Les principaux risques sont la volatilité des marchés, le risque de perte en capital et le risque de liquidité. La diversification permet de les limiter."
        },
        {
          question: "Combien de temps faut-il investir ?",
          answer: "L'investissement en bourse est recommandé sur le long terme (5-10 ans minimum) pour lisser la volatilité et optimiser les performances."
        },
        {
          question: "Puis-je perdre tout mon capital ?",
          answer: "En théorie oui, mais la diversification et la sélection rigoureuse des titres permettent de limiter considérablement ce risque."
        }
      ]
    },
    cta: {
      title: "Prêt à investir sur les marchés financiers ?",
      description: "Nos experts Azalee Wealth vous accompagnent pour construire un portefeuille d'actions et d'obligations adapté à vos objectifs.",
      primaryButton: "Demander une étude gratuite",
      secondaryButton: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('bourseActionsPageContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = () => {
    localStorage.setItem('bourseActionsPageContent', JSON.stringify(content));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'bourse-actions' } }));
    setIsEditing(false);
  };

  const renderEditableField = (path, label, type = 'text', multiline = false) => {
    const keys = path.split('.');
    const value = keys.reduce((obj, key) => obj?.[key], content);
    
    const updateValue = (newValue) => {
      const newContent = { ...content };
      let current = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = newValue;
      setContent(newContent);
    };

    if (type === 'array') {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
          {value.map((item, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newArray = [...value];
                  newArray[index] = e.target.value;
                  updateValue(newArray);
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <button
            onClick={() => updateValue([...value, ''])}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            + Ajouter un élément
          </button>
        </div>
      );
    }

    if (multiline) {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
          <textarea
            value={value}
            onChange={(e) => updateValue(e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      );
    }

    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => updateValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">CMS - Bourse, Actions et Indices</h1>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={saveContent}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                  >
                    Annuler
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Modifier
                </button>
              )}
            </div>
          </div>

          <div className="mb-6">
            <Link href="/cms/placements" className="text-blue-600 hover:text-blue-800">
              ← Retour aux Placements
            </Link>
          </div>

          {isEditing ? (
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Hero</h2>
                {renderEditableField('hero.title', 'Titre principal')}
                {renderEditableField('hero.description', 'Description', 'text', true)}
                {renderEditableField('hero.ctaText', 'Texte du bouton CTA')}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Carte de droite</h2>
                {renderEditableField('rightCard.title', 'Titre de la carte')}
                {renderEditableField('rightCard.services', 'Services (un par ligne)', 'array')}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">L\'essentiel</h2>
                {renderEditableField('essentiel.title', 'Titre de la section')}
                {content.essentiel.blocks.map((block, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Bloc {index + 1}</h3>
                    <input
                      type="text"
                      value={block.title}
                      onChange={(e) => {
                        const newBlocks = [...content.essentiel.blocks];
                        newBlocks[index].title = e.target.value;
                        setContent({
                          ...content,
                          essentiel: { ...content.essentiel, blocks: newBlocks }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre du bloc"
                    />
                    <textarea
                      value={block.description}
                      onChange={(e) => {
                        const newBlocks = [...content.essentiel.blocks];
                        newBlocks[index].description = e.target.value;
                        setContent({
                          ...content,
                          essentiel: { ...content.essentiel, blocks: newBlocks }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Description du bloc"
                    />
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Pourquoi choisir</h2>
                {renderEditableField('pourquoiChoisir.title', 'Titre de la section')}
                {content.pourquoiChoisir.reasons.map((reason, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Raison {index + 1}</h3>
                    <input
                      type="text"
                      value={reason.title}
                      onChange={(e) => {
                        const newReasons = [...content.pourquoiChoisir.reasons];
                        newReasons[index].title = e.target.value;
                        setContent({
                          ...content,
                          pourquoiChoisir: { ...content.pourquoiChoisir, reasons: newReasons }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre de la raison"
                    />
                    <textarea
                      value={reason.description}
                      onChange={(e) => {
                        const newReasons = [...content.pourquoiChoisir.reasons];
                        newReasons[index].description = e.target.value;
                        setContent({
                          ...content,
                          pourquoiChoisir: { ...content.pourquoiChoisir, reasons: newReasons }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Description de la raison"
                    />
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Produits d'Investissement</h2>
                {renderEditableField('produits.title', 'Titre de la section')}
                {content.produits.categories.map((category, index) => (
                  <div key={index} className="border-l-4 border-purple-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Catégorie {index + 1}</h3>
                    <input
                      type="text"
                      value={category.title}
                      onChange={(e) => {
                        const newCategories = [...content.produits.categories];
                        newCategories[index].title = e.target.value;
                        setContent({
                          ...content,
                          produits: { ...content.produits, categories: newCategories }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre de la catégorie"
                    />
                    <textarea
                      value={category.description}
                      onChange={(e) => {
                        const newCategories = [...content.produits.categories];
                        newCategories[index].description = e.target.value;
                        setContent({
                          ...content,
                          produits: { ...content.produits, categories: newCategories }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Description de la catégorie"
                    />
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Caractéristiques</label>
                      {category.features.map((feature, featureIndex) => (
                        <input
                          key={featureIndex}
                          type="text"
                          value={feature}
                          onChange={(e) => {
                            const newCategories = [...content.produits.categories];
                            newCategories[index].features[featureIndex] = e.target.value;
                            setContent({
                              ...content,
                              produits: { ...content.produits, categories: newCategories }
                            });
                          }}
                          className="w-full p-2 border border-gray-300 rounded-md mb-2"
                          placeholder="Caractéristique"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Marchés Financiers</h2>
                {renderEditableField('marches.title', 'Titre de la section')}
                {content.marches.categories.map((category, index) => (
                  <div key={index} className="border-l-4 border-orange-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Catégorie {index + 1}</h3>
                    <input
                      type="text"
                      value={category.title}
                      onChange={(e) => {
                        const newCategories = [...content.marches.categories];
                        newCategories[index].title = e.target.value;
                        setContent({
                          ...content,
                          marches: { ...content.marches, categories: newCategories }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre de la catégorie"
                    />
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Points</label>
                      {category.points.map((point, pointIndex) => (
                        <input
                          key={pointIndex}
                          type="text"
                          value={point}
                          onChange={(e) => {
                            const newCategories = [...content.marches.categories];
                            newCategories[index].points[pointIndex] = e.target.value;
                            setContent({
                              ...content,
                              marches: { ...content.marches, categories: newCategories }
                            });
                          }}
                          className="w-full p-2 border border-gray-300 rounded-md mb-2"
                          placeholder="Point"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Gestion des Risques</h2>
                {renderEditableField('risques.title', 'Titre de la section')}
                {renderEditableField('risques.points', 'Points de gestion des risques (un par ligne)', 'array')}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Fiscalité des Actions</h2>
                {renderEditableField('fiscalite.title', 'Titre de la section')}
                {renderEditableField('fiscalite.points', 'Points fiscaux (un par ligne)', 'array')}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Stratégies d'Investissement</h2>
                {renderEditableField('strategie.title', 'Titre de la section')}
                {content.strategie.categories.map((category, index) => (
                  <div key={index} className="border-l-4 border-red-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Stratégie {index + 1}</h3>
                    <input
                      type="text"
                      value={category.title}
                      onChange={(e) => {
                        const newCategories = [...content.strategie.categories];
                        newCategories[index].title = e.target.value;
                        setContent({
                          ...content,
                          strategie: { ...content.strategie, categories: newCategories }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre de la stratégie"
                    />
                    <textarea
                      value={category.description}
                      onChange={(e) => {
                        const newCategories = [...content.strategie.categories];
                        newCategories[index].description = e.target.value;
                        setContent({
                          ...content,
                          strategie: { ...content.strategie, categories: newCategories }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Description de la stratégie"
                    />
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Accompagnement</h2>
                {renderEditableField('accompagnement.title', 'Titre de la section')}
                {content.accompagnement.steps.map((step, index) => (
                  <div key={index} className="border-l-4 border-yellow-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Étape {index + 1}</h3>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const newSteps = [...content.accompagnement.steps];
                        newSteps[index].title = e.target.value;
                        setContent({
                          ...content,
                          accompagnement: { ...content.accompagnement, steps: newSteps }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Titre de l'étape"
                    />
                    <textarea
                      value={step.description}
                      onChange={(e) => {
                        const newSteps = [...content.accompagnement.steps];
                        newSteps[index].description = e.target.value;
                        setContent({
                          ...content,
                          accompagnement: { ...content.accompagnement, steps: newSteps }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Description de l'étape"
                    />
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h2>
                {renderEditableField('faq.title', 'Titre de la section')}
                {content.faq.questions.map((faqItem, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4 mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Question {index + 1}</h3>
                    <input
                      type="text"
                      value={faqItem.question}
                      onChange={(e) => {
                        const newQuestions = [...content.faq.questions];
                        newQuestions[index].question = e.target.value;
                        setContent({
                          ...content,
                          faq: { ...content.faq, questions: newQuestions }
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md mb-2"
                      placeholder="Question"
                    />
                    <textarea
                      value={faqItem.answer}
                      onChange={(e) => {
                        const newQuestions = [...content.faq.questions];
                        newQuestions[index].answer = e.target.value;
                        setContent({
                          ...content,
                          faq: { ...content.faq, questions: newQuestions }
                        });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Réponse"
                    />
                  </div>
                ))}
              </div>

              <div className="pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Call-to-Action final</h2>
                {renderEditableField('cta.title', 'Titre du CTA')}
                {renderEditableField('cta.description', 'Description du CTA', 'text', true)}
                {renderEditableField('cta.primaryButton', 'Bouton principal')}
                {renderEditableField('cta.secondaryButton', 'Bouton secondaire')}
              </div>
            </div>
          ) : (
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Aperçu du contenu</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p><strong>Hero Title:</strong> {content.hero.title}</p>
                <p><strong>Hero Description:</strong> {content.hero.description.substring(0, 100)}...</p>
                <p><strong>Right Card Title:</strong> {content.rightCard.title}</p>
                <p><strong>Essentiel Title:</strong> {content.essentiel.title}</p>
                <p><strong>Pourquoi Choisir Title:</strong> {content.pourquoiChoisir.title}</p>
                <p><strong>Produits Title:</strong> {content.produits.title}</p>
                <p><strong>Marchés Title:</strong> {content.marches.title}</p>
                <p><strong>Risques Title:</strong> {content.risques.title}</p>
                <p><strong>Fiscalité Title:</strong> {content.fiscalite.title}</p>
                <p><strong>Stratégie Title:</strong> {content.strategie.title}</p>
                <p><strong>Accompagnement Title:</strong> {content.accompagnement.title}</p>
                <p><strong>FAQ Title:</strong> {content.faq.title}</p>
                <p><strong>CTA Title:</strong> {content.cta.title}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
