# ROOTY Landing Page - React Native Web

Une landing page moderne construite avec React Native Web, permettant de développer une interface qui fonctionne sur le web en utilisant les composants React Native.

## 🚀 Technologies Utilisées

- **React Native Web** - Pour utiliser React Native dans le navigateur
- **React 18** - Bibliothèque UI
- **Webpack 5** - Bundler et serveur de développement
- **Babel** - Transpileur JavaScript

## 📦 Installation

```bash
npm install
```

## 🎯 Démarrage Rapide

Pour lancer le projet en mode développement :

```bash
npm start
```

Le projet s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`

## 🏗️ Structure du Projet

```
ROOTY-landing-page-v2/
├── public/
│   └── index.html              # Template HTML principal
├── src/
│   ├── components/
│   │   ├── Button.css          # Pied de page
│   ├── App.js                 # Composant principal
│   └── index.js               # Point d'entrée de l'application
├── .babelrc                   # Configuration Babel
├── webpack.config.js          # Configuration Webpack
└── package.json               # Dépendances et scripts
```

## 📜 Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une build de production dans le dossier `dist/`

## 🎨 Personnalisation

Les composants se trouvent dans le dossier `src/components/`. Vous pouvez les modifier pour personnaliser :

- **Hero.js** - Section d'en-tête avec titre et sous-titre
- **Features.js** - Cartes de fonctionnalités
- **Footer.js** - Pied de page

Les styles sont définis avec `StyleSheet` de React Native, offrant une syntaxe familière pour les développeurs React Native.

## 🌐 React Native Web

Ce projet utilise React Native Web qui permet d'écrire du code React Native qui s'exécute dans le navigateur. Les composants comme `View`, `Text`, `ScrollView`, etc. sont automatiquement convertis en éléments HTML appropriés.

## 📝 Notes

- Le projet utilise Webpack Dev Server avec hot reload
- Les assets sont gérés par Webpack
- Compatible avec tous les navigateurs modernes

## 🔧 Configuration

- **Port de développement** : 3000 (configurable dans `webpack.config.js`)
- **Build de production** : dossier `dist/`

---

Créé avec React Native Web ❤️
