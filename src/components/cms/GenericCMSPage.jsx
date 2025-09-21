"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Generic CMS Component for all pages with enhanced dynamic features
export default function GenericCMSPage({ pageSlug, pageTitle, sections, defaultContent }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const router = useRouter();

  useEffect(() => {
    loadContent();
  }, [pageSlug]);

  useEffect(() => {
    // Filter sections based on search term
    if (searchTerm) {
      const filtered = sections.filter(section => 
        section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSections(filtered);
    } else {
      setFilteredSections(sections);
    }
  }, [searchTerm, sections]);

  const loadContent = async () => {
    try {
      setLoading(true);
      
      // Load CMS content
      const cmsResponse = await fetch(`/api/cms/content?page=${pageSlug}`);
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Merge CMS sections with default content
      const mergedSections = sections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = defaultContent[section.id] || {};
        
        // Ensure cmsData is always a valid object
        let cmsData = {};
        if (cmsSection?.content_data) {
          try {
            cmsData = JSON.parse(cmsSection.content_data);
            if (typeof cmsData !== 'object' || cmsData === null) {
              cmsData = {};
            }
          } catch (error) {
            console.error(`Error parsing CMS data for section ${section.id}:`, error);
            cmsData = {};
          }
        }
        
        return {
          ...section,
          cmsData: cmsData,
          currentData: currentSectionContent,
          hasCmsContent: !!cmsSection && Object.keys(cmsData).length > 0,
          hasCurrentContent: Object.keys(currentSectionContent).length > 0,
          lastModified: cmsSection?.updated_at || null
        };
      });

      setContent(mergedSections);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section.id);
    const dataToEdit = section.hasCmsContent ? section.cmsData : section.currentData;
    setFormData(dataToEdit);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/cms/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: pageSlug,
          section: editingSection,
          data: formData
        }),
      });

      const responseData = await response.json();
      
      if (response.ok) {
        await loadContent();
        setEditingSection(null);
        setFormData({});
        
        // Trigger content update events
        window.dispatchEvent(new CustomEvent('contentUpdated'));
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('cms_content_updated', Date.now().toString());
        }
        
        // Show success notification
        showNotification('Contenu sauvegardé avec succès!', 'success');
      } else {
        showNotification('Erreur lors de la sauvegarde: ' + (responseData.message || 'Unknown error'), 'error');
      }
    } catch (error) {
      console.error('Error saving:', error);
      showNotification('Erreur lors de la sauvegarde: ' + error.message, 'error');
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

  const showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
      type === 'success' ? 'bg-green-500' : 
      type === 'error' ? 'bg-red-500' : 
      'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const applyTemplate = (template) => {
    setFormData(prev => ({
      ...prev,
      ...template
    }));
    showNotification('Template appliqué avec succès!', 'success');
  };

  const resetToDefault = () => {
    const section = content.find(s => s.id === editingSection);
    if (section) {
      setFormData(section.currentData);
      showNotification('Contenu réinitialisé aux valeurs par défaut', 'info');
    }
  };

  const renderField = (field) => {
    const value = formData[field.key] || '';
    
    if (field.type === 'textarea') {
      return (
        <div className="space-y-2">
          <textarea
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
            rows={field.rows || 4}
            placeholder={`Saisissez ${field.label.toLowerCase()}...`}
          />
          {field.help && (
            <p className="text-sm text-gray-500">{field.help}</p>
          )}
        </div>
      );
    }
    
    if (field.type === 'select') {
      return (
        <div className="space-y-2">
          <select
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
          >
            <option value="">Sélectionnez une option...</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {field.help && (
            <p className="text-sm text-gray-500">{field.help}</p>
          )}
        </div>
      );
    }

    if (field.type === 'json') {
      return (
        <div className="space-y-2">
          <textarea
            value={typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleInputChange(field.key, parsed);
              } catch {
                handleInputChange(field.key, e.target.value);
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD] font-mono text-sm"
            rows={8}
            placeholder="Format JSON valide..."
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => {
                try {
                  const parsed = JSON.parse(value);
                  handleInputChange(field.key, JSON.stringify(parsed, null, 2));
                } catch {
                  showNotification('JSON invalide', 'error');
                }
              }}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
            >
              Formater JSON
            </button>
            <button
              type="button"
              onClick={() => {
                try {
                  const parsed = JSON.parse(value);
                  showNotification('JSON valide ✓', 'success');
                } catch (e) {
                  showNotification('JSON invalide: ' + e.message, 'error');
                }
              }}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
            >
              Valider JSON
            </button>
          </div>
          {field.help && (
            <p className="text-sm text-gray-500">{field.help}</p>
          )}
        </div>
      );
    }

    if (field.type === 'image') {
      return (
        <div className="space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
            placeholder="URL de l'image ou chemin..."
          />
          {value && (
            <div className="mt-2">
              <img
                src={value}
                alt="Preview"
                className="max-w-xs h-32 object-cover rounded border"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          {field.help && (
            <p className="text-sm text-gray-500">{field.help}</p>
          )}
        </div>
      );
    }

    if (field.type === 'color') {
      return (
        <div className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="color"
              value={value || '#000000'}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
              placeholder="#000000"
            />
          </div>
          {field.help && (
            <p className="text-sm text-gray-500">{field.help}</p>
          )}
        </div>
      );
    }
    
    return (
      <div className="space-y-2">
        <input
          type={field.type}
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
          placeholder={`Saisissez ${field.label.toLowerCase()}...`}
        />
        {field.help && (
          <p className="text-sm text-gray-500">{field.help}</p>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des sections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/images/azalee-logo.png"
                alt="Azalée Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#112033]">CMS {pageTitle}</h1>
                <p className="text-gray-600">Gestion du contenu de la page {pageTitle.toLowerCase()}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Retour Dashboard
              </button>
              <button
                onClick={() => window.open(`/${pageSlug}`, '_blank')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D]"
              >
                Voir Page
              </button>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`px-4 py-2 rounded-md ${
                  previewMode ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'
                } hover:opacity-80`}
              >
                {previewMode ? 'Mode Édition' : 'Prévisualisation'}
              </button>
              <button
                onClick={loadContent}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Recharger
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une section..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {filteredSections.map((section) => {
            const isEditing = editingSection === section.id;
            
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-[#112033]">{section.name}</h3>
                        <div className="flex space-x-2">
                          {section.hasCmsContent && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              Modifié
                            </span>
                          )}
                          {section.lastModified && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              {new Date(section.lastModified).toLocaleDateString('fr-FR')}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{section.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      {!isEditing ? (
                        <button
                          onClick={() => handleEdit(section)}
                          className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D] text-sm"
                        >
                          Modifier
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                          >
                            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 text-sm"
                          >
                            Annuler
                          </button>
                          <button
                            onClick={resetToDefault}
                            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-sm"
                          >
                            Reset
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-6">
                      {/* Quick Templates */}
                      {section.templates && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-3">Templates rapides :</h4>
                          <div className="flex flex-wrap gap-2">
                            {section.templates.map((template, index) => (
                              <button
                                key={index}
                                onClick={() => applyTemplate(template.data)}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                              >
                                {template.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Form Fields */}
                      <div className="grid gap-4">
                        {section.fields.map((field) => (
                          <div key={field.key}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </label>
                            {renderField(field)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Status indicators */}
                      <div className="flex gap-2 text-xs">
                        {section.hasCmsContent && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                            Contenu CMS sauvegardé
                          </span>
                        )}
                        {section.hasCurrentContent && !section.hasCmsContent && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                            Contenu par défaut
                          </span>
                        )}
                        {!section.hasCurrentContent && !section.hasCmsContent && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                            Aucun contenu
                          </span>
                        )}
                      </div>

                      {/* Content Preview */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Aperçu du contenu :</h4>
                        <div className="space-y-2">
                          {(() => {
                            const dataToShow = section.hasCmsContent ? section.cmsData : section.currentData;
                            if (!dataToShow || typeof dataToShow !== 'object') {
                              return (
                                <div className="text-sm text-gray-500 italic">
                                  Aucun contenu disponible
                                </div>
                              );
                            }
                            return Object.entries(dataToShow).map(([key, value]) => (
                              <div key={key} className="text-sm">
                                <span className="font-medium text-gray-700">{key}:</span>
                                <div className="text-gray-600 mt-1">
                                  {typeof value === 'object' && value !== null ? (
                                    <pre className="whitespace-pre-wrap text-xs bg-white p-2 rounded border">
                                      {JSON.stringify(value, null, 2)}
                                    </pre>
                                  ) : (
                                    <span>{String(value || '').substring(0, 200)}
                                    {String(value || '').length > 200 && '...'}</span>
                                  )}
                                </div>
                              </div>
                            ));
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
