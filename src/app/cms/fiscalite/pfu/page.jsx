"use client";
import React, { useState, useEffect } from "react";

export default function PFUCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "PFU - Prélèvement Forfaitaire Unique",
      subtitle: "Comprenez le PFU, le régime fiscal par défaut pour les revenus du capital. Découvrez ses taux, son fonctionnement et ses alternatives.",
      ctaPrimary: "Calculer mon PFU",
      ctaSecondary: "Télécharger le guide"
    },
    definition: {
      title: "Qu'est-ce que le PFU ?",
      description: "Le Prélèvement Forfaitaire Unique (PFU) est un régime fiscal simplifié qui s'applique par défaut aux revenus du capital depuis 2018.",
      composition: {
        impots: "12,8% d'impôt sur le revenu",
        prelevements: "17,2% de prélèvements sociaux",
        total: "30% au total"
      }
    },
    application: {
      title: "Revenus concernés par le PFU",
      revenus: [
        {
          category: "Dividendes",
          description: "Revenus distribués par les actions",
          taux: "30%"
        },
        {
          category: "Intérêts",
          description: "Revenus des obligations et comptes",
          taux: "30%"
        },
        {
          category: "Plus-values mobilières",
          description: "Gains de cession de valeurs mobilières",
          taux: "30%"
        },
        {
          category: "Revenus fonciers",
          description: "Loyers et revenus immobiliers",
          taux: "30%"
        }
      ]
    },
    exclusions: {
      title: "Revenus exclus du PFU",
      exclusions: [
        "Revenus du PEA (exonération totale)",
        "Revenus du Livret A et LDDS (exonération)",
        "Revenus de l'assurance-vie (régime spécifique)",
        "Revenus des SCPI/OPCI (régime spécifique)"
      ]
    },
    option: {
      title: "Option pour le barème progressif",
      description: "Vous pouvez choisir d'être imposé au barème progressif de l'impôt sur le revenu au lieu du PFU.",
      conditions: [
        "Option à exercer lors de la déclaration",
        "Irrévocable pour l'année concernée",
        "Revenus ajoutés aux autres revenus imposables",
        "Calcul selon les tranches d'imposition"
      ],
      avantages: [
        "Taux personnalisé selon vos revenus",
        "Possibilité de déduire les charges",
        "Intégration dans le quotient familial"
      ],
      inconvenients: [
        "Complexité administrative",
        "Taux potentiellement plus élevé",
        "Pas de déduction automatique"
      ]
    },
    calcul: {
      title: "Calcul du PFU",
      examples: [
        {
          scenario: "Dividendes de 1 000 €",
          calcul: "1 000 € × 30% = 300 € de PFU",
          detail: "128 € d'impôt + 172 € de prélèvements sociaux"
        },
        {
          scenario: "Plus-value de 5 000 €",
          calcul: "5 000 € × 30% = 1 500 € de PFU",
          detail: "640 € d'impôt + 860 € de prélèvements sociaux"
        },
        {
          scenario: "Intérêts de 500 €",
          calcul: "500 € × 30% = 150 € de PFU",
          detail: "64 € d'impôt + 86 € de prélèvements sociaux"
        }
      ]
    },
    declaration: {
      title: "Déclaration et paiement",
      procedure: [
        "Déclaration automatique par les établissements financiers",
        "Prélèvement à la source sur les revenus",
        "Déclaration dans la case correspondante",
        "Possibilité d'option pour le barème progressif"
      ],
      documents: [
        "Attestations de revenus",
        "Relevés bancaires",
        "Attestations de plus-values",
        "Justificatifs de charges (si option barème)"
      ]
    },
    cta: {
      title: "Besoin d'aide pour comprendre le PFU ?",
      description: "Nos experts vous accompagnent dans la compréhension et l'optimisation de votre fiscalité.",
      buttonText: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('pfu-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('pfu-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'pfu', content: newContent } }));
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

  const renderEditableRevenu = (section, field, index, categoryField, descriptionField, tauxField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Catégorie</label>
              <input
                value={content[section][field][index][categoryField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][categoryField] = e.target.value;
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
          </div>
        </div>
      );
    }
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[#112033] text-lg font-semibold">{content[section][field][index][categoryField]}</h3>
          <span className="text-2xl font-bold text-[#4EBBBD]">{content[section][field][index][tauxField]}</span>
        </div>
        <p className="text-[#686868]">{content[section][field][index][descriptionField]}</p>
      </div>
    );
  };

  const renderEditableCalcul = (section, field, index, scenarioField, calculField, detailField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <label className="block text-sm font-medium text-[#686868] mb-2">Calcul</label>
              <input
                value={content[section][field][index][calculField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][calculField] = e.target.value;
                  saveContent(newContent);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Détail</label>
              <input
                value={content[section][field][index][detailField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][detailField] = e.target.value;
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
        <p className="text-2xl font-bold text-[#4EBBBD] mb-2">{content[section][field][index][calculField]}</p>
        <p className="text-[#686868]">{content[section][field][index][detailField]}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#112033]">CMS - PFU (Prélèvement Forfaitaire Unique)</h1>
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
            Gérez le contenu de la page PFU. Modifiez les informations sur le Prélèvement Forfaitaire Unique selon vos besoins.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🏦</span>
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

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📖</span>
            Définition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("definition", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("definition", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Composition du taux</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-[#686868] mb-1">Impôt sur le revenu</label>
                <input
                  value={content.definition.composition.impots}
                  onChange={(e) => {
                    const newContent = { ...content };
                    newContent.definition.composition.impots = e.target.value;
                    saveContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-[#686868] mb-1">Prélèvements sociaux</label>
                <input
                  value={content.definition.composition.prelevements}
                  onChange={(e) => {
                    const newContent = { ...content };
                    newContent.definition.composition.prelevements = e.target.value;
                    saveContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-[#686868] mb-1">Total</label>
                <input
                  value={content.definition.composition.total}
                  onChange={(e) => {
                    const newContent = { ...content };
                    newContent.definition.composition.total = e.target.value;
                    saveContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📋</span>
            Revenus concernés
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("application", "title", "Titre de section")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.application.revenus.map((revenu, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Revenu {index + 1}</h3>
                {renderEditableRevenu("application", "revenus", index, "category", "description", "taux")}
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">❌</span>
            Revenus exclus
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("exclusions", "title", "Titre de section")}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des exclusions</label>
            {renderEditableList("exclusions", "exclusions", "Liste des exclusions")}
          </div>
        </div>

        {/* Option Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">⚖️</span>
            Option barème progressif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("option", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("option", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Conditions</label>
            {renderEditableList("option", "conditions", "Conditions")}
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
              {renderEditableList("option", "avantages", "Avantages")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Inconvénients</label>
              {renderEditableList("option", "inconvenients", "Inconvénients")}
            </div>
          </div>
        </div>

        {/* Calcul Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🧮</span>
            Exemples de calcul
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("calcul", "title", "Titre de section")}
          </div>
          <div className="space-y-4">
            {content.calcul.examples.map((example, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Exemple {index + 1}</h3>
                {renderEditableCalcul("calcul", "examples", index, "scenario", "calcul", "detail")}
              </div>
            ))}
          </div>
        </div>

        {/* Declaration Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📝</span>
            Déclaration et paiement
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
              <p><strong>Définition :</strong> {content.definition.title}</p>
              <p><strong>Application :</strong> {content.application.title}</p>
              <p><strong>Exclusions :</strong> {content.exclusions.title}</p>
              <p><strong>Option :</strong> {content.option.title}</p>
              <p><strong>Calcul :</strong> {content.calcul.title}</p>
              <p><strong>Déclaration :</strong> {content.declaration.title}</p>
              <p><strong>CTA :</strong> {content.cta.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
