import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const query = `
      SELECT content 
      FROM cms_content 
      WHERE page_name = 'defiscalisation-cas-specifiques' 
      AND is_published = true 
      ORDER BY updated_at DESC 
      LIMIT 1
    `;
    
    const results = await executeQuery(query);
    
    if (results.length > 0) {
      const content = JSON.parse(results[0].content);
      return Response.json({ content });
    } else {
      // Return default content structure
      const defaultContent = {
        hero: {
          title: "Défiscalisation - Cas spéciaux",
          subtitle: "Découvrez les dispositifs de défiscalisation spécifiques",
          description: "Optimisez votre fiscalité avec nos conseils spécialisés",
          backgroundImage: "/images/fiscalite-cas-specifiques-hero.jpg",
          ctaText: "Étudier mon cas",
          ctaLink: "/contact"
        },
        stats: {
          title: "Nos résultats",
          items: [
            { number: "85%", label: "Clients satisfaits", description: "Taux de satisfaction" },
            { number: "2M€", label: "Économies réalisées", description: "Pour nos clients" },
            { number: "500+", label: "Dossiers traités", description: "Depuis 2020" }
          ]
        },
        avantages: {
          title: "Nos avantages",
          subtitle: "Pourquoi choisir nos services",
          items: [
            { title: "Expertise spécialisée", description: "Connaissance approfondie des dispositifs fiscaux", icon: "🎯" },
            { title: "Accompagnement personnalisé", description: "Solutions adaptées à votre situation", icon: "👥" },
            { title: "Suivi continu", description: "Monitoring de vos investissements", icon: "📊" }
          ]
        },
        conditions: {
          title: "Conditions d'éligibilité",
          subtitle: "Critères à respecter",
          items: [
            { condition: "Résidence fiscale française", description: "Être résident fiscal en France" },
            { condition: "Revenus imposables", description: "Avoir des revenus imposables" },
            { condition: "Capacité d'investissement", description: "Disposer des fonds nécessaires" }
          ]
        },
        cta: {
          title: "Prêt à optimiser votre fiscalité ?",
          subtitle: "Contactez nos experts pour une analyse personnalisée",
          primaryButton: "Demander un devis",
          secondaryButton: "Prendre rendez-vous"
        }
      };
      
      return Response.json({ content: defaultContent });
    }
  } catch (error) {
    console.error('Error fetching defiscalisation-cas-specifiques content:', error);
    return Response.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}