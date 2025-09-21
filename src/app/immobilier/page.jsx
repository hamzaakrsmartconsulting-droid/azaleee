"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImmobilierPage() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Load CMS content first
        const cmsResponse = await fetch('/api/cms/content/immobilier');
        let cmsSections = [];
        if (cmsResponse.ok) {
          cmsSections = await cmsResponse.json();
        }

        // Default content that matches the CMS structure
        const defaultContent = {
          hero: {
            title: "Investissement Immobilier",
            subtitle: "Construisez votre patrimoine avec l'immobilier",
            description: "Découvrez nos solutions d'investissement immobilier pour faire fructifier votre patrimoine et réduire vos impôts.",
            backgroundImage: "/images/immobilier-hero.webp",
            ctaButton: "Découvrir nos solutions"
          },
          intro: {
            introTitle: "Pourquoi investir dans l'immobilier ?",
            introText: "L'immobilier reste l'un des investissements les plus sûrs et rentables. Avec nos conseils d'experts, optimisez votre stratégie patrimoniale.",
            introImage: "/images/immobilier-intro.webp"
          },
          services: {
            servicesTitle: "Nos Services Immobilier",
            servicesList: [
              { name: "Investissement Locatif", description: "Générez des revenus réguliers", icon: "🏠" },
              { name: "Défiscalisation", description: "Réduisez vos impôts légalement", icon: "💰" },
              { name: "Conseil en Acquisition", description: "Trouvez le bien idéal", icon: "🔍" },
              { name: "Gestion Locative", description: "Gérez vos biens sans contraintes", icon: "📋" }
            ]
          },
          advantages: {
            advantagesTitle: "Les Avantages de l'Immobilier",
            advantagesList: [
              { title: "Rendement Stable", description: "Revenus locatifs réguliers et prévisibles" },
              { title: "Plus-value", description: "Appréciation de la valeur du bien dans le temps" },
              { title: "Défiscalisation", description: "Réduction d'impôts grâce aux dispositifs fiscaux" },
              { title: "Diversification", description: "Équilibrage de votre portefeuille d'investissements" }
            ]
          },
          process: {
            processTitle: "Notre Processus d'Accompagnement",
            processSteps: [
              { step: "1", title: "Analyse", description: "Étude de votre situation et de vos objectifs" },
              { step: "2", title: "Recherche", description: "Identification des opportunités d'investissement" },
              { step: "3", title: "Acquisition", description: "Négociation et acquisition du bien" },
              { step: "4", title: "Gestion", description: "Suivi et optimisation de votre investissement" }
            ]
          },
          testimonials: {
            testimonialsTitle: "Nos Clients Témoignent",
            testimonialsList: [
              { name: "Marie L.", text: "Grâce à Azalée, j'ai pu diversifier mon patrimoine avec des investissements immobiliers rentables.", rating: 5 },
              { name: "Pierre M.", text: "Un accompagnement professionnel qui m'a permis d'optimiser ma fiscalité immobilière.", rating: 5 }
            ]
          },
          cta: {
            ctaTitle: "Prêt à Investir dans l'Immobilier ?",
            ctaText: "Contactez nos experts pour une consultation personnalisée et découvrez comment optimiser votre patrimoine immobilier.",
            ctaButton: "Demander une consultation"
          }
        };

        // Merge CMS content with default content
        const mergedContent = { ...defaultContent };
        
        cmsSections.forEach(section => {
          try {
            const sectionData = JSON.parse(section.content_data);
            mergedContent[section.section_name] = {
              ...mergedContent[section.section_name],
              ...sectionData
            };
          } catch (error) {
            console.error(`Error parsing section ${section.section_name}:`, error);
          }
        });

        console.log('Immobilier Page - Loaded content:', mergedContent);
        setContent(mergedContent);
      } catch (e) {
        console.error("Failed to fetch immobilier page content:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();

    // Listen for content updates
    const handleContentUpdate = () => {
      console.log('Immobilier Page - Content update detected, reloading...');
      fetchContent();
    };

    window.addEventListener('contentUpdated', handleContentUpdate);
    
    // Also listen for localStorage changes (for cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key === 'cms_content_updated') {
        console.log('Immobilier Page - Cross-tab content update detected, reloading...');
        fetchContent();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('contentUpdated', handleContentUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) return <div className="text-center py-10">Chargement du contenu...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Erreur: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${content.hero?.backgroundImage || '/images/immobilier-hero.webp'})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{content.hero?.title || "Investissement Immobilier"}</h1>
          <p className="text-xl mb-6">{content.hero?.subtitle || "Construisez votre patrimoine avec l'immobilier"}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            {content.hero?.ctaButton || "Découvrir nos solutions"}
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.intro?.introTitle || "Pourquoi investir dans l'immobilier ?"}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {content.intro?.introText || "L'immobilier reste l'un des investissements les plus sûrs et rentables. Avec nos conseils d'experts, optimisez votre stratégie patrimoniale."}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src={content.intro?.introImage || "/images/immobilier-intro.webp"} 
              alt="Immobilier Introduction" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.services?.servicesTitle || "Nos Services Immobilier"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.services?.servicesList || []).map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{service.icon || "🏠"}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.advantages?.advantagesTitle || "Les Avantages de l'Immobilier"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.advantages?.advantagesList || []).map((advantage, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{advantage.title}</h3>
                <p className="text-blue-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.process?.processTitle || "Notre Processus d'Accompagnement"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.process?.processSteps || []).map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.testimonials?.testimonialsTitle || "Nos Clients Témoignent"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.testimonials?.testimonialsList || []).map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">{content.cta?.ctaTitle || "Prêt à Investir dans l'Immobilier ?"}</h2>
          <p className="text-xl mb-8">{content.cta?.ctaText || "Contactez nos experts pour une consultation personnalisée et découvrez comment optimiser votre patrimoine immobilier."}</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            {content.cta?.ctaButton || "Demander une consultation"}
          </button>
        </div>
      </section>
    </div>
  );
}