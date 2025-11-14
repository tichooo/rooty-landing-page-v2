// Company.js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import '../components/AllButton.css';
import '../components/ButtonStyle.css';
import '../components/ButtonStyleDark.css';
import '../components/FillEmail.css';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const IMAGE_H = Math.max(280, Math.round(SCREEN_H * 0.65)); // remplace 60vh
const IMAGE_W = Math.round(IMAGE_H * 14.1 / 9); // ratio 16:9
const P = 16; // padding de base

export default function Company() {
  const handleDemoRequest = () => {
    if (global.navigateTo) {
      global.navigateTo('demo');
    }
  };
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Header />

      {/* === HERO === */}
      <View style={styles.heroSection}>
        <View style={styles.heroImageContainer}>
          <Image
            source={require('../../public/img/Dashboard-entreprise.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />

          {/* Carte par-dessus l'image */}
          <OverlayCard />
        </View>
      </View>

      {/* Section: Ce que nous résolvons */}
      <View style={styles.benefitsSection}>
        <View style={styles.benefitsHeader}>
          <View style={styles.benefitsDash} />
          <Text style={styles.benefitsTitle}>
            Benefits you get when{'\n'}using our services
          </Text>
        </View>

        <View style={styles.benefitsGrid}>
          {/* Item 1 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/fiabilite-donnees.png')} // remplace si besoin
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Best Quality</Text>
              <Text style={styles.benefitText}>
                All of our furniture uses the best materials and choices for our customers.
              </Text>
            </View>
          </View>

          {/* Item 2 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/fiabilite-trajets.png')}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Free Shipping</Text>
              <Text style={styles.benefitText}>
                Free shipping everytime you buy furniture from us without exception.
              </Text>
            </View>
          </View>

          {/* Item 3 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/peu-reponses.png')}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Warranty</Text>
              <Text style={styles.benefitText}>
                Every time you buy our furniture products, you will get a warranty without exception.
              </Text>
            </View>
          </View>
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

      {/* Section: Alignement RSE */}
      <View style={styles.alignmentSection}>
        <View style={styles.alignmentImageContainer}>
          <Image
            source={require('../../public/img/entreprise1.png')}
            style={styles.alignmentImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.alignmentTextContainer}>
          <Text style={styles.alignmentTitle}>
            Rooty aligne les enjeux RSE et la motivation des collaborateurs.
          </Text>
        </View>
      </View>

      {/* Section: Images Process */}
      <View style={styles.processSection}>
        <View style={styles.processImageWrapper}>
          <Image
            source={require('../../public/img/entreprise2.png')}
            style={styles.processImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.processImageWrapper}>
          <Image
            source={require('../../public/img/entreprise3.png')}
            style={styles.processImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Newsletter Section */}
      <View style={styles.newsletterSection}>
        <Text style={styles.newsletterTitle}>Restez informé</Text>
        <Text style={styles.newsletterSubtitle}>
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
        </Text>
        <form onSubmit={handleNewsletterSubmit} style={styles.newsletterForm}>
          <div className="inputGroup" style={{ width: '100%' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Votre adresse email</label>
          </div>
          <button type="submit" className="all-button" style={{ alignSelf: 'center' }}>
            <span className="button-text">S'inscrire</span>
            <span className="button-overlay"></span>
          </button>
        </form>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
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
            { translateX: -0.6 * dims.w }, // 70% de la largeur sort vers la gauche
            { translateY: -0.7 * dims.h }, // centrage vertical
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
    width: IMAGE_W,
    maxWidth: 1500,
    height: IMAGE_H,
    marginBottom: 24,
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 1,
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

  /* === BENEFITS === */
  benefitsSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },

  // Bande + Titre (gauche)
  benefitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 46,
    marginBottom: 28,
  },
  benefitsDash: {
    width: 56,
    height: 2,
    backgroundColor: '#1f2937', // gris foncé
    borderRadius: 1,
  },
  benefitsTitle: {
    flexShrink: 1,
    fontSize: 28,           // proche du rendu (utilise 32 si tu veux plus grand)
    fontWeight: '800',
    color: '#111827',
    lineHeight: 34,
  },

  // Grille de 3 blocs (responsive sans media-queries)
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,                 // RN web supporte gap
  },

  // Carte
  benefitItem: {
    flexBasis: '31%',        // ~3 colonnes
    minWidth: 260,           // empile correctement sur petits écrans
    maxWidth: 380,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },

  benefitIconWrap: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitIcon: {
    width: 40,
    height: 40,
    opacity: 1.2,
  },

  benefitTextCol: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  benefitText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },


  /** ALIGNMENT SECTION */
  alignmentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffffff',
    maxWidth: 1200,
    width: '100%',
    marginHorizontal: 'auto',
    gap: 40,
  },
  alignmentImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  alignmentImage: {
    width: '100%',
    height: 400,
  },
  alignmentTextContainer: {
    flex: 1,
  },
  alignmentTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 42,
    justifyContent: 'flex-end',
  },

  /** PROCESS SECTION */
  processSection: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    maxWidth: 1400,
    width: '100%',
    marginHorizontal: 'auto',
  },
  processImageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  processImage: {
    width: '100%',
    height: 350,
  },

  /** NEWSLETTER SECTION */
  newsletterSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    width: '100%',
  },
  newsletterTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  newsletterSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
    maxWidth: 500,
  },
  newsletterForm: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    maxWidth: 600,
    width: '100%',
  },

  /** FOOTER */
  footer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#5c6c78',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
