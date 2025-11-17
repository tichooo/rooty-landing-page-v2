import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './pages/Main';
import Company from './pages/Company';
import Collaborator from './pages/Collaborator';
import Authentification from './pages/Authentification';
import Download from './pages/Download';
import Demo from './pages/Demo';
import PilotTest from './pages/PilotTest';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // État de connexion
  const [loginMessage, setLoginMessage] = useState(''); // Message pour la page d'authentification

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Fonction pour gérer la navigation avec vérification de connexion
  const handleNavigation = (page) => {
    if (page === 'download') {
      if (isUserLoggedIn) {
        setCurrentPage('download');
      } else {
        setLoginMessage('Veuillez vous connecter avant de télécharger le logiciel');
        setCurrentPage('auth');
      }
    } else {
      setCurrentPage(page);
      setLoginMessage(''); // Réinitialiser le message
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'company':
        return <Company />;
      case 'collaborator':
        return <Collaborator />;
      case 'auth':
        return <Authentification loginMessage={loginMessage} setIsUserLoggedIn={setIsUserLoggedIn} />;
      case 'download':
        return <Download />;
      case 'demo':
        return <Demo />;
      case 'pilottest':
        return <PilotTest />;
      default:
        return <Main />;
    }
  };

  // Expose la fonction de navigation globalement pour le Header
  global.navigateTo = handleNavigation;
  global.isUserLoggedIn = isUserLoggedIn;

  return (
    <View style={styles.container}>
      {renderPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
