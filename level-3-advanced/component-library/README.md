# Codveda Component Library

Bibliothèque de composants React réutilisables, construite avec **Vite** et documentée avec **Storybook**. Conçue pour la cohérence, l'accessibilité et la facilité d'utilisation dans les projets Codveda.

## ✨ Fonctionnalités

- 🧩 **Composants modulaires** – Construction avec un système de design cohérent.
- 📚 **Intégration Storybook** – Développez et documentez les composants en isolation.
- ♿ **Accessible** – Attributs ARIA et navigation au clavier.
- 🎨 **Personnalisable** – Étendez facilement les styles via des classes CSS ou variables.
- 📦 **Prêt pour npm** – Publiez en tant que package privé ou public.

## 🚀 Guide de démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation pour les utilisateurs (si vous utilisez la bibliothèque dans un projet)

```bash
npm install codveda-components

npm create vite@latest component-library -- --template react
cd component-library

rm -rf src/App.jsx src/main.jsx src/index.css src/App.css

mkdir -p src/components/Button src/styles

npx storybook@latest init

rm -rf stories

npm run storybook