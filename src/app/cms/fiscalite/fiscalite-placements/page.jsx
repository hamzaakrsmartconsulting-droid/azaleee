"use client";
import React, { useState, useEffect } from "react";

export default function FiscalitePlacementsCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "Fiscalité des placements et investissements",
      subtitle: "Maîtrisez la fiscalité de vos placements financiers. Découvrez les différents régimes fiscaux et optimisez vos investissements.",
      ctaPrimary: "Calculer ma fiscalité",
      ctaSecondary: "Télécharger le guide"
    },
    regimes: {
      title: "Régimes fiscaux des placements",
      regimes: [
        {
          name: "PFU (Prélèvement Forfaitaire Unique)",
          rate: "30%",
          description: "Régime par défaut pour les revenus du capital",
          details: "12,8% d'impôt + 17,2% de prélèvements sociaux"
        },
        {
          name: "Barème progressif",
          rate: "Tranches IR",
          description: "Option possible pour certains placements",
          details: "Revenus ajoutés aux autres revenus imposables"
        },
        {
          name: "Exonérations",
          rate: "0%",
          description: "Certains placements bénéficient d'exonérations",
          details: "PEA, Livret A, LDDS, etc."
        }
      ]
    },
    placements: {
      title: "Fiscalité par type de placement",
      categories: [
        {
          name: "Actions et obligations",
          regime: "PFU 30% ou barème progressif",
          details: "Dividendes, intérêts, plus-values",
          notes: "Plus-values exonérées après 5 ans pour actions"
        },
        {
          name: "Assurance-vie",
          regime: "Exonération partielle",
          details: "Exonération après 8 ans",
          notes: "Plafond de 4 600 € par an pour les versements"
        },
        {
          name: "PEA",
          regime: "Exonération totale",
          details: "Aucune imposition sur les plus-values",
          notes: "Plafond de 150 000 € pour le PEA classique"
        },
        {
          name: "SCPI/OPCI",
          regime: "PFU 30%",
          details: "Revenus fonciers et plus-values",
          notes: "Fiscalité immobilière applicable"
        }
      ]
    },
    plusValues: {
      title: "Fiscalité des plus-values",
      description: "Les plus-values de cession de valeurs mobilières sont imposables selon des règles spécifiques.",
      rules: [
        "Plus-values immobilières : PFU 30%",
        "Plus-values mobilières : PFU 30% après 5 ans",
        "Exonération PEA : Aucune imposition",
        "Exonération assurance-vie : Après 8 ans"
      ]
    },
    dividends: {
      title: "Fiscalité des dividendes",
      description: "Les dividendes perçus sont soumis à la fiscalité selon le régime choisi.",
      options: [
        {
          option: "PFU 30%",
          avantage: "Taux fixe et simple",
          inconvenient: "Pas de déduction des charges"
        },
        {
          option: "Barème progressif",
          avantage: "Taux personnalisé selon revenus",
          inconvenient: "Complexité administrative"
        }
      ]
    },
    optimization: {
      title: "Stratégies d'optimisation fiscale",
      strategies: [
        {
          title: "Utilisation du PEA",
          description: "Plafond de 150 000 €, exonération totale après 5 ans",
          avantage: "Aucune imposition sur les plus-values"
        },
        {
          title: "Assurance-vie",
          description: "Exonération après 8 ans, transmission avantageuse",
          avantage: "Fiscalité favorable à long terme"
        },
        {
          title: "Diversification des régimes",
          description: "Combiner différents types de placements",
          avantage: "Optimisation selon la situation personnelle"
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent dans l'optimisation fiscale de vos placements.",
      buttonText: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('fiscalite-placements-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('fiscalite-placements-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'fiscalite-placements', content: newContent } }));
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

  const renderEditableRegime = (section, field, index, nameField, rateField, descriptionField, detailsField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Nom du régime</label>
              <input
                value={content[section][field][index][nameField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][nameField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Taux</label>
              <input
                value={content[section][field][index][rateField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][rateField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              <textarea
                value={content[section][field][index][descriptionField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][descriptionField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                rows={2}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Détails</label>
              <input
                value={content[section][field][index][detailsField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][detailsField] = e.target.value;
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
          <h3 className="text-[#112033] text-lg font-semibold">{content[section][field][index][nameField]}</h3>
          <span className="text-2xl font-bold text-[#4EBBBD]">{content[section][field][index][rateField]}</span>
        </div>
        <p className="text-[#686868] mb-2">{content[section][field][index][descriptionField]}</p>
        <p className="text-sm text-[#112033] font-medium">{content[section][field][index][detailsField]}</p>
      </div>
    );
  };

  const renderEditablePlacement = (section, field, index, nameField, regimeField, detailsField, notesField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Nom du placement</label>
              <input
                value={content[section][field][index][nameField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][nameField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Régime fiscal</label>
              <input
                value={content[section][field][index][regimeField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][regimeField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Détails</label>
              <input
                value={content[section][field][index][detailsField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][detailsField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Notes</label>
              <input
                value={content[section][field][index][notesField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][notesField] = e.target.value;
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
        <h3 className="text-[#112033] text-lg font-semibold mb-3">{content[section][field][index][nameField]}</h3>
        <p className="text-[#4EBBBD] font-medium mb-2">{content[section][field][index][regimeField]}</p>
        <p className="text-[#686868] mb-2">{content[section][field][index][detailsField]}</p>
        <p className="text-sm text-[#112033]">{content[section][field][index][notesField]}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#112033]">CMS - Fiscalité des placements</h1>
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
            Gérez le contenu de la page Fiscalité des placements. Modifiez les informations sur la fiscalité des investissements selon vos besoins.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📈</span>
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

        {/* Regimes Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🏦</span>
            Régimes fiscaux
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("regimes", "title", "Titre de section")}
          </div>
          <div className="space-y-4">
            {content.regimes.regimes.map((regime, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Régime {index + 1}</h3>
                {renderEditableRegime("regimes", "regimes", index, "name", "rate", "description", "details")}
              </div>
            ))}
          </div>
        </div>

        {/* Placements Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">💼</span>
            Fiscalité par type de placement
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("placements", "title", "Titre de section")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.placements.categories.map((placement, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Placement {index + 1}</h3>
                {renderEditablePlacement("placements", "categories", index, "name", "regime", "details", "notes")}
              </div>
            ))}
          </div>
        </div>

        {/* Plus Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📊</span>
            Plus-values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("plusValues", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("plusValues", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Règles</label>
            {renderEditableList("plusValues", "rules", "Règles")}
          </div>
        </div>

        {/* Dividends Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">💵</span>
            Dividendes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("dividends", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("dividends", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Options</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.dividends.options.map((option, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-[#686868] mb-2">Option {index + 1}</h3>
                  {renderEditableCard("dividends", "options", index, "option", "avantage")}
                  <div className="mt-2">
                    <label className="block text-xs text-[#686868] mb-1">Inconvénient</label>
                    <input
                      value={content.dividends.options[index].inconvenient}
                      onChange={(e) => {
                        const newContent = { ...content };
                        newContent.dividends.options[index].inconvenient = e.target.value;
                        saveContent(newContent);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimization Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🎯</span>
            Stratégies d'optimisation
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("optimization", "title", "Titre de section")}
          </div>
          <div className="space-y-4">
            {content.optimization.strategies.map((strategy, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Stratégie {index + 1}</h3>
                {renderEditableCard("optimization", "strategies", index, "title", "description")}
                <div className="mt-2">
                  <label className="block text-xs text-[#686868] mb-1">Avantage</label>
                  <input
                    value={content.optimization.strategies[index].avantage}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.optimization.strategies[index].avantage = e.target.value;
                      saveContent(newContent);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              </div>
            ))}
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
              <p><strong>Régimes :</strong> {content.regimes.title}</p>
              <p><strong>Placements :</strong> {content.placements.title}</p>
              <p><strong>Plus-values :</strong> {content.plusValues.title}</p>
              <p><strong>Dividendes :</strong> {content.dividends.title}</p>
              <p><strong>Optimisation :</strong> {content.optimization.title}</p>
              <p><strong>CTA :</strong> {content.cta.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
