"use client";
import React, { useState, useEffect } from "react";

export default function ImpotSurLeRevenuCMSPage() {
  const [content, setContent] = useState({
    hero: {
      title: "Impôt sur le revenu",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non est sit amet massa finibus rhoncus. Vivamus sed efficitur nibh, in convallis urna.",
      ctaPrimary: "Accéder au simulateur",
      ctaSecondary: "Voir le sommaire"
    },
    quickStats: {
      stat1: {
        label: "Lorem ipsum",
        title: "Barème progressif",
        subtitle: "Dolor sit amet"
      },
      stat2: {
        label: "Consectetur",
        title: "Quotient familial",
        subtitle: "Adipiscing elit"
      },
      stat3: {
        label: "Sed do",
        title: "Crédits & réductions",
        subtitle: "Eiusmod tempor"
      }
    },
    sommaire: {
      title: "Sommaire",
      items: [
        "1. Bases de l'impôt sur le revenu",
        "2. Tranches et barème en vigueur",
        "3. Quotient familial et parts",
        "4. Déductions, crédits et réductions",
        "5. Déclaration et calendrier",
        "6. Questions fréquentes"
      ]
    },
    sections: {
      section1: {
        title: "1. Bases de l'impôt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a porta ipsum. Pellentesque non leo sit amet metus faucibus venenatis.",
        listItems: [
          "Assiette, revenu net imposable",
          "Foyer fiscal, rattachement",
          "Revenus catégoriels"
        ]
      },
      section2: {
        title: "2. Tranches et barème",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer euismod, nisl ac facilisis egestas, nunc eros fermentum enim.",
        tranches: [
          "0% jusqu'à 11 294 €",
          "11% de 11 295 à 28 797 €",
          "30% de 28 798 à 82 341 €",
          "41% de 82 342 à 177 106 €",
          "45% au-delà"
        ]
      },
      section3: {
        title: "3. Quotient familial et parts",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
      }
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('impot-sur-le-revenu-cms-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('impot-sur-le-revenu-cms-content', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: { page: 'impot-sur-le-revenu', content: newContent } }));
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#112033]">CMS - Impôt sur le revenu</h1>
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
            Gérez le contenu de la page Impôt sur le revenu. Modifiez les textes, titres et informations selon vos besoins.
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

        {/* Quick Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📈</span>
            Statistiques rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-[#686868] mb-2">Statistique 1</h3>
              <div className="space-y-2">
                <label className="block text-xs text-[#686868]">Label</label>
                {renderEditableField("quickStats", "stat1.label", "Label")}
                <label className="block text-xs text-[#686868]">Titre</label>
                {renderEditableField("quickStats", "stat1.title", "Titre")}
                <label className="block text-xs text-[#686868]">Sous-titre</label>
                {renderEditableField("quickStats", "stat1.subtitle", "Sous-titre")}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#686868] mb-2">Statistique 2</h3>
              <div className="space-y-2">
                <label className="block text-xs text-[#686868]">Label</label>
                {renderEditableField("quickStats", "stat2.label", "Label")}
                <label className="block text-xs text-[#686868]">Titre</label>
                {renderEditableField("quickStats", "stat2.title", "Titre")}
                <label className="block text-xs text-[#686868]">Sous-titre</label>
                {renderEditableField("quickStats", "stat2.subtitle", "Sous-titre")}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#686868] mb-2">Statistique 3</h3>
              <div className="space-y-2">
                <label className="block text-xs text-[#686868]">Label</label>
                {renderEditableField("quickStats", "stat3.label", "Label")}
                <label className="block text-xs text-[#686868]">Titre</label>
                {renderEditableField("quickStats", "stat3.title", "Titre")}
                <label className="block text-xs text-[#686868]">Sous-titre</label>
                {renderEditableField("quickStats", "stat3.subtitle", "Sous-titre")}
              </div>
            </div>
          </div>
        </div>

        {/* Sommaire Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📋</span>
            Section Sommaire
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            {renderEditableField("sommaire", "title", "Titre")}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des éléments</label>
            {renderEditableList("sommaire", "items", "Liste des éléments")}
          </div>
        </div>

        {/* Sections Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#112033] mb-4 flex items-center gap-2">
            <span className="text-[#4EBBBD]">📝</span>
            Contenu des sections
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-[#112033] mb-3">Section 1 - Bases de l'impôt</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                  {renderEditableField("sections", "section1.title", "Titre")}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
                  {renderEditableField("sections", "section1.description", "Description", "textarea")}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-[#686868] mb-2">Liste des éléments</label>
                {renderEditableList("sections", "section1.listItems", "Liste des éléments")}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#112033] mb-3">Section 2 - Tranches et barème</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                  {renderEditableField("sections", "section2.title", "Titre")}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
                  {renderEditableField("sections", "section2.description", "Description", "textarea")}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-[#686868] mb-2">Tranches d'imposition</label>
                {renderEditableList("sections", "section2.tranches", "Tranches d'imposition")}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#112033] mb-3">Section 3 - Quotient familial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                  {renderEditableField("sections", "section3.title", "Titre")}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
                  {renderEditableField("sections", "section3.description", "Description", "textarea")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {isEditing && (
          <div className="bg-[#F0F9FF] rounded-lg p-6 border border-[#4EBBBD]">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Aperçu des modifications</h3>
            <div className="text-sm text-[#686868] space-y-2">
              <p><strong>Hero :</strong> {content.hero.title}</p>
              <p><strong>Stat 1 :</strong> {content.quickStats.stat1.title}</p>
              <p><strong>Stat 2 :</strong> {content.quickStats.stat2.title}</p>
              <p><strong>Stat 3 :</strong> {content.quickStats.stat3.title}</p>
              <p><strong>Sommaire :</strong> {content.sommaire.title}</p>
              <p><strong>Section 1 :</strong> {content.sections.section1.title}</p>
              <p><strong>Section 2 :</strong> {content.sections.section2.title}</p>
              <p><strong>Section 3 :</strong> {content.sections.section3.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
