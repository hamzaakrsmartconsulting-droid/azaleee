'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CMSAutreFiscalite() {
  const router = useRouter();
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const autreFiscaliteSections = {
    hero: {
      title: 'Hero Section',
      fields: [
        { key: 'title', label: 'Titre principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'backgroundImage', label: 'Image de fond', type: 'text' },
        { key: 'ctaText', label: 'Texte du bouton', type: 'text' },
        { key: 'ctaLink', label: 'Lien du bouton', type: 'text' }
      ]
    },
    stats: {
      title: 'Statistiques',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'items', label: 'Éléments de statistiques', type: 'array', 
          subFields: [
            { key: 'number', label: 'Nombre', type: 'text' },
            { key: 'label', label: 'Libellé', type: 'text' },
            { key: 'description', label: 'Description', type: 'text' }
          ]
        }
      ]
    },
    avantages: {
      title: 'Avantages',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'items', label: 'Liste des avantages', type: 'array',
          subFields: [
            { key: 'title', label: 'Titre', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'icon', label: 'Icône', type: 'text' }
          ]
        }
      ]
    },
    conditions: {
      title: 'Conditions',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'items', label: 'Liste des conditions', type: 'array',
          subFields: [
            { key: 'condition', label: 'Condition', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' }
          ]
        }
      ]
    },
    cta: {
      title: 'Call to Action',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'primaryButton', label: 'Bouton principal', type: 'text' },
        { key: 'secondaryButton', label: 'Bouton secondaire', type: 'text' }
      ]
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/pages/autre-fiscalite');
      if (response.ok) {
        const data = await response.json();
        setContent(data.content || {});
      }
    } catch (error) {
      console.error('Erreur lors du chargement du contenu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/cms/content/autre-fiscalite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setMessage('Contenu sauvegardé avec succès !');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      setMessage('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const updateContent = (section, field, value, index = null) => {
    setContent(prev => {
      const newContent = { ...prev };
      if (!newContent[section]) newContent[section] = {};
      
      if (index !== null) {
        if (!newContent[section][field]) newContent[section][field] = [];
        newContent[section][field][index] = value;
      } else {
        newContent[section][field] = value;
      }
      return newContent;
    });
  };

  const addArrayItem = (section, field) => {
    const sectionConfig = autreFiscaliteSections[section];
    const fieldConfig = sectionConfig.fields.find(f => f.key === field);
    const newItem = {};
    
    fieldConfig.subFields.forEach(subField => {
      newItem[subField.key] = '';
    });

    setContent(prev => {
      const newContent = { ...prev };
      if (!newContent[section]) newContent[section] = {};
      if (!newContent[section][field]) newContent[section][field] = [];
      newContent[section][field].push(newItem);
      return newContent;
    });
  };

  const removeArrayItem = (section, field, index) => {
    setContent(prev => {
      const newContent = { ...prev };
      if (newContent[section] && newContent[section][field]) {
        newContent[section][field].splice(index, 1);
      }
      return newContent;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du contenu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CMS - Autre Fiscalité</h1>
              <p className="text-gray-600">Gérez le contenu de la page Autre Fiscalité</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => router.push('/fiscalite/autre-fiscalite')}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Voir la page
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] transition-colors disabled:opacity-50"
              >
                {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
            </div>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}

          <div className="space-y-8">
            {Object.entries(autreFiscaliteSections).map(([sectionKey, sectionConfig]) => (
              <div key={sectionKey} className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{sectionConfig.title}</h2>
                
                {sectionConfig.fields.map(field => (
                  <div key={field.key} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        value={content[sectionKey]?.[field.key] || ''}
                        onChange={(e) => updateContent(sectionKey, field.key, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        rows={4}
                      />
                    ) : field.type === 'array' ? (
                      <div>
                        {(content[sectionKey]?.[field.key] || []).map((item, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="font-medium text-gray-900">Élément {index + 1}</h4>
                              <button
                                onClick={() => removeArrayItem(sectionKey, field.key, index)}
                                className="text-red-600 hover:text-red-800 text-sm"
                              >
                                Supprimer
                              </button>
                            </div>
                            {field.subFields.map(subField => (
                              <div key={subField.key} className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  {subField.label}
                                </label>
                                {subField.type === 'textarea' ? (
                                  <textarea
                                    value={item[subField.key] || ''}
                                    onChange={(e) => updateContent(sectionKey, field.key, e.target.value, index)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                                    rows={3}
                                  />
                                ) : (
                                  <input
                                    type="text"
                                    value={item[subField.key] || ''}
                                    onChange={(e) => updateContent(sectionKey, field.key, e.target.value, index)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem(sectionKey, field.key)}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                        >
                          + Ajouter un élément
                        </button>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={content[sectionKey]?.[field.key] || ''}
                        onChange={(e) => updateContent(sectionKey, field.key, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}