"use client";
import React, { useState, useEffect } from "react";

export default function TMIPrelevementsSociauxCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "TMI et prélèvements sociaux",
      subtitle: "Comprenez votre Taux Marginal d'Imposition (TMI) et les prélèvements sociaux. Découvrez comment ils impactent vos revenus et vos investissements.",
      ctaPrimary: "Calculer mon TMI",
      ctaSecondary: "Télécharger le guide"
    },
    tmi: {
      title: "Taux Marginal d'Imposition (TMI)",
      description: "Le TMI est le taux d'imposition qui s'applique à votre dernière tranche de revenus imposables.",
      explanation: "Il détermine le taux d'imposition sur vos revenus supplémentaires et influence vos décisions d'investissement.",
      tranches: [
        {
          seuil: "Jusqu'à 11 294 €",
          taux: "0%",
          description: "Seuil de non-imposition"
        },
        {
          seuil: "De 11 295 € à 28 797 €",
          taux: "11%",
          description: "Première tranche imposable"
        },
        {
          seuil: "De 28 798 € à 82 341 €",
          taux: "30%",
          description: "Tranche intermédiaire"
        },
        {
          seuil: "De 82 342 € à 177 106 €",
          taux: "41%",
          description: "Tranche élevée"
        },
        {
          seuil: "Au-delà de 177 106 €",
          taux: "45%",
          description: "Tranche maximale"
        }
      ]
    },
    prelevementsSociaux: {
      title: "Prélèvements sociaux",
      description: "Les prélèvements sociaux s'ajoutent à l'impôt sur le revenu et s'appliquent sur les revenus du capital.",
      taux: "17,2%",
      composition: [
        "CSG (Contribution Sociale Généralisée) : 9,2%",
        "CRDS (Contribution au Remboursement de la Dette Sociale) : 0,5%",
        "Prélèvement de solidarité : 7,5%"
      ],
      application: [
        "Dividendes et intérêts",
        "Plus-values mobilières",
        "Revenus fonciers",
        "Certains revenus de placement"
      ]
    },
    impact: {
      title: "Impact sur vos revenus",
      description: "Le TMI et les prélèvements sociaux ont un impact direct sur la rentabilité de vos investissements.",
      examples: [
        {
          scenario: "Revenus de 50 000 €",
          tmi: "30%",
          prelevements: "17,2%",
          total: "47,2%",
          explication: "TMI 30% + prélèvements sociaux 17,2% = 47,2% de prélèvements totaux"
        },
        {
          scenario: "Revenus de 100 000 €",
          tmi: "41%",
          prelevements: "17,2%",
          total: "58,2%",
          explication: "TMI 41% + prélèvements sociaux 17,2% = 58,2% de prélèvements totaux"
        }
      ]
    },
    optimisation: {
      title: "Stratégies d'optimisation",
      strategies: [
        {
          title: "Utilisation du PEA",
          description: "Exonération totale des prélèvements sociaux",
          avantage: "Aucun prélèvement sur les plus-values et dividendes"
        },
        {
          title: "Assurance-vie",
          description: "Exonération partielle après 8 ans",
          avantage: "Fiscalité favorable à long terme"
        },
        {
          title: "Déficit foncier",
          description: "Imputation sur les autres revenus",
          avantage: "Réduction de l'assiette imposable"
        },
        {
          title: "Donations",
          description: "Réduction de l'assiette imposable",
          avantage: "Optimisation de la transmission"
        }
      ]
    },
    declaration: {
      title: "Déclaration et calcul",
      procedure: [
        "Calcul automatique par l'administration fiscale",
        "Déclaration de tous les revenus",
        "Application des tranches progressives",
        "Calcul des prélèvements sociaux"
      ],
      documents: [
        "Relevés de salaires",
        "Attestations de revenus",
        "Relevés bancaires",
        "Justificatifs de déductions"
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent dans la compréhension et l'optimisation de votre TMI et de vos prélèvements sociaux.",
      buttonText: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('tmi-prelevements-sociaux-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('tmi-prelevements-sociaux-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'tmi-prelevements-sociaux', content: newContent } }));
  };

  const renderEditableField = (section, field, label, type = "text") => {
    if (isEditing) {
      if (type === "textarea") {
        return (
          <textarea
            value={content[section][field]}
            onChange={(e) => {
              const newContent = { ...content };
              newContent[section][field] = e.target.value;
              saveContent(newContent);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            rows={3}
          />
        );
      }
      return (
        <input
          type={type}
          value={content[section][field]}
          onChange={(e) => {
            const newContent = { ...content };
            newContent[section][field] = e.target.value;
            saveContent(newContent);
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
        />
      );
    }
    return <span>{content[section][field]}</span>;
  };

  const renderEditableList = (section, field, label) => {
    if (isEditing) {
      return (
        <div className="space-y-2">
          {content[section][field].map((item, index) => (
            <input
              key={index}
              value={item}
              onChange={(e) => {
                const newContent = { ...content };
                newContent[section][field][index] = e.target.value;
                saveContent(newContent);
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          ))}
        </div>
      );
    }
    return (
      <div className="space-y-2">
        {content[section][field].map((item, index) => (
          <p key={index} className="text-[#686868]">• {item}</p>
        ))}
      </div>
    );
  };

  const renderEditableCard = (section, field, index, titleField, descriptionField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content[section][field][index][titleField]}
              onChange={(e) => {
                const newContent = { ...content };
                newContent[section][field][index][titleField] = e.target.value;
                saveContent(newContent);
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
            <textarea
              value={content[section][field][index][descriptionField]}
              onChange={(e) => {
                const newContent = { ...content };
                newContent[section][field][index][descriptionField] = e.target.value;
                saveContent(newContent);
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              rows={3}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-[#112033] text-lg font-semibold mb-3">{content[section][field][index][titleField]}</h3>
        <p className="text-[#686868]">{content[section][field][index][descriptionField]}</p>
      </div>
    );
  };

  const renderEditableTranche = (section, field, index, seuilField, tauxField, descriptionField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Seuil</label>
              <input
                value={content[section][field][index][seuilField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][seuilField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Taux</label>
              <input
                value={content[section][field][index][tauxField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][tauxField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              <input
                value={content[section][field][index][descriptionField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][descriptionField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[#112033] text-lg font-semibold">{content[section][field][index][seuilField]}</h3>
          <span className="text-2xl font-bold text-[#4EBBBD]">{content[section][field][index][tauxField]}</span>
        </div>
        <p className="text-[#686868]">{content[section][field][index][descriptionField]}</p>
      </div>
    );
  };

  const renderEditableImpact = (section, field, index, scenarioField, tmiField, prelevementsField, totalField, explicationField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Scénario</label>
              <input
                value={content[section][field][index][scenarioField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][scenarioField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">TMI</label>
              <input
                value={content[section][field][index][tmiField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][tmiField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Prélèvements sociaux</label>
              <input
                value={content[section][field][index][prelevementsField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][prelevementsField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Total</label>
              <input
                value={content[section][field][index][totalField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][totalField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Explication</label>
              <input
                value={content[section][field][index][explicationField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][explicationField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-[#112033] text-lg font-semibold mb-3">{content[section][field][index][scenarioField]}</h3>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <div className="text-center">
            <p className="text-sm text-[#686868]">TMI</p>
            <p className="text-xl font-bold text-[#4EBBBD]">{content[section][field][index][tmiField]}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[#686868]">Prélèvements</p>
            <p className="text-xl font-bold text-[#4EBBBD]">{content[section][field][index][prelevementsField]}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[#686868]">Total</p>
            <p className="text-2xl font-bold text-[#112033]">{content[section][field][index][totalField]}</p>
          </div>
        </div>
        <p className="text-[#686868] text-sm">{content[section][field][index][explicationField]}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#112033]">CMS - TMI et prélèvements sociaux</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isEditing
                  ? "bg-[#4EBBBD] text-white hover:bg-[#3DA8AA]"
                  : "bg-[#B99066] text-white hover:bg-[#A67A5A]"
              }`}
            >
              {isEditing ? "Sauvegarder" : "Modifier"}
            </button>
          </div>
          <p className="text-[#686868]">
            Gérez le contenu de la page TMI et prélèvements sociaux. Modifiez les informations sur la fiscalité selon vos besoins.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📊</span>
            Section Hero
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
              {renderEditableField("hero", "title", "Titre principal")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
              {renderEditableField("hero", "subtitle", "Sous-titre", "textarea")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA principal</label>
              {renderEditableField("hero", "ctaPrimary", "Bouton CTA principal")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA secondaire</label>
              {renderEditableField("hero", "ctaSecondary", "Bouton CTA secondaire")}
            </div>
          </div>
        </div>

        {/* TMI Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📈</span>
            Taux Marginal d'Imposition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("tmi", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("tmi", "description", "Description", "textarea")}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Explication</label>
              {renderEditableField("tmi", "explanation", "Explication", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Tranches d'imposition</label>
            <div className="space-y-4">
              {content.tmi.tranches.map((tranche, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-[#686868] mb-2">Tranche {index + 1}</h3>
                  {renderEditableTranche("tmi", "tranches", index, "seuil", "taux", "description")}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prélèvements sociaux Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">💰</span>
            Prélèvements sociaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("prelevementsSociaux", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("prelevementsSociaux", "description", "Description", "textarea")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Taux</label>
              {renderEditableField("prelevementsSociaux", "taux", "Taux")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Composition</label>
            {renderEditableList("prelevementsSociaux", "composition", "Composition")}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Application</label>
            {renderEditableList("prelevementsSociaux", "application", "Application")}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📊</span>
            Impact sur vos revenus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("impact", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("impact", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Exemples d'impact</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.impact.examples.map((example, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-[#686868] mb-2">Exemple {index + 1}</h3>
                  {renderEditableImpact("impact", "examples", index, "scenario", "tmi", "prelevements", "total", "explication")}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimisation Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🎯</span>
            Stratégies d'optimisation
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("optimisation", "title", "Titre de section")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.optimisation.strategies.map((strategy, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Stratégie {index + 1}</h3>
                {renderEditableCard("optimisation", "strategies", index, "title", "description")}
                <div className="mt-2">
                  <label className="block text-xs text-[#686868] mb-1">Avantage</label>
                  <input
                    value={content.optimisation.strategies[index].avantage}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.optimisation.strategies[index].avantage = e.target.value;
                      saveContent(newContent);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Declaration Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📝</span>
            Déclaration et calcul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("declaration", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Procédure</label>
              {renderEditableList("declaration", "procedure", "Procédure")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Documents nécessaires</label>
              {renderEditableList("declaration", "documents", "Documents nécessaires")}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🚀</span>
            Section Appel à l'action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("cta", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("cta", "description", "Description", "textarea")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Texte du bouton</label>
              {renderEditableField("cta", "buttonText", "Texte du bouton")}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {isEditing && (
          <div className="bg-[#F0F9FF] rounded-lg p-6 border border-[#4EBBBD]">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Aperçu des modifications</h3>
            <div className="text-sm text-[#686868] space-y-2">
              <p><strong>Hero :</strong> {content.hero.title}</p>
              <p><strong>TMI :</strong> {content.tmi.title}</p>
              <p><strong>Prélèvements sociaux :</strong> {content.prelevementsSociaux.title}</p>
              <p><strong>Impact :</strong> {content.impact.title}</p>
              <p><strong>Optimisation :</strong> {content.optimisation.title}</p>
              <p><strong>Déclaration :</strong> {content.declaration.title}</p>
              <p><strong>CTA :</strong> {content.cta.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
