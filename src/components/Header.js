import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import './ConnexionButton.css';

const Header = () => {
  const handleLogin = () => {
    console.log('Connexion cliquée');
    // Logique de connexion à implémenter
  };

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('main')}>
          <img 
            src={require('../../public/img/ROOTY-removebg-preview.png')}
            alt="ROOTY Logo"
            style={{
              height: 60,
              width: 225,
              objectFit: 'contain',
              cursor: 'pointer',
            }}
          />
        </TouchableOpacity>
        
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigate('company')} style={styles.navLink}>
            <Text style={styles.navLinkText}>Entreprises</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigate('collaborator')} style={styles.navLink}>
            <Text style={styles.navLinkText}>Collaborateurs</Text>
          </TouchableOpacity>
          
          <button className="connexion-button" onClick={handleLogin}>
            Connexion
          </button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  navLink: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navLinkText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    cursor: 'pointer',
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Header;
