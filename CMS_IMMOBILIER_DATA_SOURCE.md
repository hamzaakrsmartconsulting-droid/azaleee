# 📊 SOURCE DES DONNÉES - CMS IMMOBILIER

## 🔍 D'où viennent les données dans la page CMS Immobilier ?

### **1. 📄 Page CMS Immobilier (`/cms/immobilier/cms/page.jsx`)**

**Les données proviennent de DEUX sources principales :**

---

## 🏗️ **SOURCE 1 : CONTENU PAR DÉFAUT (Hardcodé)**

**Localisation :** `src/app/cms/immobilier/cms/page.jsx` (lignes 82-135)

```javascript
const defaultContent = {
  hero: {
    title: "Investissement Immobilier",
    subtitle: "Construisez votre patrimoine avec l'immobilier",
    description: "Découvrez nos solutions d'investissement immobilier...",
    backgroundImage: "/images/immobilier-hero.webp",
    ctaButton: "Découvrir nos solutions"
  },
  intro: {
    introTitle: "Pourquoi investir dans l'immobilier ?",
    introText: "L'immobilier reste l'un des investissements les plus sûrs...",
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
  // ... autres sections
};
```

**✅ Avantages :**
- **Contenu immédiatement disponible** au premier chargement
- **Pas de dépendance** à la base de données
- **Contenu de qualité** prêt à l'emploi
- **Fallback sécurisé** si la DB est indisponible

---

## 🗄️ **SOURCE 2 : BASE DE DONNÉES (CMS)**

**Localisation :** Table `cms_content` dans la base de données

**Requête SQL :**
```sql
SELECT * FROM cms_content 
WHERE page_slug = 'immobilier' 
ORDER BY section_name;
```

**Structure des données en DB :**
```json
{
  "id": 1,
  "page_slug": "immobilier",
  "section_name": "hero",
  "content_type": "json",
  "content_data": "{\"title\":\"Nouveau titre\",\"subtitle\":\"Nouveau sous-titre\"}",
  "is_published": true,
  "created_by": 1,
  "created_at": "2024-01-15 10:30:00",
  "updated_at": "2024-01-15 14:45:00"
}
```

**✅ Avantages :**
- **Contenu modifiable** par l'administrateur
- **Persistance** des modifications
- **Historique** des changements
- **Contenu dynamique** et personnalisable

---

## 🔄 **PROCESSUS DE CHARGEMENT DES DONNÉES**

### **Étape 1 : Chargement Initial**
```javascript
// Dans GenericCMSPage.jsx (ligne 19-50)
const loadContent = async () => {
  try {
    setLoading(true);
    
    // 1. Charger le contenu CMS depuis la DB
    const cmsResponse = await fetch(`/api/cms/content?page=${pageSlug}`);
    let cmsSections = [];
    if (cmsResponse.ok) {
      cmsSections = await cmsResponse.json();
    }

    // 2. Fusionner avec le contenu par défaut
    const mergedSections = sections.map(section => {
      const cmsSection = cmsSections.find(s => s.section_name === section.id);
      const currentSectionContent = defaultContent[section.id] || {};
      
      return {
        ...section,
        cmsData: cmsSection?.content_data ? JSON.parse(cmsSection.content_data) : {},
        currentData: currentSectionContent,
        hasCmsContent: !!cmsSection,
        hasCurrentContent: Object.keys(currentSectionContent).length > 0
      };
    });

    setContent(mergedSections);
  } catch (error) {
    console.error('Error loading content:', error);
  } finally {
    setLoading(false);
  }
};
```

### **Étape 2 : Logique de Priorité**
```javascript
// Priorité des données (du plus prioritaire au moins prioritaire) :
// 1. Contenu CMS sauvegardé (DB) - PRIORITÉ MAXIMALE
// 2. Contenu par défaut (hardcodé) - FALLBACK
```

### **Étape 3 : Affichage**
```javascript
// Dans l'interface CMS
const dataToEdit = section.hasCurrentContent ? section.currentData : section.cmsData;
// Si pas de contenu CMS → utilise le contenu par défaut
// Si contenu CMS existe → utilise le contenu CMS
```

---

## 📊 **ÉTAT ACTUEL DES DONNÉES**

### **🔍 Vérification de la Base de Données**

Pour vérifier s'il y a du contenu CMS sauvegardé :

```sql
-- Vérifier le contenu CMS pour la page Immobilier
SELECT 
  section_name,
  content_data,
  is_published,
  updated_at
FROM cms_content 
WHERE page_slug = 'immobilier';
```

### **📈 Résultats Probables :**

**Si la requête retourne des résultats :**
- ✅ **Contenu CMS disponible** - Les données viennent de la DB
- ✅ **Modifications sauvegardées** - L'admin a déjà modifié du contenu

**Si la requête retourne 0 résultat :**
- 🔄 **Contenu par défaut utilisé** - Les données viennent du code
- 📝 **Prêt pour modification** - L'admin peut commencer à éditer

---

## 🎯 **COMMENT MODIFIER LES DONNÉES**

### **1. Via l'Interface CMS :**
1. Aller sur `/cms/immobilier/cms`
2. Cliquer sur "Modifier" pour une section
3. Éditer le contenu dans les champs
4. Cliquer sur "Sauvegarder"
5. Les données sont sauvegardées en DB

### **2. Via l'API Directement :**
```javascript
// Sauvegarder du contenu via API
fetch('/api/cms/content', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    page: 'immobilier',
    section: 'hero',
    data: {
      title: 'Nouveau titre',
      subtitle: 'Nouveau sous-titre'
    }
  })
});
```

### **3. Via la Base de Données :**
```sql
-- Insérer du contenu directement en DB
INSERT INTO cms_content (page_slug, section_name, content_data, is_published)
VALUES ('immobilier', 'hero', '{"title":"Titre DB","subtitle":"Sous-titre DB"}', true);
```

---

## 🔧 **DÉBOGAGE ET DIAGNOSTIC**

### **1. Vérifier le Chargement :**
```javascript
// Dans la console du navigateur
console.log('CMS Immobilier - Loading content...');
console.log('CMS Immobilier - Default content:', defaultContent);
console.log('CMS Immobilier - CMS content:', cmsSections);
```

### **2. Vérifier l'API :**
```bash
# Tester l'API CMS
curl "http://localhost:3000/api/cms/content?page=immobilier"
```

### **3. Vérifier la Base de Données :**
```sql
-- Compter les sections CMS pour Immobilier
SELECT COUNT(*) as total_sections 
FROM cms_content 
WHERE page_slug = 'immobilier';

-- Voir toutes les sections disponibles
SELECT section_name, updated_at 
FROM cms_content 
WHERE page_slug = 'immobilier' 
ORDER BY section_name;
```

---

## 📋 **RÉSUMÉ**

### **🎯 Réponse à la question :**

**Les données dans la page CMS Immobilier viennent de :**

1. **📄 CONTENU PAR DÉFAUT** (lignes 82-135 du fichier `page.jsx`)
   - Contenu hardcodé en JavaScript
   - Disponible immédiatement
   - Utilisé comme fallback

2. **🗄️ BASE DE DONNÉES** (table `cms_content`)
   - Contenu modifié par l'administrateur
   - Sauvegardé via l'interface CMS
   - Priorité sur le contenu par défaut

### **🔄 Logique de Priorité :**
```
Base de Données (CMS) > Contenu par Défaut (Code)
```

### **✅ Avantages de cette Architecture :**
- **Contenu immédiat** au premier chargement
- **Modifications persistantes** en base de données
- **Fallback sécurisé** si la DB est indisponible
- **Flexibilité** pour l'administrateur
- **Performance** optimisée

**Le système est conçu pour être robuste et flexible ! 🚀**
