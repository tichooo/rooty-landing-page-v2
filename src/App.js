import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './pages/Main';
import Company from './pages/Company';
import Collaborator from './pages/Collaborator';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'company':
        return <Company />;
      case 'collaborator':
        return <Collaborator />;
      default:
        return <Main />;
    }
  };

  // Expose la fonction de navigation globalement pour le Header
  global.navigateTo = setCurrentPage;

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
