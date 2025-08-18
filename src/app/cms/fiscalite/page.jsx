"use client";
import React, { useState, useEffect } from "react";

// WYSIWYG Editor Component
function WYSIWYGEditor({ label, value, onChange, placeholder = "" }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value || "");

  const handleSave = () => {
    onChange(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value || "");
    setIsEditing(false);
  };

  const toggleBold = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = editValue.substring(start, end);
      const newText = editValue.substring(0, start) + `**${selectedText}**` + editValue.substring(end);
      setEditValue(newText);
    }
  };

  const toggleItalic = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = editValue.substring(start, end);
      const newText = editValue.substring(0, start) + `*${selectedText}*` + editValue.substring(end);
      setEditValue(newText);
    }
  };

  const addLink = () => {
    const url = prompt("Entrez l'URL du lien:");
    if (url) {
      const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = editValue.substring(start, end);
        const newText = editValue.substring(0, start) + `[${selectedText || 'Lien'}](${url})` + editValue.substring(end);
        setEditValue(newText);
      }
    }
  };

  const addList = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const newText = editValue.substring(0, start) + "\n- Élément de liste\n- Autre élément" + editValue.substring(start);
      setEditValue(newText);
    }
  };

  const addNumberedList = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const newText = editValue.substring(0, start) + "\n1. Premier élément\n2. Deuxième élément" + editValue.substring(start);
      setEditValue(newText);
    }
  };

  const addQuote = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = editValue.substring(start, end);
      const newText = editValue.substring(0, start) + `> ${selectedText || 'Citation'}` + editValue.substring(end);
      setEditValue(newText);
    }
  };

  const addCode = () => {
    const textarea = document.querySelector(`#wysiwyg-${label.replace(/\s+/g, '-')}`);
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = editValue.substring(start, end);
      const newText = editValue.substring(0, start) + `\`${selectedText || 'code'}\`` + editValue.substring(end);
      setEditValue(newText);
    }
  };

  const renderPreview = (text) => {
    if (!text) return <span className="text-gray-400">{placeholder}</span>;
    
    // Simple markdown rendering
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank">$1</a>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic">$1</blockquote>')
      .replace(/^(\d+)\. (.*$)/gm, '<div class="ml-4">$1. $2</div>')
      .replace(/^- (.*$)/gm, '<div class="ml-4">• $1</div>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      .split('\n').map((line, i) => {
        if (line.includes('<blockquote')) return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
        if (line.includes('<div class="ml-4">')) return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
        return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
      });
  };

  return (
    <div className="mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      
      {!isEditing ? (
        <div className="border border-gray-300 rounded p-3 min-h-[100px] bg-white">
          <div className="prose prose-sm max-w-none">
            {renderPreview(value)}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 px-3 py-1 bg-[#4EBBBD] text-white rounded text-sm hover:bg-[#3DA8AA]"
          >
            Modifier
          </button>
        </div>
      ) : (
        <div className="border border-gray-300 rounded">
          {/* Toolbar */}
          <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
            <button
              onClick={toggleBold}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Gras"
            >
              <strong>B</strong>
            </button>
            <button
              onClick={toggleItalic}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Italique"
            >
              <em>I</em>
            </button>
            <button
              onClick={addLink}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Lien"
            >
              🔗
            </button>
            <button
              onClick={addList}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Liste à puces"
            >
              •
            </button>
            <button
              onClick={addNumberedList}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Liste numérotée"
            >
              1.
            </button>
            <button
              onClick={addQuote}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Citation"
            >
              "
            </button>
            <button
              onClick={addCode}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
              title="Code"
            >
              &lt;/&gt;
            </button>
          </div>
          
          {/* Editor */}
          <textarea
            id={`wysiwyg-${label.replace(/\s+/g, '-')}`}
            className="w-full p-3 focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            rows={8}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
          />
          
          {/* Actions */}
          <div className="bg-gray-50 border-t border-gray-300 p-2 flex gap-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-[#4EBBBD] text-white rounded text-sm hover:bg-[#3DA8AA]"
            >
              Sauvegarder
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const STORAGE_KEYS = {
  declarationImpots: "declarationImpotsContent",
  tranchesBaremesPlafonds: "tranchesBaremesPlafondsContent",
  loisFiscales: "loisFiscalesContent",
  reductionsImpotDeficitFoncier: "reductionsImpotDeficitFoncierContent",
  fiscalitePlacements: "fiscalitePlacementsContent",
  pfu: "pfuContent",
  tmiPrelevementsSociaux: "tmiPrelevementsSociauxContent",
  defiscalisationCasSpecifiques: "defiscalisationCasSpecifiquesContent",
  autreFiscalite: "autreFiscaliteContent"
};

const PAGES = [
  { id: "declarationImpots", name: "Déclaration d'impôts", path: "/fiscalite/declaration-impots" },
  { id: "tranchesBaremesPlafonds", name: "Tranches, barèmes et plafonds", path: "/fiscalite/tranches-baremes-plafonds" },
  { id: "loisFiscales", name: "Lois fiscales", path: "/fiscalite/lois-fiscales" },
  { id: "reductionsImpotDeficitFoncier", name: "Réductions d'impôt et déficit foncier", path: "/fiscalite/reductions-impot-deficit-foncier" },
  { id: "fiscalitePlacements", name: "Fiscalité des placements", path: "/fiscalite/fiscalite-placements" },
  { id: "pfu", name: "PFU", path: "/fiscalite/pfu" },
  { id: "tmiPrelevementsSociaux", name: "TMI et prélèvements sociaux", path: "/fiscalite/tmi-prelevements-sociaux" },
  { id: "defiscalisationCasSpecifiques", name: "Défiscalisation cas spéciaux", path: "/fiscalite/defiscalisation-cas-specifiques" },
  { id: "autreFiscalite", name: "Autre fiscalité", path: "/fiscalite/autre-fiscalite" }
];

function TextInput({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <input
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function TextArea({ label, value, onChange, rows = 5, placeholder = "" }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <textarea
        rows={rows}
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function ImageInput({ label, value, onChange }) {
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded border border-gray-300 px-3 py-2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL ou base64"
        />
        <label className="px-3 py-2 border rounded cursor-pointer bg-white">
          Importer
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </label>
      </div>
      {value && (
        <img src={value} alt="preview" className="mt-2 h-28 rounded border object-cover" />
      )}
    </div>
  );
}

function ArrayInput({ label, value, onChange, placeholder = "Un élément par ligne" }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <textarea
        rows={5}
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={Array.isArray(value) ? value.join("\n") : value}
        onChange={(e) => onChange(e.target.value.split("\n").filter(Boolean))}
        placeholder={placeholder}
      />
    </label>
  );
}

function ObjectArrayInput({ label, items, onChange, fields }) {
  const addItem = () => {
    const newItem = {};
    fields.forEach(field => {
      newItem[field.key] = field.default || "";
    });
    onChange([...items, newItem]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange(newItems);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-[#112033]">{label}</span>
        <button
          type="button"
          onClick={addItem}
          className="px-3 py-1 bg-[#4EBBBD] text-white rounded text-sm hover:bg-[#3DA8AA]"
        >
          + Ajouter
        </button>
      </div>
      
      {items.map((item, index) => (
        <div key={index} className="border rounded p-4 mb-3 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[#686868]">Élément #{index + 1}</span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fields.map(field => (
              <div key={field.key}>
                <label className="block text-xs text-[#686868] mb-1">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    rows={3}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-[#4EBBBD]"
                    value={item[field.key] || ""}
                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-[#4EBBBD]"
                    value={item[field.key] || ""}
                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NumberInput({ label, value, onChange, placeholder = "", min = null, max = null }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <input
        type="number"
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        step="0.01"
      />
    </label>
  );
}

export default function FiscaliteCMS() {
  const [selectedPage, setSelectedPage] = useState("declarationImpots");
  const [pageData, setPageData] = useState({});
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    loadPageData(selectedPage);
  }, [selectedPage]);

  const loadPageData = async (pageId) => {
    try {
      // Essayer d'abord la base de données
      const response = await fetch(`/api/pages/content?path=${PAGES.find(p => p.id === pageId)?.path}&type=cms`);
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.content) {
          setPageData(result.content.content);
          return;
        }
      }
    } catch (error) {
      console.log('Base de données non disponible, utilisation du localStorage');
    }

    // Fallback vers localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEYS[pageId]);
      if (saved) {
        setPageData(JSON.parse(saved));
      } else {
        setPageData({});
      }
    } catch (e) {
      console.error("Failed to load page data", e);
      setPageData({});
    }
  };

  const savePageData = async () => {
    setSaving(true);
    try {
      // Essayer d'abord la base de données
      try {
        const response = await fetch('/api/pages/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pagePath: PAGES.find(p => p.id === selectedPage)?.path,
            pageType: 'cms',
            content: pageData,
            metadata: {
              lastModified: new Date().toISOString(),
              modifiedBy: 'admin',
              pageId: selectedPage
            }
          })
        });

        if (response.ok) {
          console.log('Sauvegardé en base de données');
          setNotification("✅ Contenu sauvegardé en base de données !");
          window.dispatchEvent(new CustomEvent("contentUpdated"));
          setSaving(false);
          setTimeout(() => setNotification(""), 3000);
          return;
        }
      } catch (error) {
        console.log('Base de données non disponible, utilisation du localStorage');
      }

      // Fallback vers localStorage
      localStorage.setItem(STORAGE_KEYS[selectedPage], JSON.stringify(pageData));
      setNotification("✅ Contenu sauvegardé en localStorage !");
      window.dispatchEvent(new CustomEvent("contentUpdated"));
    } catch (e) {
      console.error("Failed to save page data", e);
      setNotification("❌ Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const updateField = (path, value) => {
    const keys = path.split(".");
    const newData = { ...pageData };
    let current = newData;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setPageData(newData);
  };

  const renderPageEditor = () => {
    switch (selectedPage) {
      case "declarationImpots":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Déclaration d'impôts</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page déclaration d'impôts"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <TextInput
                  label="Bouton CTA"
                  value={pageData.hero?.button || ""}
                  onChange={(value) => updateField("hero.button", value)}
                  placeholder="Texte du bouton"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Étapes de déclaration</h4>
                <ObjectArrayInput
                  label="Étapes"
                  items={pageData.declarationSteps || []}
                  onChange={(value) => updateField("declarationSteps", value)}
                  fields={[
                    { key: "step", label: "Numéro d'étape", placeholder: "1", type: "number" },
                    { key: "title", label: "Titre de l'étape", placeholder: "Rassemblement des documents" },
                    { key: "description", label: "Description", placeholder: "Collectez tous vos justificatifs", type: "textarea" }
                  ]}
                />
                
                <h4 className="text-md font-medium text-[#112033] mb-3 mt-6">Documents requis</h4>
                <ArrayInput
                  label="Liste des documents (un par ligne)"
                  value={pageData.documentsRequis || []}
                  onChange={(value) => updateField("documentsRequis", value)}
                  placeholder="Bulletins de salaire\nAttestations de revenus\nJustificatifs de charges"
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Informations complémentaires</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Délais de déclaration"
                  value={pageData.delais || ""}
                  onChange={(value) => updateField("delais", value)}
                  placeholder="Informations sur les délais..."
                />
                <WYSIWYGEditor
                  label="Sanctions en cas de retard"
                  value={pageData.sanctions || ""}
                  onChange={(value) => updateField("sanctions", value)}
                  placeholder="Détails des sanctions..."
                />
              </div>
            </div>
          </div>
        );

      case "tranchesBaremesPlafonds":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Tranches, barèmes et plafonds</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page barèmes"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Barème 2024</h4>
                <ObjectArrayInput
                  label="Tranches d'imposition"
                  items={pageData.bareme2024 || []}
                  onChange={(value) => updateField("bareme2024", value)}
                  fields={[
                    { key: "seuil", label: "Seuil (€)", placeholder: "0", type: "number" },
                    { key: "taux", label: "Taux (%)", placeholder: "0", type: "number" },
                    { key: "montant", label: "Montant (€)", placeholder: "0", type: "number" },
                    { key: "description", label: "Description", placeholder: "Jusqu'à" }
                  ]}
                />
                
                <h4 className="text-md font-medium text-[#112033] mb-3 mt-6">Plafonds importants</h4>
                <ObjectArrayInput
                  label="Plafonds"
                  items={pageData.plafonds || []}
                  onChange={(value) => updateField("plafonds", value)}
                  fields={[
                    { key: "nom", label: "Nom du plafond", placeholder: "Plafond de la Sécurité sociale" },
                    { key: "montant", label: "Montant (€)", placeholder: "0", type: "number" },
                    { key: "description", label: "Description", placeholder: "Explication du plafond", type: "textarea" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Informations complémentaires</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Notes importantes"
                  value={pageData.notes || ""}
                  onChange={(value) => updateField("notes", value)}
                  placeholder="Notes sur les barèmes..."
                />
                <WYSIWYGEditor
                  label="Évolutions prévues"
                  value={pageData.evolutions || ""}
                  onChange={(value) => updateField("evolutions", value)}
                  placeholder="Changements à venir..."
                />
              </div>
            </div>
          </div>
        );

      case "loisFiscales":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Lois fiscales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page lois fiscales"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Lois immobilières</h4>
                <ObjectArrayInput
                  label="Lois fiscales immobilières"
                  items={pageData.loisImmobilieres || []}
                  onChange={(value) => updateField("loisImmobilieres", value)}
                  fields={[
                    { key: "name", label: "Nom complet", placeholder: "Loi Pinel" },
                    { key: "shortName", label: "Nom court", placeholder: "Pinel" },
                    { key: "description", label: "Description", placeholder: "Réduction d'impôt pour investissement immobilier neuf", type: "textarea" },
                    { key: "avantage", label: "Avantage principal", placeholder: "Réduction d'impôt de 21%" },
                    { key: "duree", label: "Durée d'engagement", placeholder: "6, 9 ou 12 ans" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Détails des lois</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Conditions d'éligibilité"
                  value={pageData.conditionsEligibilite || ""}
                  onChange={(value) => updateField("conditionsEligibilite", value)}
                  placeholder="Conditions générales..."
                />
                <WYSIWYGEditor
                  label="Limitations et restrictions"
                  value={pageData.limitations || ""}
                  onChange={(value) => updateField("limitations", value)}
                  placeholder="Limites et restrictions..."
                />
              </div>
            </div>
          </div>
        );

      case "reductionsImpotDeficitFoncier":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Réductions d'impôt et déficit foncier</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page réductions"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Chiffres clés</h4>
                <ObjectArrayInput
                  label="Statistiques importantes"
                  items={pageData.quickStats?.stats || []}
                  onChange={(value) => updateField("quickStats.stats", value)}
                  fields={[
                    { key: "label", label: "Label", placeholder: "Réduction max" },
                    { key: "value", label: "Valeur", placeholder: "21%" },
                    { key: "description", label: "Description", placeholder: "Loi Pinel" }
                  ]}
                />
                
                <h4 className="text-md font-medium text-[#112033] mb-3 mt-6">Types de réductions</h4>
                <ObjectArrayInput
                  label="Réductions d'impôt"
                  items={pageData.reductions || []}
                  onChange={(value) => updateField("reductions", value)}
                  fields={[
                    { key: "nom", label: "Nom", placeholder: "Loi Pinel" },
                    { key: "taux", label: "Taux de réduction", placeholder: "21%" },
                    { key: "description", label: "Description", placeholder: "Détails de la réduction", type: "textarea" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Déficit foncier</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Définition du déficit foncier"
                  value={pageData.definitionDeficit || ""}
                  onChange={(value) => updateField("definitionDeficit", value)}
                  placeholder="Explication du déficit foncier..."
                />
                <WYSIWYGEditor
                  label="Conditions de report"
                  value={pageData.conditionsReport || ""}
                  onChange={(value) => updateField("conditionsReport", value)}
                  placeholder="Conditions de report du déficit..."
                />
              </div>
            </div>
          </div>
        );

      case "fiscalitePlacements":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Fiscalité des placements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page fiscalité placements"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Types de placements</h4>
                <ObjectArrayInput
                  label="Placements et leur fiscalité"
                  items={pageData.placementTypes?.items || []}
                  onChange={(value) => updateField("placementTypes.items", value)}
                  fields={[
                    { key: "name", label: "Nom du placement", placeholder: "Livret A" },
                    { key: "type", label: "Type", placeholder: "Épargne réglementée" },
                    { key: "fiscalite", label: "Fiscalité", placeholder: "Exonéré d'impôt", type: "textarea" },
                    { key: "taux", label: "Taux de rendement", placeholder: "3%" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Comparaison fiscale</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="PFU vs TMI"
                  value={pageData.pfuVsTmi || ""}
                  onChange={(value) => updateField("pfuVsTmi", value)}
                  placeholder="Comparaison PFU vs TMI..."
                />
                <WYSIWYGEditor
                  label="Optimisations possibles"
                  value={pageData.optimisations || ""}
                  onChange={(value) => updateField("optimisations", value)}
                  placeholder="Stratégies d'optimisation..."
                />
              </div>
            </div>
          </div>
        );

      case "pfu":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Prélèvement Forfaitaire Unique (PFU)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page PFU"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Composition du taux</h4>
                <ObjectArrayInput
                  label="Taux PFU"
                  items={pageData.taux?.items || []}
                  onChange={(value) => updateField("taux.items", value)}
                  fields={[
                    { key: "revenu", label: "Type de revenu", placeholder: "Dividendes" },
                    { key: "taux", label: "Taux (%)", placeholder: "12.8", type: "number" },
                    { key: "details", label: "Détails", placeholder: "Impôt sur le revenu" }
                  ]}
                />
                
                <h4 className="text-md font-medium text-[#112033] mb-3 mt-6">Seuils et conditions</h4>
                <ObjectArrayInput
                  label="Conditions d'application"
                  items={pageData.conditions || []}
                  onChange={(value) => updateField("conditions", value)}
                  fields={[
                    { key: "condition", label: "Condition", placeholder: "Revenus < 50 000€" },
                    { key: "description", label: "Description", placeholder: "Explication de la condition", type: "textarea" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Avantages et inconvénients</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ArrayInput
                  label="Avantages du PFU (un par ligne)"
                  value={pageData.avantages || []}
                  onChange={(value) => updateField("avantages", value)}
                  placeholder="Taux fixe et prévisible\nSimplicité de calcul"
                />
                <ArrayInput
                  label="Inconvénients du PFU (un par ligne)"
                  value={pageData.inconvenients || []}
                  onChange={(value) => updateField("inconvenients", value)}
                  placeholder="Pas de déduction des charges\nTaux non progressif"
                />
              </div>
            </div>
          </div>
        );

      case "tmiPrelevementsSociaux":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">TMI et prélèvements sociaux</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page TMI"
                />
                <WYSIWYGEditor
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Barème TMI</h4>
                <ObjectArrayInput
                  label="Tranches TMI"
                  items={pageData.tmi?.bareme || []}
                  onChange={(value) => updateField("tmi.bareme", value)}
                  fields={[
                    { key: "seuil", label: "Seuil", placeholder: "Jusqu'à 11 294€" },
                    { key: "taux", label: "Taux", placeholder: "0%" },
                    { key: "description", label: "Description", placeholder: "Pas d'impôt" }
                  ]}
                />
                
                <h4 className="text-md font-medium text-[#112033] mb-3 mt-6">Prélèvements sociaux</h4>
                <ObjectArrayInput
                  label="Taux des prélèvements"
                  items={pageData.prelevementsSociaux || []}
                  onChange={(value) => updateField("prelevementsSociaux", value)}
                  fields={[
                    { key: "nom", label: "Nom", placeholder: "CSG" },
                    { key: "taux", label: "Taux (%)", placeholder: "9.2", type: "number" },
                    { key: "description", label: "Description", placeholder: "Contribution sociale généralisée" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Calcul et optimisation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Méthode de calcul"
                  value={pageData.methodeCalcul || ""}
                  onChange={(value) => updateField("methodeCalcul", value)}
                  placeholder="Explication du calcul TMI..."
                />
                <WYSIWYGEditor
                  label="Stratégies d'optimisation"
                  value={pageData.strategiesOptimisation || ""}
                  onChange={(value) => updateField("strategiesOptimisation", value)}
                  placeholder="Comment optimiser sa TMI..."
                />
              </div>
            </div>
          </div>
        );

      case "defiscalisationCasSpecifiques":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Défiscalisation cas spéciaux</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page défiscalisation"
                />
                <TextArea
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  rows={4}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Cas spéciaux</h4>
                <ObjectArrayInput
                  label="Cas de défiscalisation"
                  items={pageData.casSpecifiques?.items || []}
                  onChange={(value) => updateField("casSpecifiques.items", value)}
                  fields={[
                    { key: "nom", label: "Nom", placeholder: "Défiscalisation outre-mer" },
                    { key: "description", label: "Description", placeholder: "Dispositifs spécifiques pour les investissements en outre-mer", type: "textarea" },
                    { key: "avantage", label: "Avantage fiscal", placeholder: "Réduction d'impôt de X%" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Informations détaillées</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextArea
                  label="Conditions spécifiques"
                  value={pageData.conditionsSpecifiques || ""}
                  onChange={(value) => updateField("conditionsSpecifiques", value)}
                  rows={4}
                  placeholder="Conditions particulières..."
                />
                <TextArea
                  label="Risques et précautions"
                  value={pageData.risques || ""}
                  onChange={(value) => updateField("risques", value)}
                  rows={4}
                  placeholder="Risques à connaître..."
                />
              </div>
            </div>
          </div>
        );

      case "autreFiscalite":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Autre fiscalité</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Hero Section</h4>
                <TextInput
                  label="Titre"
                  value={pageData.hero?.title || ""}
                  onChange={(value) => updateField("hero.title", value)}
                  placeholder="Titre de la page autre fiscalité"
                />
                <TextArea
                  label="Sous-titre"
                  value={pageData.hero?.subtitle || ""}
                  onChange={(value) => updateField("hero.subtitle", value)}
                  rows={4}
                  placeholder="Description de la page"
                />
                <ImageInput
                  label="Image hero"
                  value={pageData.hero?.image || ""}
                  onChange={(value) => updateField("hero.image", value)}
                />
              </div>
              
              <div>
                <h4 className="text-md font-medium text-[#112033] mb-3">Sujets fiscaux</h4>
                <ObjectArrayInput
                  label="Sujets fiscaux divers"
                  items={pageData.sujets?.items || []}
                  onChange={(value) => updateField("sujets.items", value)}
                  fields={[
                    { key: "nom", label: "Nom", placeholder: "Impôt sur la Fortune Immobilière (IFI)" },
                    { key: "description", label: "Description", placeholder: "Taxe sur le patrimoine immobilier net", type: "textarea" },
                    { key: "seuil", label: "Seuil (€)", placeholder: "1 300 000", type: "number" },
                    { key: "taux", label: "Taux (%)", placeholder: "0.5 à 1.5", type: "number" }
                  ]}
                />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-[#112033] mb-3">Détails et conseils</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WYSIWYGEditor
                  label="Points importants"
                  value={pageData.pointsImportants || ""}
                  onChange={(value) => updateField("pointsImportants", value)}
                  placeholder="Points clés à retenir..."
                />
                <WYSIWYGEditor
                  label="Conseils d'optimisation"
                  value={pageData.conseils || ""}
                  onChange={(value) => updateField("conseils", value)}
                  placeholder="Conseils pour optimiser..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page non reconnue</div>;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#112033]">CMS — Fiscalité</h1>
        <div className="flex gap-2">
          <button
            onClick={() => {
              // Populate test data for current page
              const testData = {
                hero: {
                  title: "Tranches, barèmes et plafonds - Test CMS",
                  subtitle: "**Comprenez** le fonctionnement du barème progressif de l'impôt sur le revenu. \n\n*Découvrez* les seuils, taux et calculs pour optimiser votre fiscalité.\n\n> **Note importante** : Ces informations sont mises à jour régulièrement.\n\n- Point clé 1\n- Point clé 2\n- Point clé 3",
                  image: "/images/fiscalite-hero.jpg"
                },
                bareme2024: [
                  { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
                  { seuil: 11294, taux: 11, montant: 0, description: "De" },
                  { seuil: 28797, taux: 30, montant: 1930, description: "De" },
                  { seuil: 82341, taux: 41, montant: 16072, description: "De" },
                  { seuil: 177106, taux: 45, montant: 38845, description: "Au-delà de" }
                ],
                plafonds: [
                  {
                    nom: "Plafond du quotient familial",
                    montant: 1592,
                    description: "Limite de réduction d'impôt pour les enfants à charge et autres personnes à charge."
                  },
                  {
                    nom: "Plafond Pinel",
                    montant: 300000,
                    description: "Montant maximum d'investissement pour bénéficier de la réduction d'impôt Pinel."
                  },
                  {
                    nom: "Plafond CSE",
                    montant: 3000,
                    description: "Plafond annuel pour les avantages en nature et chèques cadeaux du CSE."
                  }
                ],
                notes: "## Notes importantes sur les barèmes\n\n**Attention** : Les seuils peuvent varier selon votre situation familiale.\n\n*Rappel* : Le calcul se fait par tranches successives.\n\n> **Conseil** : Utilisez notre simulateur pour un calcul précis.\n\n1. Vérifiez vos parts fiscales\n2. Consultez les seuils de l'année\n3. Calculez impôt par tranche",
                evolutions: "## Évolutions prévues pour 2025\n\n**Changements annoncés** :\n\n- *Indexation* des seuils sur l'inflation\n- **Nouveaux** plafonds pour certaines réductions\n- > **Réforme** en cours de discussion\n\n### Détails des modifications\n\n`Code fiscal` : Articles en cours de révision\n\n[En savoir plus](https://www.impots.gouv.fr)",
              };
              setPageData(testData);
            }}
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            Données de test
          </button>
          <button
            onClick={savePageData}
            className="px-4 py-2 rounded bg-[#4EBBBD] text-white disabled:opacity-60"
            disabled={saving}
          >
            {saving ? "Sauvegarde…" : "Sauvegarder"}
          </button>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 ${
          notification.includes("✅") ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
          {notification}
        </div>
      )}

      {/* Page Selection */}
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          {PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPage(page.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPage === page.id
                  ? "bg-[#4EBBBD] text-white"
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              {page.name}
            </button>
          ))}
        </div>
      </div>

      {/* Page Editor */}
      <div className="min-h-[600px]">
        {renderPageEditor()}
      </div>

      {/* Debug Section */}
      <div className="border-t border-gray-200 pt-4">
        <details className="text-sm">
          <summary className="cursor-pointer text-[#686868] hover:text-[#112033]">
            Debug: Voir les données actuelles
          </summary>
          <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-40">
            {JSON.stringify(pageData, null, 2)}
          </pre>
        </details>
      </div>

      {/* Page Preview Link */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-[#686868] mb-2">
          Page sélectionnée : <strong>{PAGES.find(p => p.id === selectedPage)?.name}</strong>
        </p>
        <a
          href={PAGES.find(p => p.id === selectedPage)?.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4EBBBD] hover:underline text-sm"
        >
          Voir la page en cours →
        </a>
      </div>
    </div>
  );
} 