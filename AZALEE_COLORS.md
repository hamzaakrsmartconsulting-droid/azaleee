# 🎨 Codes Couleur Azalée Patrimoine

## Dégradé Principal : Bleu Azalée → Or Azalée

### Couleurs de Base

**Bleu Azalée (Début du dégradé)**
- Code hexadécimal : `#253F60`
- RGB : `rgb(37, 63, 96)`
- Utilisé comme couleur de départ dans les dégradés

**Or Azalée (Fin du dégradé)**
- Code hexadécimal : `#B99066`
- RGB : `rgb(185, 144, 102)`
- Utilisé comme couleur de fin dans les dégradés

### Utilisation dans le Code

```css
/* Dégradé horizontal (gauche vers droite) */
bg-gradient-to-r from-[#253F60] to-[#B99066]

/* Dégradé vertical (haut vers bas) */
bg-gradient-to-b from-[#253F60] to-[#B99066]

/* Dégradé diagonal */
bg-gradient-to-br from-[#253F60] to-[#B99066]
```

### Exemples d'Utilisation dans Tailwind CSS

```jsx
// Dégradé horizontal
<div className="bg-gradient-to-r from-[#253F60] to-[#B99066]">

// Dégradé vertical
<div className="bg-gradient-to-b from-[#253F60] to-[#B99066]">

// Dégradé diagonal (bas-droite)
<div className="bg-gradient-to-br from-[#253F60] to-[#B99066]">
```

### Variantes de Couleurs Associées

**Bleu Azalée Foncé**
- `#112033` - Bleu très foncé (utilisé pour les textes)
- `#00469f` - Bleu moyen foncé
- `#253F60` - Bleu azalée principal

**Bleu Azalée Clair**
- `#4EBBBD` - Bleu turquoise azalée
- `#19515e` - Bleu-vert foncé

**Or Azalée Variantes**
- `#B99066` - Or azalée principal
- `#A67C52` - Or azalée foncé (hover states)
- `#A67A5A` - Or azalée alternatif

### Dégradés Alternatifs Utilisés

1. **Bleu vers Bleu Turquoise**
   - `from-[#253F60] to-[#4EBBBD]`

2. **Or vers Or Foncé**
   - `from-[#B99066] to-[#A67C52]`

3. **Bleu avec Transparence**
   - `from-[#253F60] via-[#253F60]/80 to-transparent`

### Fichiers CSS où les couleurs sont définies

Les couleurs sont définies dans `src/styles/tailwind.css` :
- `--global-bg-1: #00469f` (Bleu)
- `--global-bg-2: #112033` (Bleu foncé)
- `--global-bg-4: #253F60` (Bleu azalée)
- `--global-bg-5: #4ebbbd` (Bleu turquoise)
- `--global-bg-6: #b99066` (Or azalée)
- `--global-text-5: #b99066` (Or azalée pour texte)




