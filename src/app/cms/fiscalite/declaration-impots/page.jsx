"use client";
import React, { useState, useEffect } from "react";

export default function DeclarationImpotsCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "Déclaration d'impôts",
      subtitle: "Maîtrisez votre déclaration d'impôts avec nos conseils et outils pratiques. Découvrez les bonnes pratiques, les délais et les erreurs à éviter.",
      ctaPrimary: "Consulter le calendrier",
      ctaSecondary: "Télécharger le guide"
    },
    keyInfo: {
      title: "Informations clés",
      deadline: "31 mai 2025",
      onlineDeadline: "8 juin 2025",
      documents: [
        "Justificatifs de revenus",
        "Attestations de déductions",
        "Relevés bancaires",
        "Quittances de loyer"
      ]
    },
    steps: {
      title: "Étapes de la déclaration",
      steps: [
        {
          title: "Récupération des documents",
          description: "Collectez tous vos justificatifs de revenus et de charges"
        },
        {
          title: "Vérification des informations",
          description: "Contrôlez l'exactitude de vos données personnelles"
        },
        {
          title: "Saisie des revenus",
          description: "Renseignez tous vos revenus par catégorie"
        },
        {
          title: "Déductions et crédits",
          description: "Ajoutez vos déductions et crédits d'impôt"
        },
        {
          title: "Validation et envoi",
          description: "Vérifiez votre déclaration avant envoi"
        }
      ]
    },
    commonMistakes: {
      title: "Erreurs fréquentes à éviter",
      mistakes: [
        "Oublier des revenus (travaux, locations, etc.)",
        "Ne pas déclarer les plus-values",
        "Oublier les déductions d'impôt",
        "Erreur sur l'adresse ou la situation familiale",
        "Ne pas joindre les justificatifs requis"
      ]
    },
    tips: {
      title: "Conseils pour une déclaration optimale",
      tips: [
        "Préparez vos documents à l'avance",
        "Utilisez la déclaration en ligne",
        "Conservez vos justificatifs 3 ans",
        "Vérifiez les montants avant envoi",
        "Faites-vous accompagner si nécessaire"
      ]
    },
    cta: {
      title: "Besoin d'aide pour votre déclaration ?",
      description: "Nos experts vous accompagnent dans la préparation et l'optimisation de votre déclaration d'impôts.",
      buttonText: "Prendre rendez-vous"
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('declaration-impots-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('declaration-impots-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'declaration-impots', content: newContent } }));
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#112033]">CMS - Déclaration d'impôts</h1>
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
            Gérez le contenu de la page Déclaration d'impôts. Modifiez les textes, titres et informations selon vos besoins.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📝</span>
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

        {/* Key Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">ℹ️</span>
            Informations clés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              {renderEditableField("keyInfo", "title", "Titre")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Date limite papier</label>
              {renderEditableField("keyInfo", "deadline", "Date limite papier")}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Date limite en ligne</label>
              {renderEditableField("keyInfo", "onlineDeadline", "Date limite en ligne")}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Documents nécessaires</label>
            {renderEditableList("keyInfo", "documents", "Documents nécessaires")}
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📋</span>
            Étapes de la déclaration
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("steps", "title", "Titre de section")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.steps.steps.map((step, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-[#686868] mb-2">Étape {index + 1}</h3>
                {renderEditableCard("steps", "steps", index, "title", "description")}
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">⚠️</span>
            Erreurs fréquentes
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("commonMistakes", "title", "Titre de section")}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des erreurs</label>
            {renderEditableList("commonMistakes", "mistakes", "Liste des erreurs")}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">💡</span>
            Conseils
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de section</label>
            {renderEditableField("tips", "title", "Titre de section")}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des conseils</label>
            {renderEditableList("tips", "tips", "Liste des conseils")}
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
              <p><strong>Infos clés :</strong> {content.keyInfo.title}</p>
              <p><strong>Étapes :</strong> {content.steps.title}</p>
              <p><strong>Erreurs :</strong> {content.commonMistakes.title}</p>
              <p><strong>Conseils :</strong> {content.tips.title}</p>
              <p><strong>CTA :</strong> {content.cta.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
