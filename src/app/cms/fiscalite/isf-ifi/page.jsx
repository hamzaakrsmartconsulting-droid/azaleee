"use client";
import React, { useState, useEffect } from "react";

export default function ISFIFICMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "ISF/IFI - Impôt sur la Fortune Immobilière",
      subtitle: "Comprenez l'Impôt sur la Fortune Immobilière (IFI) qui a remplacé l'ISF. Découvrez les seuils, les taux et les stratégies d'optimisation.",
      ctaPrimary: "Calculer mon IFI",
      ctaSecondary: "Télécharger le guide"
    },
    definition: {
      title: "Qu'est-ce que l'IFI ?",
      description: "L'Impôt sur la Fortune Immobilière (IFI) est un impôt annuel qui s'applique sur la valeur nette des biens immobiliers détenus par les contribuables.",
      historique: "L'IFI a remplacé l'ISF (Impôt de Solidarité sur la Fortune) en 2018, en se concentrant uniquement sur les biens immobiliers.",
      seuil: "800 000 €",
      explication: "L'IFI ne s'applique qu'aux contribuables dont la valeur nette des biens immobiliers dépasse 800 000 €."
    },
    biensImposables: {
      title: "Biens imposables à l'IFI",
      description: "Tous les biens immobiliers sont concernés par l'IFI, qu'ils soient situés en France ou à l'étranger.",
      categories: [
        {
          nom: "Résidence principale",
          description: "Votre logement principal",
          valeur: "Valeur vénale au 1er janvier"
        },
        {
          nom: "Résidences secondaires",
          description: "Maisons, appartements de vacances",
          valeur: "Valeur vénale au 1er janvier"
        },
        {
          nom: "Biens en location",
          description: "Immeubles, appartements loués",
          valeur: "Valeur vénale au 1er janvier"
        },
        {
          nom: "Terrains constructibles",
          description: "Terrains non bâtis",
          valeur: "Valeur vénale au 1er janvier"
        }
      ]
    },
    biensExclus: {
      title: "Biens exclus de l'IFI",
      exclusions: [
        "Biens professionnels (si utilisés pour l'activité)",
        "Œuvres d'art et objets de collection",
        "Véhicules et bateaux de plaisance",
        "Placements financiers (actions, obligations, etc.)",
        "Liquidités et comptes bancaires"
      ]
    },
    calcul: {
      title: "Calcul de l'IFI",
      description: "L'IFI se calcule sur la valeur nette des biens immobiliers, c'est-à-dire la valeur brute moins les dettes liées à ces biens.",
      formule: "Valeur nette = Valeur brute des biens - Dettes liées aux biens",
      tranches: [
        {
          seuil: "De 800 000 € à 1 300 000 €",
          taux: "0,5%",
          description: "Première tranche"
        },
        {
          seuil: "De 1 300 000 € à 2 570 000 €",
          taux: "0,7%",
          description: "Deuxième tranche"
        },
        {
          seuil: "De 2 570 000 € à 5 000 000 €",
          taux: "1%",
          description: "Troisième tranche"
        },
        {
          seuil: "De 5 000 000 € à 10 000 000 €",
          taux: "1,25%",
          description: "Quatrième tranche"
        },
        {
          seuil: "Au-delà de 10 000 000 €",
          taux: "1,5%",
          description: "Tranche maximale"
        }
      ]
    },
    exemples: {
      title: "Exemples de calcul",
      examples: [
        {
          scenario: "Patrimoine immobilier de 1 500 000 €",
          calcul: "800 000 € × 0% + 500 000 € × 0,5% + 200 000 € × 0,7% = 3 900 €",
          detail: "IFI total : 3 900 €"
        },
        {
          scenario: "Patrimoine immobilier de 3 000 000 €",
          calcul: "800 000 € × 0% + 500 000 € × 0,5% + 1 270 000 € × 0,7% + 430 000 € × 1% = 15 890 €",
          detail: "IFI total : 15 890 €"
        }
      ]
    },
    declaration: {
      title: "Déclaration et paiement",
      procedure: [
        "Déclaration annuelle obligatoire",
        "Déclaration au plus tard le 30 juin",
        "Paiement en une fois ou en plusieurs fois",
        "Possibilité de paiement par prélèvement automatique"
      ],
      documents: [
        "Attestations de valeur des biens",
        "Justificatifs des dettes",
        "Contrats de location",
        "Attestations d'assurance"
      ]
    },
    optimisation: {
      title: "Stratégies d'optimisation",
      strategies: [
        {
          title: "Donation en usufruit",
          description: "Donner l'usufruit d'un bien tout en conservant la nue-propriété",
          avantage: "Réduction de la valeur imposable"
        },
        {
          title: "Démembrement de propriété",
          description: "Séparer l'usufruit et la nue-propriété",
          avantage: "Optimisation de la transmission"
        },
        {
          title: "Investissement dans l'immobilier professionnel",
          description: "Utiliser les biens pour une activité professionnelle",
          avantage: "Exclusion de l'assiette imposable"
        },
        {
          title: "Optimisation de la résidence principale",
          description: "Concentrer les investissements dans la résidence principale",
          avantage: "Meilleure valorisation à long terme"
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre IFI ?",
      description: "Nos experts vous accompagnent dans l'optimisation de votre patrimoine immobilier et la réduction de votre IFI.",
      buttonText: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('isf-ifi-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('isf-ifi-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'isf-ifi', content: newContent } }));
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

  const renderEditableBien = (section, field, index, nomField, descriptionField, valeurField) => {
    if (isEditing) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Nom du bien</label>
              <input
                value={content[section][field][index][nomField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][nomField] = e.target.value;
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
              <label className="block text-sm font-medium text-[#686868] mb-2">Valeur</label>
              <input
                value={content[section][field][index][valeurField]}
                onChange={(e) => {
                  const newContent = { ...content };
                  newContent[section][field][index][valeurField] = e.target.value;
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
        <h3 className="text-[#112033] text-lg font-semibold mb-3">{content[section][field][index][nomField]}</h3>
        <p className="text-[#686868] mb-2">{content[section][field][index][descriptionField]}</p>
        <p className="text-sm text-[#4EBBBD] font-medium">{content[section][field][index][valeurField]}</p>
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

  const renderEditableExemple = (section, field, index, scenarioField, calculField, detailField) => {
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
            <h1 className="text-2xl font-bold text-[#112033]">CMS - ISF/IFI</h1>
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
            Gérez le contenu de la page ISF/IFI. Modifiez les informations sur l'Impôt sur la Fortune Immobilière selon vos besoins.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🏠</span>
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
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Historique</label>
              {renderEditableField("definition", "historique", "Historique", "textarea")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Seuil</label>
              {renderEditableField("definition", "seuil", "Seuil")}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Explication</label>
              {renderEditableField("definition", "explication", "Explication", "textarea")}
            </div>
          </div>
        </div>

        {/* Biens imposables Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📋</span>
            Biens imposables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("biensImposables", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("biensImposables", "description", "Description", "textarea")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Catégories de biens</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.biensImposables.categories.map((bien, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-[#686868] mb-2">Bien {index + 1}</h3>
                  {renderEditableBien("biensImposables", "categories", index, "nom", "description", "valeur")}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Biens exclus Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">❌</span>
            Biens exclus
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("biensExclus", "title", "Titre de section")}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des exclusions</label>
            {renderEditableList("biensExclus", "exclusions", "Liste des exclusions")}
          </div>
        </div>

        {/* Calcul Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">🧮</span>
            Calcul de l'IFI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("calcul", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
              {renderEditableField("calcul", "description", "Description", "textarea")}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#686868] mb-2">Formule</label>
              {renderEditableField("calcul", "formule", "Formule")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Tranches d'imposition</label>
            <div className="space-y-4">
              {content.calcul.tranches.map((tranche, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-[#686868] mb-2">Tranche {index + 1}</h3>
                  {renderEditableTranche("calcul", "tranches", index, "seuil", "taux", "description")}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exemples Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📊</span>
            Exemples de calcul
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("exemples", "title", "Titre de section")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.exemples.examples.map((exemple, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Exemple {index + 1}</h3>
                {renderEditableExemple("exemples", "examples", index, "scenario", "calcul", "detail")}
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
              <p><strong>Biens imposables :</strong> {content.biensImposables.title}</p>
              <p><strong>Biens exclus :</strong> {content.biensExclus.title}</p>
              <p><strong>Calcul :</strong> {content.calcul.title}</p>
              <p><strong>Exemples :</strong> {content.exemples.title}</p>
              <p><strong>Déclaration :</strong> {content.declaration.title}</p>
              <p><strong>Optimisation :</strong> {content.optimisation.title}</p>
              <p><strong>CTA :</strong> {content.cta.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
