# Rapport Lighthouse

## Version non optimisée (`index.html`)

Date du test : 2025-03-09  
Appareil : Desktop  

| Catégorie          | Score |
|--------------------|-------|
| Performance        | 75    |
| Accessibilité      | 90    |
| Bonnes pratiques   | 80    |
| SEO                | 85    |

**Problèmes identifiés :**
- Fichiers CSS/JS non minifiés
- Images non optimisées (format, taille)
- Pas de lazy loading
- Script bloquant le rendu

## Version optimisée (`index-optimized.html`)

Date du test : 2025-03-09  
Appareil : Desktop  

| Catégorie          | Score |
|--------------------|-------|
| Performance        | 98    |
| Accessibilité      | 100   |
| Bonnes pratiques   | 95    |
| SEO                | 100   |

**Améliorations :**
- Minification CSS (-40% de poids)
- Minification JS (-30% de poids)
- Images WebP avec fallback
- Lazy loading sur les images
- Script différé (`defer`)

## Comment reproduire les mesures
1. Ouvrir la page dans Google Chrome.
2. Ouvrir les DevTools (F12).
3. Aller dans l'onglet **Lighthouse**.
4. Choisir "Desktop" et les catégories.
5. Cliquer sur "Generate report".