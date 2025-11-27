"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  Filler
} from 'chart.js';
import { Line, Bar as ChartBar } from 'react-chartjs-2';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartTooltip,
  ChartLegend,
  Filler
);

// Token Mapbox (à remplacer par votre token dans les variables d'environnement)
// Pour les tests, vous devez obtenir un token gratuit sur https://account.mapbox.com/
// Créez un fichier .env.local avec: NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_ici
if (typeof window !== 'undefined') {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
}

// Composants SVG pour les pictos (style contour brun sur fond dégradé)
const IconWrapper = ({ children, size = 24 }) => (
  <div className={`w-${size} h-${size} bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-md`}>
    {children}
  </div>
);

const PercentIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5L5 19M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LightningIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoneyIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V16M9 12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const KeyIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2L19 4M7 20L5 22M15 8L17 6M19 4L17 6M19 4L21 6M17 6L15 8M13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BuildingIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M5 21V7L12 3L19 7V21M9 9V13M15 9V13M9 17V21M15 17V21" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartUpIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoveIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8 2 5 5 5 9C5 13 8 16 12 16C16 16 19 13 19 9C19 5 16 2 12 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V22M8 20L12 22L16 20" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartDownIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7L9 13L13 9L21 17M21 17H15M21 17V11" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HouseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompassIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#8B4513" strokeWidth="2"/>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="#8B4513" strokeWidth="2"/>
    <path d="M21 21L16.65 16.65" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LightbulbIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2091 7.79086 13 10 13H14C16.2091 13 18 11.2091 18 9C18 5.68629 15.3137 3 12 3Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13V17" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H19" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartBarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21M7 16L11 12L15 16L21 10M21 10H17M21 10V14" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20V20H6.5C5.83696 20 5.20107 19.7366 4.73223 19.2678C4.26339 18.7989 4 18.163 4 17.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalculatorIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="#8B4513" strokeWidth="2"/>
    <path d="M8 6H16M8 10H16M8 14H12M8 18H12" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BrainIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8 2 6 5 6 9C6 11 7 13 9 14C9 16 10 18 12 18C14 18 15 16 15 14C17 13 18 11 18 9C18 5 16 2 12 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14C9 16 10 18 12 18C14 18 15 16 15 14" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiamondIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeafIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20C7.13401 20 4 16.866 4 13C4 9.13401 7.13401 6 11 6C14.866 6 18 9.13401 18 13C18 16.866 14.866 20 11 20Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 6C11 3 13 2 15 2C17 2 19 3 19 6" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HandshakeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 12H9C8.44772 12 8 12.4477 8 13V15C8 15.5523 8.44772 16 9 16H11M11 12H13C13.5523 12 14 12.4477 14 13V15C14 15.5523 13.5523 16 13 16H11M11 12V8C11 7.44772 11.4477 7 12 7H13C13.5523 7 14 7.44772 14 8V12" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12V8C7 7.44772 7.44772 7 8 7H9C9.55228 7 10 7.44772 10 8V12" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FlowerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="#8B4513" strokeWidth="2"/>
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function ImmobilierPage() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [propertyType, setPropertyType] = useState('appartement');
  const [marketData, setMarketData] = useState(null);
  const [loadingMarketData, setLoadingMarketData] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [mapError, setMapError] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);

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
    return () => {
      window.removeEventListener('contentUpdated', handleContentUpdate);
    };
  }, []);

  // Initialiser la carte Mapbox quand les données sont disponibles
  useEffect(() => {
    if (!mapContainer.current || !marketData || !selectedCity) {
      return;
    }

    // Réinitialiser l'erreur
    setMapError(null);

    // Coordonnées approximatives pour quelques villes françaises
    const cityCoordinates = {
      'lyon': [4.8357, 45.7640],
      'paris': [2.3522, 48.8566],
      'marseille': [5.3698, 43.2965],
      'toulouse': [1.4442, 43.6047],
      'nice': [7.2619, 43.7102],
      'nantes': [-1.5536, 47.2184],
      'strasbourg': [7.7521, 48.5734],
      'montpellier': [3.8772, 43.6108],
      'bordeaux': [-0.5792, 44.8378],
      'lille': [3.0573, 50.6292]
    };

    // Trouver les coordonnées de la ville (approximation simple)
    const cityLower = selectedCity.toLowerCase();
    let coordinates = [2.3522, 48.8566]; // Paris par défaut
    
    for (const [city, coords] of Object.entries(cityCoordinates)) {
      if (cityLower.includes(city) || cityLower.includes(city.substring(0, 3))) {
        coordinates = coords;
        break;
      }
    }

    // Nettoyer la carte existante si elle existe
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    // Attendre un peu pour s'assurer que le conteneur est prêt
    const initMap = () => {
      if (!mapContainer.current) {
        console.log('Map container not ready');
        return;
      }

      // Vérifier si le token est configuré
      if (!mapboxgl.accessToken || mapboxgl.accessToken.includes('eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ')) {
        console.warn('Mapbox token may be invalid. Please configure NEXT_PUBLIC_MAPBOX_TOKEN');
        setMapError('Token Mapbox non configuré. Obtenez un token gratuit sur https://account.mapbox.com/');
        return;
      }

      try {
        console.log('Initializing Mapbox with coordinates:', coordinates);
        
        // Initialiser la carte
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: coordinates,
          zoom: 12,
          attributionControl: false
        });

        // Attendre que la carte soit chargée
        map.current.on('load', () => {
          console.log('Map loaded successfully');
          // Ajouter un marqueur
          new mapboxgl.Marker({ color: '#B99066' })
            .setLngLat(coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`
                  <div style="padding: 8px; font-family: Inter, sans-serif;">
                    <h3 style="font-weight: bold; color: #253F60; margin-bottom: 4px; font-size: 14px;">${selectedCity}</h3>
                    <p style="font-size: 12px; color: #374151; margin: 2px 0;">Prix moyen: ${marketData.prixMoyen.toLocaleString('fr-FR')} €/m²</p>
                    <p style="font-size: 12px; color: #374151; margin: 2px 0;">Évolution: +${marketData.evolution12mois}%</p>
                  </div>
                `)
            )
            .addTo(map.current);
        });

        // Gérer les erreurs
        map.current.on('error', (e) => {
          console.error('Mapbox error:', e);
          if (e.error && e.error.message) {
            setMapError(`Erreur Mapbox: ${e.error.message}`);
          } else {
            setMapError('Erreur lors du chargement de la carte. Vérifiez votre token Mapbox.');
          }
        });
      } catch (error) {
        console.error('Error initializing Mapbox:', error);
        setMapError(`Impossible d'initialiser la carte: ${error.message}`);
      }
    };

    // Petit délai pour s'assurer que le DOM est prêt
    const timeoutId = setTimeout(initMap, 200);

    // Nettoyer à la destruction
    return () => {
      clearTimeout(timeoutId);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [marketData, selectedCity]);

  if (loading) return <div className="text-center py-10">Chargement du contenu...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Erreur: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left card */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Image d'arrière-plan */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/architecte.webp"
                  alt="Architecte"
                  fill
                  className="object-cover"
                  style={{
                    transform: 'scale(1.15)',
                    opacity: 0.4
                  }}
                  priority
                />
              </div>
              
              {/* Overlay pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-white/50 z-0"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
                  Investir dans l'immobilier avec Azalée Patrimoine
                </h1>
                <p className="text-[#686868] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  L'immobilier, pilier de votre indépendance financière et de la transmission familiale. Chez Azalée Patrimoine, nous considérons l'immobilier comme un socle fondamental d'un patrimoine équilibré : tangible, résilient et porteur de sens. Notre rôle est de transformer vos projets immobiliers — qu'ils soient locatifs, neufs ou patrimoniaux — en véritables stratégies d'enrichissement à long terme, intégrant rendement, fiscalité et transmission.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                    className="inline-flex items-center justify-center bg-[#B99066] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors"
                  >
                    Demandez votre audit patrimonial personnalisé
          </button>
                  <a href="#pourquoi-investir" className="inline-flex items-center justify-center bg-transparent border-2 border-[#253F60] text-[#253F60] px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#253F60] hover:text-white transition-colors">
                    Découvrir nos solutions
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right card */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg p-6 sm:p-8 text-white relative overflow-visible min-h-[300px]">
              {/* Cercle en coin de bloc */}
              <div className="absolute -top-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="text-3xl sm:text-4xl font-cairo font-bold text-white mb-1">
                      61,2%
                    </div>
                    <p className="text-[9px] sm:text-[11px] font-inter font-semibold text-white leading-tight">
                      des français
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contenu principal */}
              <div className="relative z-10 pt-2">
                <p className="text-base sm:text-lg font-inter font-medium mb-8 leading-relaxed pr-24 sm:pr-32">
                  61.2% des français possèdent un ou plusieurs biens immobiliers.
                </p>
                
                <button 
                  onClick={() => alert('Téléchargement du guide')}
                  className="w-full bg-white text-[#253F60] px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#F9FAFB] transition-colors text-center text-sm sm:text-base shadow-md"
                >
                  Téléchargez le guide complet pour bâtir et optimiser votre patrimoine
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Pourquoi investir dans l'immobilier aujourd'hui ? */}
      <section id="pourquoi-investir" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Pourquoi investir dans l'immobilier aujourd'hui ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[#374151] leading-relaxed text-center">
              L'immobilier reste l'actif préféré des Français, et ce n'est pas un hasard :
            </p>

            {/* Statistique principale */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 sm:p-10 lg:p-12 text-white text-center shadow-xl">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-cairo mb-4 text-[#B99066]">
                61,2%
          </div>
              <p className="text-xl sm:text-2xl font-inter font-semibold mb-2">
                des ménages possèdent un bien immobilier
              </p>
              <p className="text-sm sm:text-base text-white/80 font-inter">
                INSEE 2024
              </p>
            </div>

            {/* Points clés en grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#F9FAFB] rounded-lg p-6 border-l-4 border-[#B99066] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <IconWrapper size={12}>
                    <PercentIcon size={20} />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Rendement locatif brut moyen
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      <strong className="text-[#253F60]">5 à 6 %</strong>, voire plus selon la localisation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg p-6 border-l-4 border-[#B99066] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <IconWrapper size={12}>
                    <LightningIcon size={20} />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Effet de levier du crédit immobilier
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Investir <strong className="text-[#253F60]">sans mobiliser tout son capital</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg p-6 border-l-4 border-[#B99066] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <IconWrapper size={12}>
                    <MoneyIcon size={20} />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Fiscalité avantageuse
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Via des dispositifs spécifiques (<strong className="text-[#253F60]">LMNP, Pinel, déficit foncier…</strong>).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg p-6 border-l-4 border-[#B99066] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <IconWrapper size={12}>
                    <ShieldIcon size={20} />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Protection et transmission
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Protection contre l'inflation et création d'un <strong className="text-[#253F60]">actif transmissible</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mention SCPI */}
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-8 border-2 border-[#E5E7EB] mt-10">
              <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed italic text-center">
                "Mais il n'est pas toujours nécessaire d'acheter un bien en direct pour profiter du dynamisme immobilier : <strong className="text-[#253F60] font-semibold not-italic">les SCPI permettent d'accéder à la pierre autrement.</strong>"
              </p>
            </div>

            {/* Message Azalée */}
            <div className="text-center mt-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[#253F60] leading-relaxed font-medium">
                💬 Chez Azalée Patrimoine, nous intégrons chaque actif immobilier dans une vision globale — <strong className="font-semibold">financière, fiscale et humaine</strong> — pour bâtir la liberté patrimoniale de demain.
              </p>
            </div>
          </div>

          {/* CTA Formulaire Tally */}
          <div className="text-center mt-12">
            <p className="text-xl sm:text-2xl font-cairo font-semibold text-[#253F60] mb-6">
              📈 Découvrez quelle stratégie immobilière correspond à votre profil
            </p>
            <button 
              onClick={() => {
                // TODO: Remplacer par le lien du formulaire Tally une fois créé
                window.open('https://tally.so', '_blank');
              }}
              className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Faire le test de profil
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 : Investir dans les SCPI */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Investir dans les SCPI : la pierre sans les contraintes
            </h2>
                </div>

          <div className="max-w-4xl mx-auto space-y-10 mb-12">
            {/* Introduction */}
            <div className="text-center space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[#374151] leading-relaxed">
                Les <strong className="text-[#253F60] font-semibold">SCPI (Sociétés Civiles de Placement Immobilier)</strong> offrent la possibilité d'investir dans un portefeuille d'immeubles géré par des professionnels, <strong className="text-[#253F60] font-semibold">sans contrainte de gestion locative</strong>.
              </p>
              <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed">
                Elles constituent une <strong className="text-[#253F60] font-semibold">porte d'entrée idéale</strong> pour diversifier son patrimoine et générer des revenus réguliers.
              </p>
            </div>

            {/* Avantages clés en grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-md">
                    <KeyIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                      Accessibilité
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Ticket d'entrée dès <strong className="text-[#253F60]">quelques centaines d'euros</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-md">
                    <BuildingIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                      Diversification
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      <strong className="text-[#253F60]">Bureaux, commerces, santé, logistique</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-md">
                    <ChartUpIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                      Rendement attractif
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Entre <strong className="text-[#253F60]">4 % et 6 % net</strong> selon les SCPI en 2024.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-md">
                    <ShieldIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                      Gestion déléguée
                    </h3>
                    <p className="text-[#374151] font-inter leading-relaxed">
                      Vous percevez les loyers <strong className="text-[#253F60]">sans gérer les locataires</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemples de SCPI */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 sm:p-10 text-white shadow-xl mt-10">
              <h3 className="text-2xl font-cairo font-bold mb-6 text-center">
                Exemples de SCPI performantes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Amundi Immobilier', 'Corum Origin', 'Épargne Pierre', 'Primovie'].map((scpi, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20"
                  >
                    <p className="font-inter font-semibold text-sm sm:text-base">{scpi}</p>
              </div>
            ))}
              </div>
              <p className="text-center mt-6 text-white/80 text-sm font-inter italic">
                (liens vers la bibliothèque de partenaires où l'on pourrait avoir 1 fiche par partenaire)
              </p>
            </div>

            {/* Citation */}
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-8 border-l-4 border-[#B99066] shadow-md mt-10">
              <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed italic text-center">
                💬 "Avec les SCPI, vous profitez du potentiel de l'immobilier professionnel, <strong className="text-[#253F60] font-semibold not-italic">sans les soucis de la location</strong>."
              </p>
            </div>

            {/* Graphique comparatif Chart.js */}
            <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg mt-10">
              <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-6 text-center">
                📊 Rendement moyen des SCPI vs immobilier locatif direct
              </h3>
              <div className="h-80 sm:h-96">
                <ChartBar
                  data={{
                    labels: ['Rendement brut', 'Rendement net (après charges)', 'Rendement net fiscal', 'Rendement avec effet de levier'],
                    datasets: [
                      {
                        label: 'SCPI',
                        data: [4.6, 4.2, 3.5, 4.8],
                        backgroundColor: 'rgba(185, 144, 102, 0.8)',
                        borderColor: '#B99066',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                      },
                      {
                        label: 'Immobilier locatif direct',
                        data: [5.5, 4.0, 3.5, 6.2],
                        backgroundColor: 'rgba(37, 63, 96, 0.8)',
                        borderColor: '#253F60',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                      }
                    ]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top',
                        labels: {
                          font: {
                            family: 'Inter',
                            size: 14,
                            weight: '600'
                          },
                          color: '#374151',
                          padding: 15,
                          usePointStyle: true,
                          pointStyle: 'circle'
                        }
                      },
                      tooltip: {
                        backgroundColor: '#F9FAFB',
                        titleColor: '#253F60',
                        bodyColor: '#374151',
                        borderColor: '#E5E7EB',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: true,
                        callbacks: {
                          label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + ' %';
                          }
                        }
                      },
                      title: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 7,
                        ticks: {
                          callback: function(value) {
                            return value + ' %';
                          },
                          color: '#6B7280',
                          font: {
                            family: 'Inter',
                            size: 12
                          },
                          stepSize: 1
                        },
                        grid: {
                          color: '#E5E7EB',
                          drawBorder: false
                        },
                        title: {
                          display: true,
                          text: 'Rendement (%)',
                          color: '#374151',
                          font: {
                            family: 'Inter',
                            size: 13,
                            weight: '600'
                          }
                        }
                      },
                      x: {
                        ticks: {
                          color: '#6B7280',
                          font: {
                            family: 'Inter',
                            size: 12,
                            weight: '500'
                          }
                        },
                        grid: {
                          display: false
                        }
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-6 bg-gradient-to-r from-[#F9FAFB] to-white rounded-lg p-4 border-l-4 border-[#B99066]">
                <p className="text-sm font-inter text-[#374151] leading-relaxed">
                  💡 <strong className="text-[#253F60] font-semibold">Note Azalée</strong> : Les rendements varient selon le type de SCPI, la localisation du bien locatif et la fiscalité appliquée. L'effet de levier du crédit peut significativement améliorer la rentabilité de l'immobilier direct.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              👉 Comparez les meilleures SCPI du moment avec un conseiller Azalée
            </button>
          </div>
        </div>
      </section>

      {/* Section 5 : Rendement immobilier */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Rendement immobilier : ce que rapportent vraiment vos placements
            </h2>
            <h3 className="text-xl sm:text-2xl font-inter text-[#374151] font-medium max-w-3xl mx-auto leading-relaxed">
              Pour bâtir une stratégie équilibrée, il faut comparer le rendement brut, net de charges et net d'impôts.
            </h3>
          </div>

          {/* Tableau comparatif */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#E5E7EB]">
              {/* En-tête du tableau */}
              <div className="bg-gradient-to-r from-[#253F60] to-[#2d4a6b] text-white">
                <div className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-cairo font-bold text-lg sm:text-xl">Type d'investissement</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Rendement brut moyen</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Rendement net estimé</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Fiscalité principale</div>
                </div>
              </div>

              {/* Corps du tableau */}
              <div className="divide-y divide-[#E5E7EB]">
                {/* Immobilier locatif */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    Immobilier locatif
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-xl sm:text-2xl">
                    5,5 %
                  </div>
                  <div className="text-center font-inter font-semibold text-[#374151] text-lg sm:text-xl">
                    3,5 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Revenus fonciers
                  </div>
                </div>

                {/* SCPI */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200 bg-[#F9FAFB]/50">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    SCPI
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-xl sm:text-2xl">
                    4,6 %
                  </div>
                  <div className="text-center font-inter font-semibold text-[#374151] text-lg sm:text-xl">
                    3,8 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Revenus fonciers / IR
                  </div>
                </div>

                {/* Assurance vie */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    Assurance vie (fonds euros)
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-xl sm:text-2xl">
                    2,5 %
                  </div>
                  <div className="text-center font-inter font-semibold text-[#374151] text-lg sm:text-xl">
                    2 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Flat tax
                  </div>
                </div>

                {/* ETF immobilier */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200 bg-[#F9FAFB]/50">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    ETF immobilier
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-xl sm:text-2xl">
                    6 %
                  </div>
                  <div className="text-center font-inter font-semibold text-[#374151] text-lg sm:text-xl">
                    4,5 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Plus-values mobilières
                  </div>
                </div>
              </div>
            </div>

            {/* Astuce Azalée */}
            <div className="mt-10 bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-8 border-l-4 border-[#B99066] shadow-md">
              <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                💡 Astuce Azalée
              </h3>
              <p className="text-lg font-inter text-[#374151] leading-relaxed">
                Pensez à comparer les rendements <strong className="text-[#253F60] font-semibold">"ajustés du risque"</strong> : la SCPI offre une <strong className="text-[#253F60] font-semibold">meilleure stabilité de revenu</strong> que l'immobilier direct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : SCPI, LMNP, Pinel… quelle stratégie pour quel profil ? */}
      <section id="strategies" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              SCPI, LMNP, Pinel… quelle stratégie pour quel profil ?
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Chaque stratégie répond à un objectif patrimonial distinct. Azalée vous aide à définir la bonne combinaison selon votre horizon, votre fiscalité et votre appétence au risque.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Profil 1 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenProfile(openProfile === 1 ? null : 1)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center text-[#B99066] font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cairo font-bold text-[#253F60]">
                    "Je veux créer un capital sans contraintes"
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-[#B99066] transform transition-transform duration-300 ${
                      openProfile === 1 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openProfile === 1 && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-[#E5E7EB] pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-3"></div>
                    <div className="flex-1">
                      <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed mb-4">
                        <strong className="text-[#253F60] font-semibold">→ SCPI de rendement ou SCPI européennes.</strong>
                      </p>
                      <p className="text-base sm:text-lg font-inter text-[#6B7280] leading-relaxed">
                        Les SCPI vous permettent d'investir dans l'immobilier professionnel sans gérer de biens. Vous percevez des revenus réguliers (trimestriels) et bénéficiez d'une diversification géographique et sectorielle. Idéal pour ceux qui recherchent un placement passif et régulier.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profil 2 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenProfile(openProfile === 2 ? null : 2)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center text-[#B99066] font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cairo font-bold text-[#253F60]">
                    "Je veux réduire mes impôts"
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-[#B99066] transform transition-transform duration-300 ${
                      openProfile === 2 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openProfile === 2 && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-[#E5E7EB] pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-3"></div>
                    <div className="flex-1">
                      <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed mb-4">
                        <strong className="text-[#253F60] font-semibold">→ LMNP ou Pinel, selon le taux marginal d'imposition.</strong>
                      </p>
                      <p className="text-base sm:text-lg font-inter text-[#6B7280] leading-relaxed mb-4">
                        Le <strong className="text-[#253F60]">LMNP (Loueur Meublé Non Professionnel)</strong> permet de déduire l'amortissement du bien, réduisant significativement votre impôt sur le revenu. Le <strong className="text-[#253F60]">Pinel</strong> offre une réduction d'impôt jusqu'à 21% du prix d'acquisition sur 12 ans, sous conditions de location.
                      </p>
                      <p className="text-base sm:text-lg font-inter text-[#6B7280] leading-relaxed">
                        Le choix entre LMNP et Pinel dépend de votre TMI (Taux Marginal d'Imposition) et de votre horizon d'investissement.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profil 3 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenProfile(openProfile === 3 ? null : 3)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center text-[#B99066] font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cairo font-bold text-[#253F60]">
                    "Je veux transmettre et structurer"
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-[#B99066] transform transition-transform duration-300 ${
                      openProfile === 3 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openProfile === 3 && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-[#E5E7EB] pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-3"></div>
                    <div className="flex-1">
                      <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed mb-4">
                        <strong className="text-[#253F60] font-semibold">→ SCI à l'IS ou démembrement temporaire.</strong>
                      </p>
                      <p className="text-base sm:text-lg font-inter text-[#6B7280] leading-relaxed mb-4">
                        La <strong className="text-[#253F60]">SCI (Société Civile Immobilière)</strong> à l'IS permet de structurer votre patrimoine immobilier, de préparer la transmission et d'optimiser la fiscalité. Le <strong className="text-[#253F60]">démembrement temporaire</strong> permet de transmettre la nue-propriété tout en conservant l'usufruit, réduisant les droits de succession.
                      </p>
                      <p className="text-base sm:text-lg font-inter text-[#6B7280] leading-relaxed">
                        Ces structures sont particulièrement adaptées aux patrimoines importants et aux projets de transmission familiale.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message de conclusion */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl font-inter text-[#253F60] leading-relaxed font-medium">
              💬 Azalée vous aide à définir la bonne combinaison selon votre horizon, votre fiscalité et votre appétence au risque.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 : Crédits immobiliers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Crédits immobiliers : le levier le plus sous-estimé
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Contenu texte */}
              <div className="space-y-6">
                <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed">
                  L'immobilier est l'un des <strong className="text-[#253F60] font-semibold">rares actifs que l'on peut financer à crédit</strong>.
                </p>
                <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed">
                  Cet <strong className="text-[#253F60] font-semibold">effet de levier</strong> permet de se constituer un patrimoine <strong className="text-[#253F60] font-semibold">sans immobiliser tout son capital</strong>.
                </p>

                {/* Exemple concret */}
                <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg mt-8">
                  <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-4">
                    Exemple concret :
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-2"></div>
                      <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                        Un investissement de <strong className="text-[#253F60] font-semibold">200 000 €</strong> financé à <strong className="text-[#253F60] font-semibold">90 % par emprunt</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-2"></div>
                      <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                        Avec un <strong className="text-[#253F60] font-semibold">rendement locatif de 5 %</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-2"></div>
                      <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                        Permet de générer <strong className="text-[#253F60] font-semibold">plus de 60 000 € de capital net</strong> après 20 ans
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#B99066] rounded-full mt-2"></div>
                      <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                        Tout en profitant de la <strong className="text-[#253F60] font-semibold">déductibilité des intérêts d'emprunt</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Citation */}
                <div className="bg-gradient-to-r from-[#253F60] to-[#2d4a6b] rounded-xl p-6 sm:p-8 text-white shadow-xl mt-6">
                  <p className="text-lg sm:text-xl font-inter italic leading-relaxed text-center">
                    💬 "L'argent de la banque travaille pour vous : c'est la <strong className="text-[#B99066] font-semibold not-italic">magie du levier patrimonial</strong>."
                  </p>
                </div>
              </div>

              {/* Zone visuelle */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-8 sm:p-10 border-2 border-[#E5E7EB] shadow-xl">
                  <div className="aspect-square flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-inter text-[#6B7280] italic">
                        Illustration : main signant un dossier de prêt
                      </p>
                      <p className="text-xs font-inter text-[#9CA3AF]">
                        (Visuel à intégrer : photo ou illustration moderne)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  // TODO: Lien vers simulateur de financement immobilier
                  window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank');
                }}
                className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                👉 Simuler mon financement immobilier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 : Marché immobilier 2025 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Marché immobilier 2025 : opportunités et mutations
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="text-center mb-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[#374151] leading-relaxed">
                L'année 2024 marque un <strong className="text-[#253F60] font-semibold">tournant</strong> : baisse des prix dans certaines zones, remontée des taux, mais <strong className="text-[#253F60] font-semibold">forte tension locative</strong> dans les métropoles régionales.
              </p>
            </div>

            {/* Tendances clés en grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Paris et grandes métropoles */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center">
                    <ChartDownIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Paris et grandes métropoles
                    </h3>
                    <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                      Correction modérée <strong className="text-[#253F60] font-semibold">(-3 à -5 %)</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Villes moyennes */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center">
                    <ChartUpIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Villes moyennes
                    </h3>
                    <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                      Attractivité accrue <strong className="text-[#253F60] font-semibold">(Rennes, Bordeaux, Annecy…)</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Immobilier locatif */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center">
                    <HouseIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Immobilier locatif
                    </h3>
                    <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                      Rendement moyen de <strong className="text-[#253F60] font-semibold">5,8 %</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Investissement "pierre papier" */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#B99066]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center">
                    <CompassIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Investissement "pierre papier"
                    </h3>
                    <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                      <strong className="text-[#253F60] font-semibold">Stabilité des revenus</strong> et diversification européenne
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 sm:p-8 border-l-4 border-[#B99066] shadow-md mt-10">
              <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                <strong className="text-[#253F60] font-semibold">Source :</strong> PAPERS.immo, Notaires de France, INSEE 2024.
              </p>
            </div>

            {/* Loi de finance 2026 */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 sm:p-10 text-white shadow-xl mt-10">
              <h3 className="text-xl sm:text-2xl font-cairo font-bold mb-4">
                🔮 Perspective 2026
              </h3>
              <p className="text-lg sm:text-xl font-inter leading-relaxed mb-4">
                Sur 2025, on observe une légère reprise grâce à l'inflexion des taux d'intérêt, mais la <strong className="text-[#B99066] font-semibold">prochaine loi de finance (2026)</strong> risque de mettre un coup d'arrêt à la dynamique d'investissement qui s'était relancée.
              </p>
              <p className="text-lg sm:text-xl font-inter leading-relaxed">
                En effet, la <strong className="text-[#B99066] font-semibold">suppression de l'amortissement sur les meublés</strong> va impacter à nouveau le choix des investisseurs. L'objectif est de redonner un peu de souffle à la location nue qui devrait bénéficier d'un meilleur abattement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 : L'immobilier papier */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              L'immobilier papier : SCPI, OPCI, REITs
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Les 3 formes d'investissement immobilier collectif
            </p>
          </div>

          {/* Tableau comparatif */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#E5E7EB]">
              {/* En-tête du tableau */}
              <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] text-white">
                <div className="grid grid-cols-5 gap-4 p-6">
                  <div className="font-cairo font-bold text-lg sm:text-xl">Type</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Support</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Liquidité</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Rendement</div>
                  <div className="font-cairo font-bold text-lg sm:text-xl text-center">Risque principal</div>
                </div>
              </div>

              {/* Corps du tableau */}
              <div className="divide-y divide-[#E5E7EB]">
                {/* SCPI */}
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    SCPI
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Pierre gérée
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Moyenne
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-lg sm:text-xl">
                    4-6 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Valeur des parts
                  </div>
                </div>

                {/* OPCI */}
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200 bg-[#F9FAFB]/50">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    OPCI
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Mix pierre / finance
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Bonne
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-lg sm:text-xl">
                    3-5 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Volatilité
                  </div>
                </div>

                {/* REITs */}
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-[#F9FAFB] transition-colors duration-200">
                  <div className="font-inter font-semibold text-[#253F60] text-base sm:text-lg">
                    REITs
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Actions cotées
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Élevée
                  </div>
                  <div className="text-center font-inter font-bold text-[#B99066] text-lg sm:text-xl">
                    6-8 %
                  </div>
                  <div className="text-center font-inter text-[#374151] text-sm sm:text-base">
                    Marché boursier
                  </div>
                </div>
              </div>
            </div>

            {/* Citation */}
            <div className="mt-10 bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-8 border-l-4 border-[#B99066] shadow-md">
              <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed italic text-center">
                💬 "Ces solutions permettent de profiter de la <strong className="text-[#253F60] font-semibold not-italic">solidité du marché immobilier</strong> sans contraintes de gestion."
              </p>
            </div>

            {/* Zone pour infographie */}
            <div className="mt-10 bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] rounded-xl p-8 border-2 border-[#E5E7EB] shadow-lg">
              <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-6 text-center">
                📊 Infographie comparative SCPI / OPCI / REITs
              </h3>
              
              {/* Données pour les graphiques */}
              {(() => {
                const barData = [
                  { name: 'Rendement (%)', SCPI: 5, OPCI: 4, REITs: 7 },
                  { name: 'Liquidité', SCPI: 3, OPCI: 4, REITs: 5 },
                  { name: 'Stabilité', SCPI: 5, OPCI: 3, REITs: 2 },
                  { name: 'Accessibilité', SCPI: 4, OPCI: 4, REITs: 5 }
                ];

                const radarData = [
                  { subject: 'Rendement', SCPI: 80, OPCI: 60, REITs: 100, fullMark: 100 },
                  { subject: 'Liquidité', SCPI: 60, OPCI: 80, REITs: 100, fullMark: 100 },
                  { subject: 'Stabilité', SCPI: 100, OPCI: 60, REITs: 40, fullMark: 100 },
                  { subject: 'Diversification', SCPI: 80, OPCI: 70, REITs: 50, fullMark: 100 },
                  { subject: 'Gestion', SCPI: 90, OPCI: 70, REITs: 60, fullMark: 100 }
                ];

                return (
                  <div className="space-y-8">
                    {/* Graphique en barres groupées */}
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-[#E5E7EB]">
                      <h4 className="text-lg font-cairo font-semibold text-[#253F60] mb-4 text-center">
                        Comparaison par critères
                      </h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis 
                            dataKey="name" 
                            tick={{ fill: '#374151', fontSize: 12 }}
                            stroke="#9CA3AF"
                          />
                          <YAxis 
                            tick={{ fill: '#374151', fontSize: 12 }}
                            stroke="#9CA3AF"
                            domain={[0, 5]}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#F9FAFB', 
                              border: '1px solid #E5E7EB',
                              borderRadius: '8px',
                              color: '#253F60'
                            }}
                          />
                          <Legend 
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="circle"
                          />
                          <Bar 
                            dataKey="SCPI" 
                            fill="#B99066" 
                            radius={[4, 4, 0, 0]}
                            name="SCPI"
                          />
                          <Bar 
                            dataKey="OPCI" 
                            fill="#253F60" 
                            radius={[4, 4, 0, 0]}
                            name="OPCI"
                          />
                          <Bar 
                            dataKey="REITs" 
                            fill="#A67A5A" 
                            radius={[4, 4, 0, 0]}
                            name="REITs"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Graphique radar */}
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-[#E5E7EB]">
                      <h4 className="text-lg font-cairo font-semibold text-[#253F60] mb-4 text-center">
                        Profil comparatif global
                      </h4>
                      <ResponsiveContainer width="100%" height={350}>
                        <RadarChart data={radarData}>
                          <PolarGrid stroke="#E5E7EB" />
                          <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fill: '#374151', fontSize: 12 }}
                          />
                          <PolarRadiusAxis 
                            angle={90} 
                            domain={[0, 100]}
                            tick={{ fill: '#9CA3AF', fontSize: 10 }}
                          />
                          <Radar 
                            name="SCPI" 
                            dataKey="SCPI" 
                            stroke="#B99066" 
                            fill="#B99066" 
                            fillOpacity={0.6}
                            strokeWidth={2}
                          />
                          <Radar 
                            name="OPCI" 
                            dataKey="OPCI" 
                            stroke="#253F60" 
                            fill="#253F60" 
                            fillOpacity={0.6}
                            strokeWidth={2}
                          />
                          <Radar 
                            name="REITs" 
                            dataKey="REITs" 
                            stroke="#A67A5A" 
                            fill="#A67A5A" 
                            fillOpacity={0.6}
                            strokeWidth={2}
                          />
                          <Legend 
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="circle"
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#F9FAFB', 
                              border: '1px solid #E5E7EB',
                              borderRadius: '8px',
                              color: '#253F60'
                            }}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#112033] mb-8">{content.advantages?.advantagesTitle || "Les Avantages de l'Immobilier"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.advantages?.advantagesList || []).map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#253F60] to-[#3A5A7A] p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-white">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#112033] mb-8">{content.process?.processTitle || "Notre Processus d'Accompagnement"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.process?.processSteps || []).map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-12 h-12 bg-[#B99066] text-[#253F60] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#112033] mb-2">{step.title}</h3>
                <p className="text-[#686868]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 : Avis et retours d'expérience */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Avis et retours d'expérience
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Témoignage 1 - Julien R. */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed italic mb-6">
                    "J'ai investi avec Azalée dans une SCPI Corum : <strong className="text-[#253F60] font-semibold not-italic">transparence, rendement au rendez-vous</strong>, et un accompagnement complet sur la fiscalité."
                  </p>
              </div>
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="font-cairo font-bold text-[#253F60] text-lg">
                    — Julien R.
                  </p>
                  <p className="font-inter text-[#6B7280] text-sm sm:text-base">
                    42 ans, dirigeant à Nantes
                  </p>
                </div>
              </div>

              {/* Témoignage 2 - Isabelle L. */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  </div>
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed italic mb-6">
                    "J'étais hésitante à cause des frais d'entrée, mais l'équipe m'a montré la <strong className="text-[#253F60] font-semibold not-italic">rentabilité réelle nette d'impôt</strong> : convaincue !"
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="font-cairo font-bold text-[#253F60] text-lg">
                    — Isabelle L.
                  </p>
                  <p className="font-inter text-[#6B7280] text-sm sm:text-base">
                    Cadre supérieure à Paris
                  </p>
                </div>
              </div>
            </div>

            {/* Note moyenne */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 sm:p-10 text-white shadow-xl text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl sm:text-5xl font-cairo font-bold text-[#B99066]">4,9</span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-3xl">/</span>
                  <span className="text-2xl sm:text-3xl">5</span>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-inter font-semibold mb-2">
                Note moyenne
              </p>
              <p className="text-sm sm:text-base font-inter text-white/80">
                (avis clients Azalée)
              </p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button 
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                👉 Demandez un comparatif SCPI personnalisé
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 : Guides et simulateurs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Guides et simulateurs
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              🎁 Téléchargez gratuitement nos ressources exclusives
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-10">
              <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                Tous nos outils sont conçus pour vous aider à prendre des <strong className="text-[#253F60] font-semibold">décisions éclairées</strong>, fondées sur des données réelles.
              </p>
            </div>

            {/* Grille des ressources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Guide SCPI 2025 */}
              <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl hover:border-[#B99066] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <BookIcon size={24} />
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Guide SCPI 2025
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed mb-6">
                  Comprendre, comparer, investir intelligemment
                </p>
                <button 
                  onClick={() => {
                    // TODO: Lien vers téléchargement du guide
                    alert('Téléchargement du guide SCPI 2025');
                  }}
                  className="w-full bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Télécharger
                </button>
              </div>

              {/* Simulateur de rentabilité */}
              <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl hover:border-[#B99066] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CalculatorIcon size={24} />
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Simulateur de rentabilité immobilière
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed mb-6">
                  Calculez votre rendement locatif en quelques clics
                </p>
                <button 
                  onClick={() => {
                    // TODO: Lien vers simulateur
                    window.open('/outils', '_blank');
                  }}
                  className="w-full bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Utiliser le simulateur
                </button>
              </div>

              {/* Quiz */}
              <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 sm:p-8 border-2 border-[#E5E7EB] shadow-lg hover:shadow-xl hover:border-[#B99066] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <BrainIcon size={24} />
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Quiz personnalisé
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed mb-6">
                  Quel type d'investissement immobilier est fait pour vous ?
                </p>
                <button 
                  onClick={() => {
                    // TODO: Lien vers questionnaire Tally
                    window.open('https://tally.so', '_blank');
                  }}
                  className="w-full bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Faire le quiz
                </button>
              </div>
            </div>

            {/* CTA principal */}
            <div className="text-center">
              <button 
                onClick={() => {
                  // TODO: Lien vers page outils
                  window.open('/outils', '_blank');
                }}
                className="bg-[#B99066] hover:bg-[#A67A5A] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                👉 Accéder à nos outils immobiliers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 : Les prix de l'immobilier en temps réel */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Les prix de l'immobilier en temps réel dans votre région
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Suivez l'évolution du marché immobilier en direct grâce à nos données partenaires PAPERS.immo.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Sélecteurs */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sélecteur de ville */}
                <div>
                  <label className="block text-sm font-inter font-semibold text-[#253F60] mb-2">
                    📍 Sélecteur de ville / code postal
                  </label>
                  <input
                    type="text"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    placeholder="Ex: Lyon, 69001, Paris..."
                    className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#B99066] focus:outline-none font-inter text-[#374151]"
                  />
                </div>

                {/* Sélecteur de type de bien */}
                <div>
                  <label className="block text-sm font-inter font-semibold text-[#253F60] mb-2">
                    🏠 Type de bien
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#B99066] focus:outline-none font-inter text-[#374151] bg-white"
                  >
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison</option>
                  </select>
                </div>
              </div>

              {/* Bouton de recherche */}
              <div className="mt-6">
                <button
                  onClick={async () => {
                    if (!selectedCity) {
                      alert('Veuillez sélectionner une ville');
                      return;
                    }
                    setLoadingMarketData(true);
                    // TODO: Intégration API PAPERS.immo
                    // const response = await fetch(`/api/papers-immo?city=${selectedCity}&type=${propertyType}`);
                    // const data = await response.json();
                    // setMarketData(data);
                    
                    // Données de démonstration
                    setTimeout(() => {
                      setMarketData({
                        prixMoyen: 6250,
                        evolution12mois: 3.4,
                        tempsMoyenVente: 62,
                        rentabiliteBrute: 5.8
                      });
                      setLoadingMarketData(false);
                    }, 1000);
                  }}
                  className="w-full bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {loadingMarketData ? 'Chargement...' : 'Rechercher'}
                </button>
              </div>
            </div>

            {/* Graphique Chart.js */}
            {selectedCity && marketData && (
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] mb-8">
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-6 text-center">
                  📈 Évolution des prix au m² sur 12 mois - {selectedCity}
                </h3>
                <div className="h-64 sm:h-80">
                  <Line
                    data={{
                      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                      datasets: [
                        {
                          label: 'Prix au m² (€)',
                          data: [
                            marketData.prixMoyen * 0.95,
                            marketData.prixMoyen * 0.96,
                            marketData.prixMoyen * 0.97,
                            marketData.prixMoyen * 0.98,
                            marketData.prixMoyen * 0.99,
                            marketData.prixMoyen,
                            marketData.prixMoyen * 1.01,
                            marketData.prixMoyen * 1.02,
                            marketData.prixMoyen * 1.025,
                            marketData.prixMoyen * 1.03,
                            marketData.prixMoyen * 1.032,
                            marketData.prixMoyen * (1 + marketData.evolution12mois / 100)
                          ],
                          borderColor: '#B99066',
                          backgroundColor: 'rgba(185, 144, 102, 0.1)',
                          fill: true,
                          tension: 0.4,
                          pointRadius: 4,
                          pointHoverRadius: 6,
                          pointBackgroundColor: '#B99066',
                          pointBorderColor: '#fff',
                          pointBorderWidth: 2
                        }
                      ]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: true,
                          position: 'top',
                          labels: {
                            font: {
                              family: 'Inter',
                              size: 12
                            },
                            color: '#374151'
                          }
                        },
                        tooltip: {
                          backgroundColor: '#F9FAFB',
                          titleColor: '#253F60',
                          bodyColor: '#374151',
                          borderColor: '#E5E7EB',
                          borderWidth: 1,
                          padding: 12,
                          displayColors: true
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: false,
                          ticks: {
                            callback: function(value) {
                              return value.toLocaleString('fr-FR') + ' €';
                            },
                            color: '#6B7280',
                            font: {
                              family: 'Inter',
                              size: 11
                            }
                          },
                          grid: {
                            color: '#E5E7EB'
                          }
                        },
                        x: {
                          ticks: {
                            color: '#6B7280',
                            font: {
                              family: 'Inter',
                              size: 11
                            }
                          },
                          grid: {
                            color: '#E5E7EB'
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            )}

            {/* Carte Mapbox */}
            {selectedCity && marketData && (
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] mb-8">
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-6 text-center">
                  🗺️ Carte interactive - {selectedCity}
                </h3>
                {mapError ? (
                  <div className="h-64 sm:h-80 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center border-2 border-red-200">
                    <div className="text-center p-4">
                      <p className="text-red-600 font-inter font-semibold mb-2">⚠️ {mapError}</p>
                      <p className="text-sm text-red-500 font-inter">
                        Configurez NEXT_PUBLIC_MAPBOX_TOKEN dans votre fichier .env.local
                      </p>
                    </div>
                  </div>
                ) : (
                  <div 
                    ref={mapContainer}
                    className="h-64 sm:h-80 w-full rounded-lg overflow-hidden border-2 border-[#E5E7EB] bg-gray-100"
                    style={{ minHeight: '256px' }}
                  />
                )}
              </div>
            )}

            {/* Placeholder si pas de données */}
            {!selectedCity && (
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] mb-8">
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-6 text-center">
                  📈 Graphique et carte interactive
                </h3>
                <div className="h-64 sm:h-80 bg-gradient-to-br from-white to-[#F9FAFB] rounded-lg flex items-center justify-center border-2 border-dashed border-[#D1D5DB]">
                  <p className="text-[#6B7280] font-inter text-center">
                    Sélectionnez une ville et cliquez sur "Rechercher" pour afficher le graphique et la carte
                  </p>
                </div>
              </div>
            )}

            {/* Données affichées */}
            {marketData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Prix moyen au m² */}
                <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-6 text-white shadow-lg">
                  <div className="text-sm font-inter text-white/80 mb-2">Prix moyen au m²</div>
                  <div className="text-3xl font-cairo font-bold text-[#B99066] mb-1">
                    {marketData.prixMoyen.toLocaleString('fr-FR')} €
                  </div>
                  <div className="text-xs font-inter text-white/70">Calculé selon PAPERS.immo</div>
                </div>

                {/* Évolution 12 mois */}
                <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-xl p-6 text-white shadow-lg">
                  <div className="text-sm font-inter text-white/90 mb-2">Évolution 12 mois</div>
                  <div className="text-3xl font-cairo font-bold mb-1">
                    +{marketData.evolution12mois} %
                  </div>
                  <div className="text-xs font-inter text-white/80">Variation annuelle</div>
                </div>

                {/* Temps moyen de vente */}
                <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-6 text-white shadow-lg">
                  <div className="text-sm font-inter text-white/80 mb-2">Temps moyen de vente</div>
                  <div className="text-3xl font-cairo font-bold text-[#B99066] mb-1">
                    {marketData.tempsMoyenVente}
                  </div>
                  <div className="text-xs font-inter text-white/70">jours (délai médian)</div>
                </div>

                {/* Rentabilité brute moyenne */}
                <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-xl p-6 text-white shadow-lg">
                  <div className="text-sm font-inter text-white/90 mb-2">Rentabilité brute moyenne</div>
                  <div className="text-3xl font-cairo font-bold mb-1">
                    {marketData.rentabiliteBrute} %
                  </div>
                  <div className="text-xs font-inter text-white/80">Calculée sur loyers moyens</div>
                </div>
              </div>
            )}

            {/* Message explicatif */}
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 sm:p-8 border-l-4 border-[#B99066] shadow-md">
              <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                Les données sont issues de <strong className="text-[#253F60] font-semibold">PAPERS.immo</strong> et mises à jour automatiquement. Elles vous permettent de situer votre projet immobilier dans un contexte de marché fiable et transparent.
              </p>
            </div>

            {/* Note technique */}
            <div className="mt-6 text-center">
              <p className="text-sm font-inter text-[#6B7280] italic">
                ⚙️ Intégration technique : API PAPERS.immo - Niveau 3 – Dashboard interactif (API + Chart.js / Mapbox)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 : Les trois leviers de la stratégie immobilière Azalée */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Les trois leviers de la stratégie immobilière Azalée
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              🎯 Chaque levier répond à un besoin précis : créer du capital, réduire la fiscalité ou protéger son patrimoine familial.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Levier 1 : Créer et valoriser */}
              <div className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300 cursor-pointer">
                <a href="/immobilier/immobilier-neuf" className="block">
                  <div className="relative h-48 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/construction-building.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                      <FlowerIcon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                        Créer et valoriser votre patrimoine
                      </h3>
                      <p className="text-base font-inter text-[#374151] leading-relaxed mb-4">
                        Immobilier neuf, VEFA, construction, dispositifs Scellier
                      </p>
                    </div>
                    <div className="flex items-center text-[#B99066] font-inter font-semibold">
                      <span>Découvrir</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              {/* Levier 2 : Optimiser votre fiscalité */}
              <div className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300 cursor-pointer">
                <a href="/immobilier/investissement-locatif" className="block">
                  <div className="relative h-48 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/apartment-keys.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                      <FlowerIcon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                        Optimiser votre fiscalité
                      </h3>
                      <p className="text-base font-inter text-[#374151] leading-relaxed mb-4">
                        Investissement locatif, LMNP, plus-value immobilière, déficit foncier
                      </p>
                    </div>
                    <div className="flex items-center text-[#B99066] font-inter font-semibold">
                      <span>Découvrir</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              {/* Levier 3 : Structurer et transmettre */}
              <div className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300 cursor-pointer">
                <a href="/immobilier/sci" className="block">
                  <div className="relative h-48 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/family-house.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                      <FlowerIcon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                        Structurer et transmettre durablement
                      </h3>
                      <p className="text-base font-inter text-[#374151] leading-relaxed mb-4">
                        SCI, immeubles de rapport, financement, PTZ
                      </p>
                    </div>
                    <div className="flex items-center text-[#B99066] font-inter font-semibold">
                      <span>Découvrir</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14 : La méthode Azalée */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              La méthode Azalée : une approche patrimoniale globale
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Nous ne proposons pas de "produits", mais une stratégie complète, sur mesure et durable.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Ligne du temps avec 5 étapes */}
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#B99066] via-[#253F60] to-[#B99066]"></div>

              {/* Étapes */}
              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 relative">
                {/* Étape 1 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center relative z-10 hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <SearchIcon size={20} />
                  </div>
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 text-[#253F60] font-cairo font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2">
                    Diagnostic patrimonial
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed">
                    Analyse de votre situation et de vos objectifs
                  </p>
                </div>

                {/* Étape 2 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center relative z-10 hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <LightbulbIcon size={20} />
                  </div>
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 text-[#253F60] font-cairo font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2">
                    Élaboration d'une stratégie sur mesure
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed">
                    Rendement, fiscalité, transmission
                  </p>
                </div>

                {/* Étape 3 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center relative z-10 hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 text-[#253F60] font-cairo font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2">
                    Sélection des supports adaptés
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed">
                    Immobilier direct, LMNP, SCI, SCPI, assurance vie…
                  </p>
                </div>

                {/* Étape 4 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center relative z-10 hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <DocumentIcon size={20} />
                  </div>
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 text-[#253F60] font-cairo font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2">
                    Accompagnement juridique et fiscal
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed">
                    Démembrement, SCI, clauses bénéficiaires
                  </p>
                </div>

                {/* Étape 5 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center relative z-10 hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ChartBarIcon size={20} />
                  </div>
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 text-[#253F60] font-cairo font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2">
                    Suivi continu et reporting
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed">
                    Réajustement annuel de la stratégie
                  </p>
                </div>
              </div>
            </div>

            {/* Message différenciant */}
            <div className="mt-12 bg-gradient-to-r from-[#253F60] to-[#2d4a6b] rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-cairo font-bold mb-4 text-center">
                🔍 La différence Azalée
              </h3>
              <p className="text-lg sm:text-xl font-inter leading-relaxed text-center">
                Une vision d'ensemble qui marie <strong className="text-[#B99066] font-semibold">finance, fiscalité et sérénité</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15 : Témoignages et cas concrets */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Témoignages et cas concrets
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Témoignage 1 */}
              <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed italic">
                    « Grâce à Azalée, j'ai optimisé mon investissement locatif tout en réduisant mon impôt sur le revenu. Leur accompagnement va bien au-delà du simple achat. »
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="font-cairo font-bold text-[#253F60] text-lg">
                    — Laurent D.
                  </p>
                  <p className="font-inter text-[#6B7280] text-sm sm:text-base">
                    Chef d'entreprise à Lyon
                  </p>
                </div>
              </div>

              {/* Témoignage 2 */}
              <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed italic">
                    « J'avais un projet LMNP, ils m'ont aidée à le rendre rentable, sécurisé et transmissible. »
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="font-cairo font-bold text-[#253F60] text-lg">
                    — Sophie B.
                  </p>
                  <p className="font-inter text-[#6B7280] text-sm sm:text-base">
                    Cadre supérieure à Paris
                  </p>
                </div>
              </div>
            </div>

            {/* Statistique */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-xl p-8 text-white shadow-xl text-center">
              <p className="text-xl sm:text-2xl font-cairo font-bold mb-2">
                🔸 Plus de 200 familles accompagnées
              </p>
              <p className="text-lg sm:text-xl font-inter">
                dans la création et la transmission de leur patrimoine immobilier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16 : Nos expertises immobilières */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Nos expertises immobilières
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Explorez nos expertises et entrez dans le détail de chaque stratégie
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Immobilier neuf & VEFA */}
              <a href="/immobilier/immobilier-neuf" className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/construction-site.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                    <FlowerIcon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                    Immobilier neuf & VEFA
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed mb-4">
                    Investir dans le neuf pour profiter des garanties, des dispositifs fiscaux (Pinel, Scellier) et valoriser votre patrimoine sur le long terme.
                  </p>
                  <div className="flex items-center text-[#B99066] font-inter font-semibold text-sm">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Investissement locatif & LMNP */}
              <a href="/immobilier/investissement-locatif" className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/modern-apartment.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                    <FlowerIcon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                    Investissement locatif & LMNP
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed mb-4">
                    Devenir investisseur rentable, optimiser sa fiscalité et générer des revenus complémentaires.
                  </p>
                  <div className="flex items-center text-[#B99066] font-inter font-semibold text-sm">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* SCI & transmission patrimoniale */}
              <a href="/immobilier/sci" className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/notary-signing.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                    <FlowerIcon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                    SCI & transmission patrimoniale
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed mb-4">
                    Structurer votre patrimoine, protéger vos proches et préparer la transmission familiale.
                  </p>
                  <div className="flex items-center text-[#B99066] font-inter font-semibold text-sm">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Crédit immobilier & PTZ */}
              <a href="/immobilier/credit-immobilier-ptz" className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/mortgage-documents.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                    <FlowerIcon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                    Crédit immobilier & PTZ
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed mb-4">
                    Profitez du levier de l'endettement pour accélérer la constitution de patrimoine.
                  </p>
                  <div className="flex items-center text-[#B99066] font-inter font-semibold text-sm">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Immeubles de rapport & plus-value */}
              <a href="/immobilier/immeubles-de-rapport" className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-[#F9FAFB] to-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/paris-building-facade.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center shadow-lg">
                    <FlowerIcon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cairo font-bold text-[#253F60] mb-2 group-hover:text-[#B99066] transition-colors duration-300">
                    Immeubles de rapport & plus-value immobilière
                  </h3>
                  <p className="text-sm font-inter text-[#374151] leading-relaxed mb-4">
                    Accédez à des actifs à haut potentiel et maîtrisez la fiscalité sur les plus-values.
                  </p>
                  <div className="flex items-center text-[#B99066] font-inter font-semibold text-sm">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 17 : Ressources gratuites pour aller plus loin */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Ressources gratuites pour aller plus loin
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              🎁 Téléchargez votre guide exclusif
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Liste des ressources */}
            <div className="space-y-6 mb-10">
              <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📘</span>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Les 7 stratégies immobilières pour faire fructifier votre patrimoine
                    </h3>
                    <p className="text-base font-inter text-[#374151] leading-relaxed">
                      Guide complet téléchargeable gratuitement
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🧮</span>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Simulez votre rendement locatif
                    </h3>
                    <p className="text-base font-inter text-[#374151] leading-relaxed">
                      Grâce à notre calculateur interactif. <a href="/outils" className="text-[#B99066] font-semibold hover:underline">Lien vers Outils</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-6 border-l-4 border-[#B99066] shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-2">
                      Faites le test
                    </h3>
                    <p className="text-base font-inter text-[#374151] leading-relaxed">
                      Quel type d'investissement immobilier est fait pour vous ? (Questionnaire Tally avec réponse gmail via ChatGPT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <button 
                onClick={() => {
                  // TODO: Lien vers téléchargement du guide
                  alert('Téléchargement du guide');
                }}
                className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 mr-4"
              >
                Télécharger le guide
              </button>
              <button 
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-[#B99066] hover:bg-[#A67A5A] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18 : Faites confiance à un partenaire indépendant */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Faites confiance à un partenaire indépendant
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Chez Azalée Patrimoine, nous défendons trois valeurs fortes
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* 3 valeurs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DiamondIcon size={24} />
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Indépendance
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed">
                  Aucun lien capitalistique avec des promoteurs
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-[#253F60] text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Transparence
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed">
                  Nos analyses et recommandations sont documentées
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#E5E7EB] text-center hover:shadow-xl hover:border-[#B99066] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-[#253F60] text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-cairo font-bold text-[#253F60] mb-3">
                  Accompagnement humain
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed">
                  Une relation durable, fondée sur la confiance
                </p>
              </div>
            </div>

            {/* Citation */}
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl p-8 border-l-4 border-[#B99066] shadow-md mb-10">
              <p className="text-lg sm:text-xl font-inter text-[#374151] leading-relaxed italic text-center mb-6">
                "Nous ne vendons pas des biens, nous construisons des projets patrimoniaux durables."
              </p>
            </div>

            {/* Exemple concret */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#2d4a6b] rounded-xl p-8 sm:p-10 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-cairo font-bold mb-4">
                Exemple d'une famille qui a investi en 2017
              </h3>
              <p className="text-lg sm:text-xl font-inter leading-relaxed mb-4">
                Dans une résidence principale appartenant au patrimoine remarquable de sa ville. Travail d'optimisation grâce à l'obtention de labels qui ont permis d'obtenir <strong className="text-[#B99066] font-semibold">30% du budget travaux sous forme de crédit d'impôt</strong>.
              </p>
              <p className="text-base sm:text-lg font-inter text-white/90 italic">
                — Shirley Bruna, Fondatrice d'Azalée Patrimoine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19 : FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              FAQ – Investir dans l'immobilier
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Qu'est-ce qu'une SCPI ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    Une SCPI (Société Civile de Placement Immobilier) est un placement collectif permettant d'investir dans un portefeuille immobilier géré par une société de gestion. Vous percevez des revenus locatifs réguliers, proportionnels à votre part dans la SCPI, sans avoir à gérer de biens.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Quel rendement peut-on espérer d'une SCPI ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    Le rendement moyen des SCPI de rendement se situe entre <strong className="text-[#253F60] font-semibold">4 % et 6 % par an</strong> (source AMF 2024). Certaines SCPI thématiques comme Corum Origin ou Épargne Pierre affichent de meilleures performances grâce à une diversification européenne ou sectorielle.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Quels sont les risques d'un investissement en SCPI ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed mb-4">
                    Comme tout placement, les SCPI comportent des risques : la valeur des parts peut fluctuer, les loyers ne sont pas garantis, et la liquidité peut être limitée en cas de forte demande de revente.
                  </p>
                  <p className="text-base sm:text-lg font-inter text-[#253F60] font-semibold">
                    👉 C'est pourquoi Azalée Patrimoine sélectionne des SCPI solides, diversifiées et bien capitalisées.
                  </p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ SCPI, LMNP, Pinel… que choisir ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 4 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed mb-4">
                    Tout dépend de vos objectifs :
                  </p>
                  <ul className="space-y-2 text-base sm:text-lg font-inter text-[#374151]">
                    <li>• <strong className="text-[#253F60] font-semibold">Réduire vos impôts</strong> 👉 LMNP ou Pinel</li>
                    <li>• <strong className="text-[#253F60] font-semibold">Générer un revenu complémentaire</strong> 👉 SCPI de rendement</li>
                    <li>• <strong className="text-[#253F60] font-semibold">Transmettre un bien</strong> 👉 SCI ou démembrement</li>
                  </ul>
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed mt-4">
                    Nos conseillers peuvent modéliser votre situation et définir la stratégie la plus pertinente.
                  </p>
                </div>
              )}
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Peut-on financer un investissement en SCPI à crédit ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 5 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    Oui. Certaines banques acceptent le crédit SCPI, souvent avec des durées plus courtes (10-15 ans). L'avantage : les intérêts d'emprunt sont déductibles de vos revenus fonciers, ce qui améliore la rentabilité nette.
                  </p>
                </div>
              )}
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Quelle différence entre SCPI et OPCI ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 6 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 6 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    Une OPCI (Organisme de Placement Collectif Immobilier) investit à la fois dans la pierre et les marchés financiers. Elle offre une meilleure liquidité mais un rendement généralement plus faible que les SCPI.
                  </p>
                </div>
              )}
            </div>

            {/* Question 7 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Les revenus d'une SCPI sont-ils imposables ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 7 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 7 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    Oui. Ils sont considérés comme des revenus fonciers et imposés selon votre TMI. Il existe toutefois des stratégies de SCPI européennes ou logées dans l'assurance vie pour réduire la fiscalité.
                  </p>
                </div>
              )}
            </div>

            {/* Question 8 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:border-[#B99066] transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-cairo font-bold text-[#253F60] pr-4">
                  ❓ Est-ce le bon moment pour investir dans l'immobilier ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#B99066] flex-shrink-0 transform transition-transform duration-300 ${
                    openFaq === 8 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 8 && (
                <div className="px-6 pb-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-base sm:text-lg font-inter text-[#374151] leading-relaxed">
                    En 2025, les taux de crédit se stabilisent et les prix s'ajustent à la baisse : une opportunité pour investir à long terme. Les actifs bien situés et les SCPI résilientes conservent de très bonnes perspectives de rendement.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA en bas de section */}
          <div className="text-center mt-12">
            <p className="text-lg sm:text-xl font-inter text-[#374151] mb-6">
              Vous avez d'autres questions ?
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#253F60] hover:bg-[#1a2d47] text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Prenez rendez-vous avec un conseiller Azalée Patrimoine pour un audit personnalisé
            </button>
          </div>
        </div>
      </section>

      {/* Section 20 & 21 : Articles Blog */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold text-[#253F60] mb-6">
              Articles et guides immobiliers
            </h2>
            <p className="text-lg sm:text-xl font-inter text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Découvrez nos articles détaillés pour approfondir vos connaissances sur l'investissement immobilier
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 : Investissement immobilier rentable */}
            <Link 
              href="/immobilier/investissement-immobilier-rentable"
              className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#253F60] to-[#2d4a6b] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/investment-chart.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#B99066] text-white px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  Guide complet
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-cairo font-bold text-[#253F60] mb-3 group-hover:text-[#B99066] transition-colors duration-300">
                  Investissement immobilier rentable : comment bâtir une stratégie durable
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed mb-4">
                  Découvrez comment construire un investissement immobilier rentable avec Azalée Patrimoine : SCPI, LMNP, crédit, fiscalité, rendement net et stratégies durables pour bâtir votre indépendance financière.
                </p>
                <div className="flex items-center text-[#B99066] font-inter font-semibold">
                  <span>Lire l'article complet</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 2 : LMNP 2025 */}
            <Link 
              href="/immobilier/lmnp-2025"
              className="group bg-white rounded-xl shadow-lg border-2 border-[#E5E7EB] overflow-hidden hover:shadow-2xl hover:border-[#B99066] transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#253F60] to-[#B99066] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/furnished-apartment.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#253F60] text-white px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  Analyse 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-cairo font-bold text-[#253F60] mb-3 group-hover:text-[#B99066] transition-colors duration-300">
                  LMNP 2025 : le meublé reste-t-il un bon investissement après la réforme ?
                </h3>
                <p className="text-base font-inter text-[#374151] leading-relaxed mb-4">
                  La réforme 2025 change la donne pour le LMNP : les amortissements sont désormais réintégrés à la revente. Découvrez comment investir intelligemment en location meublée non professionnelle malgré la nouvelle fiscalité.
                </p>
                <div className="flex items-center text-[#B99066] font-inter font-semibold">
                  <span>Lire l'article complet</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#253F60] to-[#B99066] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">{content.cta?.ctaTitle || "Prêt à Investir dans l'Immobilier ?"}</h2>
          <p className="text-xl mb-8">{content.cta?.ctaText || "Contactez nos experts pour une consultation personnalisée et découvrez comment optimiser votre patrimoine immobilier."}</p>
          <button 
            onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
            className="bg-[#B99066] text-white hover:bg-[#A67A5A] font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            {content.cta?.ctaButton || "Demander une consultation"}
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}