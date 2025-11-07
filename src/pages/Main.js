import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/ButtonStyleDark.css';
import '../components/FillEmail.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

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
              <button className="basic-button" onClick={() => navigate('company')}>
                Entreprises
              </button>
              
              <button className="basic-button" onClick={() => navigate('collaborator')}>
                Collaborateurs
              </button>
              
              <button className="connexion-button" onClick={handleLogin}>
                Connexion
              </button>
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
              <View style={styles.buttonContainer}>
                <button className="learn-more-dark" onClick={handleDiscoverSolution}>
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Découvrir</span>
                </button>
              </View>
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
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
    paddingTop: '3%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '1.5%',
    maxWidth: '80%',
    marginHorizontal: 'auto',
    width: '100%',
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10%',
  },
  navLink: {
    paddingVertical: '1%',
    paddingHorizontal: '-1.5%',
  },
  navLinkTextWhite: {
    fontSize: 'clamp(14px, 1.2vw, 16px)',
    color: '#ffffff',
    fontWeight: '500',
    cursor: 'pointer',
  },
  loginButton: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
  },
  // Hero Styles - Pleine page
  heroContainer: {
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '6%',
  },
  heroContent: {
    flexDirection: 'row',
    maxWidth: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '5%',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: 1,
    minWidth: '40%',
  },
  heroTitle: {
    fontSize: 'clamp(32px, 5vw, 56px)',
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: '5%',
    lineHeight: '110%',
    letterSpacing: 0.5,
    whiteSpace: 'pre-wrap',
  },
  heroSubtitle: {
    fontSize: 'clamp(20px, 3vw, 32px)',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '5%',
    fontWeight: '400',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
  discoverButton: {
    alignSelf: 'flex-start',
  },
  heroRight: {
    flex: 1,
    minWidth: '40%',
    maxWidth: '50%',
    minHeight: '30vh',
  },
  // Newsletter Styles
  newsletterContainer: {
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 4vw, 36px)',
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    marginBottom: '2%',
  },
  newsletterSubtitle: {
    fontSize: 'clamp(14px, 2vw, 18px)',
    color: '#666',
    textAlign: 'center',
    marginBottom: '4%',
    maxWidth: '80%',
    paddingHorizontal: '2%',
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
  },
  // Footer Styles
  footerContainer: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 'clamp(12px, 1vw, 14px)',
  },
});

export default Main;
