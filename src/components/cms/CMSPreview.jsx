"use client";
import React, { useState, useEffect } from 'react';

// Real-time Preview Component for CMS
export default function CMSPreview({ pageSlug, content, isVisible }) {
  const [previewContent, setPreviewContent] = useState(content);

  useEffect(() => {
    setPreviewContent(content);
  }, [content]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Preview Header */}
        <div className="bg-gray-100 px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Prévisualisation - {pageSlug}
          </h3>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
              Temps réel
            </span>
            <button
              onClick={() => window.close()}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
            >
              Fermer
            </button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="space-y-8">
            {/* Hero Section Preview */}
            {previewContent.hero && (
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">
                  {previewContent.hero.title || 'Titre par défaut'}
                </h1>
                <p className="text-xl mb-4">
                  {previewContent.hero.subtitle || 'Sous-titre par défaut'}
                </p>
                <p className="text-lg mb-6 opacity-90">
                  {previewContent.hero.description || 'Description par défaut'}
                </p>
                <button 
                  className="px-6 py-3 rounded-lg font-semibold"
                  style={{ 
                    backgroundColor: previewContent.hero.ctaColor || '#B99066' 
                  }}
                >
                  {previewContent.hero.ctaButton || 'Bouton CTA'}
                </button>
                {previewContent.hero.backgroundImage && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                )}
              </div>
            )}

            {/* Services Section Preview */}
            {previewContent.services && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {previewContent.services.servicesTitle || 'Services'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.isArray(previewContent.services.servicesList) && 
                   previewContent.services.servicesList.map((service, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advantages Section Preview */}
            {previewContent.advantages && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {previewContent.advantages.advantagesTitle || 'Avantages'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(previewContent.advantages.advantagesList) && 
                   previewContent.advantages.advantagesList.map((advantage, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">{advantage.title}</h3>
                      <p className="text-blue-700">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Section Preview */}
            {previewContent.process && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {previewContent.process.processTitle || 'Processus'}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {Array.isArray(previewContent.process.processSteps) && 
                   previewContent.process.processSteps.map((step, index) => (
                    <div key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {previewContent.process.processTimeline && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                      <strong>Durée estimée :</strong> {previewContent.process.processTimeline}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Testimonials Section Preview */}
            {previewContent.testimonials && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {previewContent.testimonials.testimonialsTitle || 'Témoignages'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(previewContent.testimonials.testimonialsList) && 
                   previewContent.testimonials.testimonialsList.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
                      <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section Preview */}
            {previewContent.cta && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">
                  {previewContent.cta.ctaTitle || 'Titre CTA'}
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  {previewContent.cta.ctaText || 'Texte CTA'}
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                  {previewContent.cta.ctaButton || 'Bouton CTA'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
