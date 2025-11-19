import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/FillEmail.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';
import PhoneFrame from '../components/PhoneFrame';

const ACCENT = '#22d3ee';

const Main = () => {
  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const handleLogin = () => {
    navigate('auth');
  };

  const handleDiscoverSolution = () => {
    navigate('demo');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Email soumis :', email);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* HEADER */}
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
            <button
              className="basic-button"
              onClick={() => navigate('company')}
              style={styles.headerLink}
            >
              Entreprises
            </button>

            <button
              className="basic-button"
              onClick={() => navigate('collaborator')}
              style={styles.headerLink}
            >
              Collaborateurs
            </button>

            <button
              className="connexion-button"
              onClick={handleLogin}
              style={styles.headerCta}
            >
              Connexion
            </button>
          </View>
        </View>
      </View>

      {/* HERO */}
      <View style={styles.heroContainer}>
        <View style={styles.heroContent}>
          {/* Colonne gauche */}
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

          {/* Colonne droite : PhoneFrame */}
          <View style={styles.heroRight}>
            <PhoneFrame width={300} height={580} className="hero-phone">
              <div style={styles.phoneScreen}>
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

      {/* NEWSLETTER */}
      <View style={styles.newsletterContainer}>
        <Text style={styles.sectionTitle}>
          Restez informé de l&apos;évolution de ROOTY
        </Text>
        <Text style={styles.newsletterSubtitle}>
          Recevez les nouveautés produit, conseils réglementaires et actualités sur les
          mobilités durables.
        </Text>

        <form onSubmit={handleNewsletterSubmit} style={styles.newsletterForm}>
          <div className="inputGroup" style={styles.newsletterInputWrapper}>
            <input type="email" name="email" required autoComplete="off" />
            <label htmlFor="email">Votre adresse email</label>
          </div>

          <button
            type="submit"
            className="connexion-button"
            style={styles.newsletterButton}
          >
            S&apos;abonner
          </button>
        </form>
      </View>

      {/* FOOTER */}
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

  /* HEADER */
  transparentHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
    paddingTop: 24,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    maxWidth: 1120,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLink: {
    marginLeft: 28,
  },
  headerCta: {
    marginLeft: 40,
  },

  /* HERO */
  heroContainer: {
    minHeight: '100vh',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingTop: 130,   // laisse la place au header
    paddingBottom: 80,
    backgroundColor: '#020617',
  },
  heroContent: {
    flexDirection: 'row',
    maxWidth: 1120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroLeft: {
    flex: 1.2,
    minWidth: 280,
  },
  heroKicker: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 18,
    lineHeight: 46, // plus d’air entre les lignes
  },
  heroTitleAccent: {
    color: ACCENT,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    maxWidth: 480,
    marginBottom: 28,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
  },

  heroRight: {
    flex: 1,
    minWidth: 260,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  /* CONTENU DU PHONEFRAME */
  phoneScreen: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 24,
  },
  phoneImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  /* NEWSLETTER */
  newsletterContainer: {
    paddingVertical: 64,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 8,
  },
  newsletterSubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    maxWidth: 520,
  },
  newsletterForm: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',      // input + bouton sur la même ligne
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsletterInputWrapper: {
    marginRight: 16,           // espace entre input et bouton
    marginBottom: 8,
  },
  newsletterButton: {
    marginTop: 0,
  },

  /* FOOTER */
  footerContainer: {
    paddingVertical: 24,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(15, 23, 42, 0.9)',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 13,
  },
});

export default Main;
