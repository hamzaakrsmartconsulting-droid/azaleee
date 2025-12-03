'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CMSManagementPage() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPage, setNewPage] = useState({ path: '', title: '', content: {} });
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchPages();
    
    // Check if there's a path parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('path');
    if (pathParam) {
      fetchPageContent(pathParam);
    }
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/cms/pages');
      const data = await response.json();
      if (data.success) {
        setPages(data.data);
      }
    } catch (error) {
      console.error('Error fetching pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPageContent = async (path) => {
    try {
      const response = await fetch(`/api/cms/pages?path=${encodeURIComponent(path)}`);
      const data = await response.json();
      if (data.success) {
        setSelectedPage(data.data);
        setFormData(data.data.content || {});
      }
    } catch (error) {
      console.error('Error fetching page content:', error);
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, field, index, value) => {
    setFormData(prev => {
      const newArray = [...(prev[section]?.[field] || [])];
      newArray[index] = value;
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray
        }
      };
    });
  };

  const addArrayItem = (section, field) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...(prev[section]?.[field] || []), '']
      }
    }));
  };

  const removeArrayItem = (section, field, index) => {
    setFormData(prev => {
      const newArray = [...(prev[section]?.[field] || [])];
      newArray.splice(index, 1);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray
        }
      };
    });
  };

  const handleSave = async () => {
    if (!selectedPage) return;

    try {
      const response = await fetch('/api/cms/pages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          path: selectedPage.path,
          content: formData
        })
      });

      const data = await response.json();
      if (data.success) {
        alert('✅ Page updated successfully!');
        fetchPages();
        fetchPageContent(selectedPage.path);
      } else {
        alert('❌ Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error saving page:', error);
      alert('❌ Error saving page');
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/cms/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          path: newPage.path,
          title: newPage.title,
          content: newPage.content
        })
      });

      const data = await response.json();
      if (data.success) {
        alert('✅ Page created successfully!');
        setShowCreateModal(false);
        setNewPage({ path: '', title: '', content: {} });
        fetchPages();
      } else {
        alert('❌ Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error creating page:', error);
      alert('❌ Error creating page');
    }
  };

  const handleDelete = async (path) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    try {
      const response = await fetch(`/api/cms/pages?path=${encodeURIComponent(path)}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (data.success) {
        alert('✅ Page deleted successfully!');
        setSelectedPage(null);
        fetchPages();
      } else {
        alert('❌ Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('❌ Error deleting page');
    }
  };

  const renderFormField = (section, field, label, type = 'text', isArray = false) => {
    const value = formData[section]?.[field];
    
    if (isArray && Array.isArray(value)) {
      // Check if array contains objects
      const isObjectArray = value.length > 0 && typeof value[0] === 'object' && value[0] !== null && !Array.isArray(value[0]);
      
      if (isObjectArray) {
        // Render object array with individual fields for each property
        return (
          <div>
            <label className="block text-sm font-cairo font-semibold text-[#253F60] dark:text-[#B99066] mb-2">
              {label}
            </label>
            <div className="space-y-4">
              {value.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Item {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeArrayItem(section, field, index)}
                      className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm font-inter font-semibold"
                      title="Remove item"
                    >
                      ✕ Remove
                    </button>
                  </div>
                  <div className="space-y-3">
                    {Object.keys(item || {}).map((key) => (
                      <div key={key}>
                        <label className="block text-xs font-cairo font-semibold text-[#253F60] dark:text-[#B99066] mb-1">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                        {key.toLowerCase().includes('description') || key.toLowerCase().includes('content') ? (
                          <textarea
                            value={item[key] || ''}
                            onChange={(e) => {
                              const newArray = [...value];
                              newArray[index] = { ...newArray[index], [key]: e.target.value };
                              setFormData(prev => ({
                                ...prev,
                                [section]: {
                                  ...prev[section],
                                  [field]: newArray
                                }
                              }));
                            }}
                            rows={3}
                            className="w-full px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] resize-y transition-all font-inter bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            placeholder={`Enter ${key}...`}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item[key] || ''}
                            onChange={(e) => {
                              const newArray = [...value];
                              newArray[index] = { ...newArray[index], [key]: e.target.value };
                              setFormData(prev => ({
                                ...prev,
                                [section]: {
                                  ...prev[section],
                                  [field]: newArray
                                }
                              }));
                            }}
                            className="w-full px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            placeholder={`Enter ${key}...`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                // Add new object with same structure as first item
                const newItem = value.length > 0 
                  ? Object.keys(value[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
                  : { title: '', description: '' };
                setFormData(prev => ({
                  ...prev,
                  [section]: {
                    ...prev[section],
                    [field]: [...(prev[section]?.[field] || []), newItem]
                  }
                }));
              }}
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white rounded-lg hover:from-[#1a2d47] hover:to-[#253F60] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm font-cairo font-semibold"
            >
              + Add Item
            </button>
          </div>
        );
      }
      
      // Render simple string array
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
          <div className="space-y-2">
            {value.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type={type}
                  value={typeof item === 'string' ? item : ''}
                  onChange={(e) => handleArrayChange(section, field, index, e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder={`Item ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(section, field, index)}
                  className="px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-inter font-semibold"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => addArrayItem(section, field)}
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white rounded-lg hover:from-[#1a2d47] hover:to-[#253F60] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm font-cairo font-semibold"
          >
            + Add Item
          </button>
        </div>
      );
    }

    return (
      <div>
        <label className="block text-sm font-cairo font-semibold text-[#253F60] dark:text-[#B99066] mb-2">
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            value={value || ''}
            onChange={(e) => handleInputChange(section, field, e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#253F60] dark:focus:ring-[#B99066] focus:border-transparent resize-y bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder={`Enter ${label.toLowerCase()}...`}
          />
        ) : (
          <input
            type={type}
            value={value || ''}
            onChange={(e) => handleInputChange(section, field, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#253F60] dark:focus:ring-[#B99066] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder={`Enter ${label.toLowerCase()}...`}
          />
        )}
      </div>
    );
  };

  const renderNestedSection = (sectionKey, sectionData, title) => {
    if (!sectionData || typeof sectionData !== 'object') return null;

    return (
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 mb-6 border-2 border-[#253F60]/20 dark:border-gray-700 shadow-lg">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#B99066]/30 dark:border-gray-700">
          <div className="w-1 h-8 bg-gradient-to-b from-[#253F60] to-[#B99066] rounded-full"></div>
          <h3 className="text-xl font-cairo font-bold text-[#253F60] dark:text-[#B99066]">{title}</h3>
        </div>
        <div className="space-y-4">
          {Object.keys(sectionData).map((field) => {
            const value = sectionData[field];
            const label = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
            
            if (Array.isArray(value)) {
              return (
                <div key={field} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  {renderFormField(sectionKey, field, label, 'text', true)}
                </div>
              );
            } else if (typeof value === 'object' && value !== null) {
              // Check if it's an array (shouldn't happen here, but just in case)
              if (Array.isArray(value)) {
                return (
                  <div key={field}>
                    {renderFormField(sectionKey, field, label, 'text', true)}
                  </div>
                );
              }
              
              // Check if object contains nested objects (objects within objects)
              const hasNestedObjects = Object.values(value).some(v => 
                typeof v === 'object' && v !== null && !Array.isArray(v)
              );
              
              if (hasNestedObjects) {
                // Recursively render nested objects
                return (
                  <div key={field} className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-[#253F60]/20 dark:border-gray-700 shadow-sm">
                    <h4 className="text-md font-medium text-[#253F60] dark:text-[#B99066] mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">{label}</h4>
                    <div className="space-y-3">
                      {Object.keys(value).map((subField) => {
                        const subValue = value[subField];
                        const subLabel = subField.charAt(0).toUpperCase() + subField.slice(1).replace(/([A-Z])/g, ' $1');
                        
                        if (Array.isArray(subValue)) {
                          return (
                            <div key={subField}>
                              {renderFormField(sectionKey, `${field}.${subField}`, subLabel, 'text', true)}
                            </div>
                          );
                        } else if (typeof subValue === 'object' && subValue !== null) {
                          // Nested object - render recursively
                          return (
                            <div key={subField} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                              <h5 className="text-sm font-semibold text-[#253F60] dark:text-[#B99066] mb-2">{subLabel}</h5>
                              <div className="space-y-2">
                                {Object.keys(subValue).map((nestedField) => {
                                  const nestedValue = subValue[nestedField];
                                  const nestedLabel = nestedField.charAt(0).toUpperCase() + nestedField.slice(1).replace(/([A-Z])/g, ' $1');
                                  
                                  if (Array.isArray(nestedValue)) {
                                    return (
                                      <div key={nestedField}>
                                        {renderFormField(sectionKey, `${field}.${subField}.${nestedField}`, nestedLabel, 'text', true)}
                                      </div>
                                    );
                                  }
                                  
                                  return (
                                    <div key={nestedField}>
                                      <label className="block text-xs font-cairo font-semibold text-[#253F60] mb-1">
                                        {nestedLabel}
                                      </label>
                                      {typeof nestedValue === 'string' && nestedValue.length > 100 ? (
                                        <textarea
                                          value={nestedValue || ''}
                                          onChange={(e) => {
                                            setFormData(prev => ({
                                              ...prev,
                                              [sectionKey]: {
                                                ...prev[sectionKey],
                                                [field]: {
                                                  ...prev[sectionKey]?.[field],
                                                  [subField]: {
                                                    ...prev[sectionKey]?.[field]?.[subField],
                                                    [nestedField]: e.target.value
                                                  }
                                                }
                                              }
                                            }));
                                          }}
                                          rows={3}
                                          className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] resize-y text-sm transition-all font-inter"
                                          placeholder={nestedLabel}
                                        />
                                      ) : (
                                        <input
                                          type="text"
                                          value={nestedValue || ''}
                                          onChange={(e) => {
                                            setFormData(prev => ({
                                              ...prev,
                                              [sectionKey]: {
                                                ...prev[sectionKey],
                                                [field]: {
                                                  ...prev[sectionKey]?.[field],
                                                  [subField]: {
                                                    ...prev[sectionKey]?.[field]?.[subField],
                                                    [nestedField]: e.target.value
                                                  }
                                                }
                                              }
                                            }));
                                          }}
                                          className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] text-sm transition-all font-inter"
                                          placeholder={nestedLabel}
                                        />
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        }
                        
                        // Simple string or number value
                        return (
                          <div key={subField}>
                            <label className="block text-sm font-cairo font-semibold text-[#253F60] mb-2">
                              {subLabel}
                            </label>
                            {typeof subValue === 'string' && subValue.length > 100 ? (
                              <textarea
                                value={subValue || ''}
                                onChange={(e) => {
                                  setFormData(prev => ({
                                    ...prev,
                                    [sectionKey]: {
                                      ...prev[sectionKey],
                                      [field]: {
                                        ...prev[sectionKey]?.[field],
                                        [subField]: e.target.value
                                      }
                                    }
                                  }));
                                }}
                                rows={3}
                                className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] resize-y transition-all font-inter"
                                placeholder={subLabel}
                              />
                            ) : (
                              <input
                                type="text"
                                value={subValue || ''}
                                onChange={(e) => {
                                  setFormData(prev => ({
                                    ...prev,
                                    [sectionKey]: {
                                      ...prev[sectionKey],
                                      [field]: {
                                        ...prev[sectionKey]?.[field],
                                        [subField]: e.target.value
                                      }
                                    }
                                  }));
                                }}
                                className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter"
                                placeholder={subLabel}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              
              // Simple object with only string/number values
              return (
                <div key={field} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-md font-medium text-[#253F60] dark:text-[#B99066] mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">{label}</h4>
                  <div className="space-y-3">
                    {Object.keys(value).map((subField) => {
                      const subValue = value[subField];
                      const subLabel = subField.charAt(0).toUpperCase() + subField.slice(1).replace(/([A-Z])/g, ' $1');
                      
                      if (Array.isArray(subValue)) {
                        return (
                          <div key={subField}>
                            {renderFormField(sectionKey, `${field}.${subField}`, subLabel, 'text', true)}
                          </div>
                        );
                      }
                      
                      return (
                        <div key={subField}>
                          <label className="block text-sm font-cairo font-semibold text-[#253F60] mb-2">
                            {subLabel}
                          </label>
                          {typeof subValue === 'string' && subValue.length > 100 ? (
                            <textarea
                              value={subValue || ''}
                              onChange={(e) => {
                                setFormData(prev => ({
                                  ...prev,
                                  [sectionKey]: {
                                    ...prev[sectionKey],
                                    [field]: {
                                      ...prev[sectionKey]?.[field],
                                      [subField]: e.target.value
                                    }
                                  }
                                }));
                              }}
                              rows={3}
                              className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] resize-y transition-all font-inter"
                              placeholder={subLabel}
                            />
                          ) : (
                            <input
                              type="text"
                              value={subValue || ''}
                              onChange={(e) => {
                                setFormData(prev => ({
                                  ...prev,
                                  [sectionKey]: {
                                    ...prev[sectionKey],
                                    [field]: {
                                      ...prev[sectionKey]?.[field],
                                      [subField]: e.target.value
                                    }
                                  }
                                }));
                              }}
                              className="w-full px-4 py-3 border-2 border-[#253F60]/30 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter"
                              placeholder={subLabel}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              const isLongText = typeof value === 'string' && value.length > 100;
              return (
                <div key={field} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  {renderFormField(sectionKey, field, label, isLongText ? 'textarea' : 'text')}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#253F60] to-[#1a2d47] dark:from-gray-900 dark:to-gray-800">
        <div className="text-lg text-white font-cairo">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-6 mb-6 text-white dark:text-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-cairo font-bold mb-2 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Content Management System
              </h1>
              <p className="text-gray-200 dark:text-gray-300">Gérez tout le contenu de vos pages visuellement</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-[#B99066] to-[#A67C52] text-white px-6 py-3 rounded-lg hover:from-[#A67C52] hover:to-[#B99066] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-cairo font-semibold"
            >
              + Créer une nouvelle page
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pages List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-[#253F60]/20 dark:border-gray-700">
              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] dark:from-gray-800 dark:to-gray-900 p-4 rounded-t-xl">
                <h2 className="text-lg font-cairo font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pages ({pages.length})
                </h2>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {pages.length === 0 ? (
                  <div className="p-8 text-center">
                    <svg className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 font-inter">Aucune page trouvée. Créez-en une pour commencer.</p>
                  </div>
                ) : (
                  pages.map((page) => (
                    <div
                      key={page._id}
                      className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-200 ${
                        selectedPage?.path === page.path 
                          ? 'bg-gradient-to-r from-[#253F60]/10 to-[#B99066]/10 dark:from-[#253F60]/20 dark:to-[#B99066]/20 border-l-4 border-[#B99066]' 
                          : 'hover:bg-gradient-to-r hover:from-[#253F60]/5 hover:to-transparent dark:hover:from-gray-700 dark:hover:to-transparent'
                      }`}
                      onClick={() => fetchPageContent(page.path)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-cairo font-semibold text-[#253F60] dark:text-[#B99066]">{page.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-inter">{page.path}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span
                              className={`text-xs px-2 py-1 rounded font-inter ${
                                page.published
                                  ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200'
                                  : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200'
                              }`}
                            >
                              {page.published ? 'Publié' : 'Brouillon'}
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-inter">
                              {new Date(page.lastModified).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(page.path);
                          }}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-2 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="Supprimer"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Visual Editor */}
          <div className="lg:col-span-2">
            {selectedPage ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-[#253F60]/20 dark:border-gray-700">
                <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] dark:from-gray-800 dark:to-gray-900 p-4 rounded-t-xl sticky top-0 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-cairo font-bold text-white flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        {selectedPage.title}
                      </h2>
                      <p className="text-sm text-gray-200 mt-1 font-inter">{selectedPage.path}</p>
                    </div>
                    <button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-[#B99066] to-[#A67C52] text-white px-6 py-3 rounded-lg hover:from-[#A67C52] hover:to-[#B99066] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-cairo font-semibold flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                      </svg>
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
                <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {formData && Object.keys(formData).length > 0 ? (
                    Object.keys(formData).map((sectionKey) => {
                      const section = formData[sectionKey];
                      const sectionTitle = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1).replace(/([A-Z])/g, ' $1');
                      return (
                        <div key={sectionKey}>
                          {renderNestedSection(sectionKey, section, sectionTitle)}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gradient-to-br from-[#253F60]/10 to-[#B99066]/10 dark:from-[#253F60]/20 dark:to-[#B99066]/20 rounded-xl p-8 border-2 border-[#253F60]/20 dark:border-gray-700">
                        <svg className="w-16 h-16 text-[#253F60] dark:text-[#B99066] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-cairo font-bold text-[#253F60] dark:text-[#B99066] mb-2">Aucune section de contenu trouvée</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-inter">Commencez l'édition pour ajouter du contenu</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl border-2 border-[#253F60]/20 dark:border-gray-700 p-12 text-center">
                <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] dark:from-gray-700 dark:to-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] dark:text-[#B99066] mb-2">Sélectionnez une page à modifier</h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">Choisissez une page dans la liste à gauche pour commencer l'édition</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 border-2 border-[#253F60]/20 dark:border-gray-700">
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] dark:from-gray-800 dark:to-gray-900 -m-6 mb-6 p-4 rounded-t-xl">
              <h2 className="text-xl font-cairo font-bold text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Créer une nouvelle page
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-cairo font-semibold text-[#253F60] dark:text-[#B99066] mb-2">Chemin</label>
                <input
                  type="text"
                  value={newPage.path}
                  onChange={(e) => setNewPage({ ...newPage, path: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="ex: placements/assurance-vie"
                />
              </div>
              <div>
                <label className="block text-sm font-cairo font-semibold text-[#253F60] dark:text-[#B99066] mb-2">Titre</label>
                <input
                  type="text"
                  value={newPage.title}
                  onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B99066] focus:border-[#B99066] transition-all font-inter bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Titre de la page"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-3 border-2 border-[#253F60]/30 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-cairo font-semibold text-[#253F60] dark:text-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleCreate}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white rounded-lg hover:from-[#1a2d47] hover:to-[#253F60] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-cairo font-semibold"
              >
                Créer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
