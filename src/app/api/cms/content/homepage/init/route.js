import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../../../lib/cmsDatabase';

// Initialize sample homepage content
export async function POST() {
  try {
    const sampleContent = {
      heroBackgrounds: [
        "/images/home.webp",
        "/images/image2.webp",
        "/images/image3.webp"
      ],
      keyFigures: {
        title: "Nos chiffres clés",
        figures: [
          { number: "30+", label: "Années d'expérience" },
          { number: "500+", label: "Clients accompagnés" },
          { number: "95%", label: "Taux de satisfaction" }
        ]
      },
      partners: [
        "/images/selencia.svg",
        "/images/SL-Logo-svg.svg", 
        "/images/vieplus.svg",
        "/images/cardif-logo.svg",
        "/images/intencial-1.png",
        "/images/azalee-logo.png"
      ],
      testimonials: [
        {
          text: "Azalée Patrimoine m'a accompagné dans la gestion de mon patrimoine avec une expertise remarquable.",
          author: "Thomas M.",
          age: "35 ans"
        },
        {
          text: "Un service personnalisé et des conseils adaptés à mes besoins spécifiques.",
          author: "Marie-Claire D.",
          age: "48 ans"
        }
      ],
      investment: {
        title: "Optimisez vos investissements",
        description: "Découvrez nos solutions d'investissement personnalisées pour faire fructifier votre patrimoine.",
        ctaText: "Découvrir nos solutions",
        ctaLink: "/investissement"
      },
      team: {
        title: "Notre équipe d'experts",
        description: "Des professionnels qualifiés à votre service pour vous accompagner dans tous vos projets.",
        image: "/images/image4.webp"
      },
      finalCta: {
        title: "Prêt à optimiser votre patrimoine ?",
        description: "Contactez nos experts pour une consultation personnalisée et découvrez comment Azalée peut vous accompagner.",
        ctaText: "Prendre rendez-vous",
        ctaLink: "/contact"
      }
    };

    // Insert sample content for each section
    for (const [sectionName, content] of Object.entries(sampleContent)) {
      await executeQuery(`
        INSERT INTO cms_content (page_slug, section_name, content_type, content_data, is_published, created_by)
        VALUES (?, ?, 'json', ?, true, 1)
        ON DUPLICATE KEY UPDATE
        content_data = VALUES(content_data),
        updated_at = CURRENT_TIMESTAMP
      `, ['homepage', sectionName, JSON.stringify(content)]);
    }

    return NextResponse.json({ message: 'Sample homepage content initialized successfully' });
  } catch (error) {
    console.error('Error initializing sample content:', error);
    return NextResponse.json({ message: 'Error initializing content' }, { status: 500 });
  }
}
