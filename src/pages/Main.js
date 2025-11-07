import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundShapes from '../components/BackgroundShapes';
import Button from '../components/Button';

const Main = () => {
  const handleLogin = () => {
    console.log('Connexion cliquée');
  };

  const handleDiscoverSolution = () => {
    console.log('Découvrir la solution cliqué');
    // Navigation ou action à implémenter
  };

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const features = [
    {
      id: 1,
      title: 'React Native Web',
      description: 'Une seule codebase pour le web et le mobile',
    },
    {
      id: 2,
      title: 'Performance',
      description: 'Optimisé pour une expérience utilisateur fluide',
    },
    {
      id: 3,
      title: 'Design Moderne',
      description: 'Interface élégante et responsive',
    },
  ];

  return (
    <BackgroundShapes>
      <ScrollView style={styles.scrollContainer}>
        {/* Header transparent intégré */}
        <View style={styles.transparentHeader}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigate('main')}>
              <img 
                src={require('../../public/img/Logo-R-bleu.png')}
                alt="ROOTY Logo"
                style={{
                  height: 60,
                  width: 225,
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </TouchableOpacity>
            
            <View style={styles.headerNav}>
              <TouchableOpacity onPress={() => navigate('company')} style={styles.navLink}>
                <Text style={styles.navLinkTextWhite}>Entreprises</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigate('collaborator')} style={styles.navLink}>
                <Text style={styles.navLinkTextWhite}>Collaborateurs</Text>
              </TouchableOpacity>
              
              <Button 
                title="Connexion" 
                variant="white"
                onPress={handleLogin}
                style={styles.loginButton}
              />
            </View>
          </View>
        </View>
        
        {/* Hero Section - Pleine page */}
        <View style={styles.heroContainer}>
          <View style={styles.heroContent}>
            {/* Partie gauche avec texte */}
            <View style={styles.heroLeft}>
              <Text style={styles.heroTitle}>
                Une plateforme unique pour suivre
                vos émissions Scope 3 et récompenser
                vos salariés grâce au Forfait Mobilités Durables
              </Text>
              <Text style={styles.heroSubtitle}>
                Un outil de pilotage intelligent
              </Text>
              <Button 
                title="Découvrir la solution" 
                variant="white"
                showArrow={true}
                onPress={handleDiscoverSolution}
                style={styles.discoverButton}
              />
            </View>
            
            {/* Partie droite pour l'image */}
            <View style={styles.heroRight}>
              <img 
                src={require('../../public/img/Mascotte.png')}
                alt="Colibri coloré"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </View>
          </View>
        </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Nos Fonctionnalités</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <View key={feature.id} style={styles.featureCard}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
      </View>
    </ScrollView>
    </BackgroundShapes>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  // Header transparent
  transparentHeader: {
    position: 'absolute',
    top: 100,
    left: 200,
    right: 400,
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 20,
    maxWidth: 4000,
    marginHorizontal: 'auto',
    width: '100%',
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  navLink: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navLinkTextWhite: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    cursor: 'pointer',
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // Hero Styles - Pleine page
  heroContainer: {
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingTop: 10,
  },
  heroContent: {
    flexDirection: 'row',
    maxWidth: 2200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 150,
  },
  heroLeft: {
    flex: 1,
    maxWidth: 1050,
  },
  heroTitle: {
    fontSize: 72,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 100,
    lineHeight: 80,
    letterSpacing: 0.5,
    flexWrap: 'nowrap',
  },
  heroSubtitle: {
    fontSize: 44,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 80,
    fontWeight: '400',
  },
  discoverButton: {
    alignSelf: 'flex-start',
  },
  heroRight: {
    flex: 1,
    minHeight: 500,
  },
  // Features Styles
  featuresContainer: {
    padding: 60,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 8,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  // Footer Styles
  footerContainer: {
    padding: 40,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Main;
