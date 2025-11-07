import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundShapes from '../components/BackgroundShapes';
import Button from '../components/Button';
import '../components/ButtonStyle.css';
import '../components/FillEmail.css';

const Main = () => {
  const handleLogin = () => {
    console.log('Connexion cliquée');
  };

  const handleDiscoverSolution = () => {
    console.log('Découvrir la solution cliqué');
    // Navigation ou action à implémenter
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Email soumis:', email);
    // Logique d'abonnement à la newsletter
  };

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

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
              <button className="learn-more" onClick={handleDiscoverSolution}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Découvrir</span>
              </button>
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

      {/* Newsletter Section */}
      <View style={styles.newsletterContainer}>
        <Text style={styles.sectionTitle}>S'abonner à la Newsletter</Text>
        <Text style={styles.newsletterSubtitle}>
          Restez informé des dernières actualités et nouveautés ROOTY
        </Text>
        <form onSubmit={handleNewsletterSubmit} style={styles.newsletterForm}>
          <div className="inputGroup">
            <input type="email" name="email" required autoComplete="off" />
            <label htmlFor="email">Votre adresse email</label>
          </div>
        </form>
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
  // Newsletter Styles
  newsletterContainer: {
    padding: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  newsletterSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 600,
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
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
