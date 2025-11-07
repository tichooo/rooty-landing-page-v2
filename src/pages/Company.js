// Company.js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import '../components/AllButton.css';
import '../components/ButtonStyle.css';
import '../components/ButtonStyleDark.css';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const IMAGE_H = Math.max(280, Math.round(SCREEN_H * 0.4)); // remplace 40vh
const P = 16; // padding de base

export default function Company() {
  const handleDemoRequest = () => console.log('Demander une démo');

  return (
    <ScrollView style={styles.scrollContainer}>
      <Header />

      {/* === HERO === */}
      <View style={styles.heroSection}>
        <View style={styles.heroImageContainer}>
          <Image
            source={require('../../public/img/Dashboard-entreprise.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          {/* Image placeholder (remplace par une Image plus tard) */}
          <View style={styles.heroImagePlaceholder} />

          {/* Carte par-dessus l'image */}
          <OverlayCard />
        </View>
      </View>

      {/* Footer CTA */}
      <View style={styles.footerCTA}>
        <Text style={styles.footerCTATitle}>
          Prêt à objectiver et réduire votre Scope 3.7 ?
        </Text>
        <button className="learn-more-dark" onClick={handleDemoRequest}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Demander une démo</span>
        </button>
      </View>

      {/* ... le reste de ta page (FAQ, footer) ... */}
    </ScrollView>
  );
}

/** 
 * Carte superposée : 70% à gauche de l'image, 30% qui chevauche.
 * On mesure la largeur/hauteur de la carte avec onLayout pour calculer la translation.
 */
function OverlayCard() {
  const [dims, setDims] = useState({ w: 0, h: 0 });

  return (
    <View
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        if (width !== dims.w || height !== dims.h) setDims({ w: width, h: height });
      }}
      style={[
        styles.heroOverlayCardBase,
        // Positionnement dynamique seulement après mesure :
        dims.w > 0 && dims.h > 0 && {
          left: 0,                  // s’ancre au bord gauche du container image
          top: IMAGE_H / 2,         // base : milieu vertical du container
          transform: [
            { translateX: -0.7 * dims.w }, // 70% de la largeur sort vers la gauche
            { translateY: -0.5 * dims.h }, // centrage vertical
          ],
        },
      ]}
    >
      <Text style={styles.heroOverlayTitle}>
        Un outil de pilotage Scope 3 intelligent
      </Text>
      <Text style={styles.heroOverlaySubtitle}>
        Automatiser le reporting des émissions "Trajets domicile-travail".
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /** HERO */
  heroSection: {
    paddingVertical: 24,   // remplace '5%'
    paddingHorizontal: 20, // remplace '5%'
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heroImageContainer: {
    width: '100%',
    maxWidth: 1200,
    height: IMAGE_H,       // remplace '40vh'
    marginBottom: 24,      // remplace '4%'
    position: 'relative',
    overflow: 'visible',   // important pour voir la partie qui dépasse à gauche
  },
  heroImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },

  heroImage: {
  width: '100%',
  height: '100%',
  borderRadius: 12,
},

  // Base de la carte (le positionnement dynamique est ajouté dans OverlayCard)
  heroOverlayCardBase: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#5c6c78',
    paddingVertical: 16,     // remplace '%'
    paddingHorizontal: 20,   // remplace '%'
    borderRadius: 12,
    width: Math.min(420, SCREEN_W * 0.6), // largeur raisonnable (max 420)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'flex-start',
  },
  heroOverlayTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 32,
  },
  heroOverlaySubtitle: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 22,
  },

  /** FOOTER CTA (inchangé) */
  footerCTA: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: '#5c6c78',
    alignItems: 'center',
  },
  footerCTATitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});
