'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PFUCMS() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // PFU sections configuration
  const pfuSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et description',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' }
      ]
    },
    {
      id: 'content',
      name: 'Contenu Principal',
      description: 'Sections de contenu détaillé',
      fields: [
        { key: 'sections', label: 'Sections (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'cta',
      name: 'Call-to-Action',
      description: 'Section d\'appel à l\'action',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    }
  ];

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      const cmsResponse = await fetch('/api/cms/content/pfu');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      const currentContent = {
        hero: {
          title: "PFU - Prélèvement Forfaitaire Unique",
          description: "Comprendre le PFU pour optimiser la fiscalité de vos placements financiers. Découvrez les avantages et inconvénients de ce régime fiscal."
        },
        content: {
          sections: [
            {
              title: "Qu'est-ce que le PFU ?",
              content: "Le Prélèvement Forfaitaire Unique est un régime fiscal simplifié pour les placements financiers."
            }
          ]
        },
    cta: {
          title: "Optimisez votre fiscalité avec le PFU",
          description: "Nos experts vous conseillent sur l'opportunité du PFU pour votre situation.",
          buttonText: "Demander une analyse"
        }
      };

      const mergedSections = pfuSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = currentContent[section.id] || {};
        
        return {
          ...section,
          cmsData: cmsSection?.content_data ? JSON.parse(cmsSection.content_data) : {},
          currentData: currentSectionContent,
          hasCmsContent: !!cmsSection,
          hasCurrentContent: Object.keys(currentSectionContent).length > 0
        };
      });

      setSections(mergedSections);
    } catch (error) {
      console.error('Error loading PFU sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section.id);
    const dataToEdit = section.hasCurrentContent ? section.currentData : section.cmsData;
    setFormData(dataToEdit);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/cms/content/pfu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: editingSection,
          data: formData
        }),
      });

      if (response.ok) {
        await loadSections();
        setEditingSection(null);
        setFormData({});
        
        window.dispatchEvent(new CustomEvent('contentUpdated'));
        
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('cms_content_updated', Date.now().toString());
        }
        
        alert('Contenu PFU sauvegardé avec succès!');
      } else {
        const responseData = await response.json();
        alert('Erreur lors de la sauvegarde: ' + (responseData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving PFU content:', error);
      alert('Erreur lors de la sauvegarde: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingSection(null);
    setFormData({});
  };

  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (loading) {
      return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du CMS PFU...</p>
          </div>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Retour au Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">CMS PFU</h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={loadSections}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Recharger CMS
              </button>
            <button
                onClick={() => window.open('http://localhost:4028/fiscalite/pfu', '_blank')}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
              >
                Voir la Page
            </button>
          </div>
            </div>
          </div>
        </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
            <div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
            </div>
                <div className="flex space-x-2">
                  {!editingSection && (
                    <button
                      onClick={() => handleEdit(section)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Modifier
                    </button>
                  )}
          </div>
        </div>

              {editingSection === section.id ? (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {section.fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={field.key.includes('JSON') ? 6 : 3}
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        ) : (
                          <input
                            type="text"
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        )}
              </div>
            ))}
        </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                    >
                      {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
          </div>
        </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-2 text-xs">
                    {section.hasCurrentContent && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                        Contenu actuel affiché
                      </span>
                    )}
                    {section.hasCmsContent && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        Sauvegardé dans CMS
                      </span>
                    )}
                    {!section.hasCurrentContent && !section.hasCmsContent && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        Aucun contenu
                      </span>
                    )}
        </div>

                  {section.hasCurrentContent ? (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Contenu actuellement affiché :</h4>
                      <div className="space-y-2">
                        {Object.entries(section.currentData).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <div className="text-gray-600 mt-1">
                              {typeof value === 'object' ? (
                                <pre className="whitespace-pre-wrap text-xs bg-white p-2 rounded border">
                                  {JSON.stringify(value, null, 2)}
                                </pre>
                              ) : (
                                <span>{String(value).substring(0, 200)}
                                {String(value).length > 200 && '...'}</span>
                              )}
          </div>
              </div>
            ))}
          </div>
        </div>
                  ) : (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        ⚠️ Cette section utilise le contenu par défaut. Cliquez sur "Modifier" pour personnaliser le contenu.
                      </p>
            </div>
                  )}
          </div>
        )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
