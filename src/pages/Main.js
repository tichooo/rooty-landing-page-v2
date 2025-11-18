import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/FillEmail.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';
import PhoneFrame from '../components/PhoneFrame';

const Main = () => {
  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const handleLogin = () => {
    console.log('Connexion cliquée');
    navigate('auth');
  };

  const handleDiscoverSolution = () => {
    console.log('Découvrir la solution cliqué');
    navigate('demo');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Email soumis:', email);
    // Logique d'abonnement à la newsletter ici
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Header transparent */}
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

      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <View style={styles.heroContent}>
          {/* Colonne gauche : texte */}
          <View style={styles.heroLeft}>
            <Text style={styles.heroKicker}>
              Forfait Mobilités Durables & émissions Scope 3
            </Text>

            <Text style={styles.heroTitle}>
              Suivez vos émissions {'\n'}
              <Text style={styles.heroTitleAccent}>Scope 3</Text> et récompensez {'\n'}
              vos collaborateurs.
            </Text>

            <Text style={styles.heroSubtitle}>
              ROOTY simplifie le suivi des déplacements, automatise votre reporting et
              valorise les mobilités durables de vos équipes.
            </Text>

            <View style={styles.buttonContainer}>
              <button className="connexion-button" onClick={handleDiscoverSolution}>
                Découvrir la solution
              </button>

              <button className="learn-more" onClick={handleLogin}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Se connecter</span>
              </button>
            </View>
          </View>

          {/* Colonne droite : PhoneFrame avec dashboard */}
          <View style={styles.heroRight}>
            <PhoneFrame width={300} height={580} className="hero-phone">
              <div style={styles.phoneScreen}>
                <div style={styles.phoneTag}>Vue collaborateur</div>
                <img
                  src={require('../../public/img/interface-principale-cote-employé.png')}
                  alt="Interface principale Rooty côté employé"
                  style={styles.phoneImage}
                />
              </div>
            </PhoneFrame>
          </View>
        </View>
      </View>

      {/* Newsletter Section */}
      <View style={styles.newsletterContainer}>
        <Text style={styles.sectionTitle}>
          Restez informé de l&apos;évolution de ROOTY
        </Text>
        <Text style={styles.newsletterSubtitle}>
          Recevez les nouveautés produit, conseils réglementaires et actualités sur les
          mobilités durables.
        </Text>
        <form onSubmit={handleNewsletterSubmit} style={styles.newsletterForm}>
          <div className="inputGroup">
            <input type="email" name="email" required autoComplete="off" />
            <label htmlFor="email">Votre adresse email</label>
          </div>
          <button type="submit" className="connexion-button" style={styles.newsletterButton}>
            S&apos;abonner
          </button>
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
    backgroundColor: '#020617',
  },

  // Header
  transparentHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
    paddingTop: '1.5rem',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    maxWidth: 1120,
    width: '100%',
    marginHorizontal: 'auto',
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
  },

  // Hero
  heroContainer: {
    minHeight: '100vh',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingTop: '7rem',
    paddingBottom: '5rem',
    backgroundColor: '#020617',
  },
  heroContent: {
    flexDirection: 'row',
    maxWidth: 1120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    flexWrap: 'wrap',
    marginHorizontal: 'auto',
  },
  heroLeft: {
    flex: 1.2,
    minWidth: 280,
  },
  heroKicker: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'var(--accent-soft)',
    marginBottom: '0.75rem',
  },
  heroTitle: {
    fontSize: 'clamp(32px, 4vw, 52px)',
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: '1rem',
    lineHeight: 1.1,
    letterSpacing: -0.5,
    whiteSpace: 'pre-wrap',
  },
  heroTitleAccent: {
    color: 'var(--accent)',
  },
  heroSubtitle: {
    fontSize: 'clamp(14px, 1.1vw, 16px)',
    color: 'var(--text-muted)',
    maxWidth: 480,
    marginBottom: '1.8rem',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.85rem',
  },
  heroRight: {
    flex: 1,
    minWidth: 260,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  // Contenu de l'écran dans le PhoneFrame
  phoneScreen: {
    width: '100%',
    height: '100%',
    padding: '0.9rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    background:
      'radial-gradient(circle at top, #020617 0, #020617 55%, #000000 100%)',
    borderRadius: '2.1rem',
  },
  phoneTag: {
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: 'var(--accent-soft)',
  },
  phoneImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1.6rem',
  },

  // Newsletter
  newsletterContainer: {
    paddingVertical: '4rem',
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: '0.75rem',
  },
  newsletterSubtitle: {
    fontSize: 'clamp(14px, 1.1vw, 16px)',
    color: 'var(--text-muted)',
    textAlign: 'center',
    maxWidth: 520,
  },
  newsletterForm: {
    marginTop: '1.8rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsletterButton: {
    marginTop: '0.3rem',
  },

  // Footer
  footerContainer: {
    paddingVertical: '2.5rem',
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(15, 23, 42, 0.9)',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 'clamp(12px, 1vw, 14px)',
  },
});

export default Main;
