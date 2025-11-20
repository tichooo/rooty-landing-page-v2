// Company.js – version corrigée (largeur + hero + process + CTA/newsletter 2 colonnes)

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/FillEmail.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1320;

export default function Company() {
  const [email, setEmail] = useState('');

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const handleDemoRequest = () => {
    navigate('demo');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
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
              onClick={() => navigate('auth')}
              style={styles.headerCta}
            >
              Connexion
            </button>
          </View>
        </View>
      </View>

      {/* HERO : Dashboard + card partiellement superposée */}
      <View style={styles.heroSection}>
        <View style={styles.heroInner}>
          <View style={styles.heroImageContainer}>
            <Image
              source={require('../../public/img/Dashboard-entreprise.png')}
              style={styles.heroImage}
              resizeMode="contain"
            />

            {/* card qui déborde sous l'image (20–30 % de superposition) */}
            <View style={styles.heroOverlayCard}>
              <Text style={styles.heroOverlayKicker}>ROOTY pour les entreprises</Text>
              <Text style={styles.heroOverlayTitle}>
                Un pilotage Scope 3.7{'\n'}sans Excel.
              </Text>
              <Text style={styles.heroOverlaySubtitle}>
                Visualisez vos émissions liées aux trajets domicile-travail, suivez la
                prime FMD et objectivez vos actions de mobilité durable.
              </Text>

              <View style={styles.heroOverlayBullets}>
                <Text style={styles.heroOverlayBullet}>• Collecte automatique des trajets</Text>
                <Text style={styles.heroOverlayBullet}>• Indicateurs prêts pour vos reportings</Text>
                <Text style={styles.heroOverlayBullet}>• Suivi du budget FMD et de l&apos;impact CO₂</Text>
              </View>

              <button
                className="connexion-button"
                onClick={handleDemoRequest}
                style={{ marginTop: 20, flex: '0 0 auto', width: 'auto' }}
              >
                Demander une démo
              </button>
            </View>
          </View>
        </View>
      </View>

      {/* AVANTAGES */}
      <View style={styles.benefitsSection}>
        <View style={styles.benefitsHeader}>
          <View style={styles.benefitsDash} />
          <Text style={styles.benefitsTitle}>
            Avantages que vous obtenez en{'\n'}utilisant ROOTY
          </Text>
        </View>

        <View style={styles.benefitsGrid}>
          {/* Item 1 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/peu-reponses.png')}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Faible participation des collaborateurs</Text>
              <Text style={styles.benefitText}>
                Un parcours simple et ludique pour encourager la déclaration des trajets
                et valoriser les mobilités durables.
              </Text>
            </View>
          </View>

          {/* Item 2 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/fiabilite-donnees.png')}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Données partielles ou déclaratives</Text>
              <Text style={styles.benefitText}>
                Une donnée consolidée et exploitable, prête pour vos bilans GES et
                reportings réglementaires.
              </Text>
            </View>
          </View>

          {/* Item 3 */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconWrap}>
              <Image
                source={require('../../public/img/icons/fiabilite-trajets.png')}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.benefitTextCol}>
              <Text style={styles.benefitTitle}>Fiabilité limitée des trajets</Text>
              <Text style={styles.benefitText}>
                Une précision accrue grâce à une collecte automatisée et une
                catégorisation des modes de transport.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* PROCESS EN 3 ÉTAPES : entreprise 1, 2, 3 */}
      <View style={styles.processSection}>
        <Text style={styles.processTitle}>Un process simple et automatisé</Text>

        <View style={styles.processStepsRow}>
          {/* Étape 1 */}
          <View style={styles.processStepCard}>
            <Text style={styles.processStepLabel}>Étape 1</Text>
            <Image
              source={require('../../public/img/entreprise1.png')}
              style={styles.processImage}
              resizeMode="contain"
            />
            <Text style={styles.processStepTitle}>
              Les employés renseignent ou valident leurs trajets.
            </Text>
            <Text style={styles.processCaption}>
              Application simple (1 clic par semaine) ou détection automatique. Rooty
              calcule l&apos;impact CO₂ et les jours de mobilité douce.
            </Text>
          </View>

          {/* Étape 2 */}
          <View style={styles.processStepCard}>
            <Text style={styles.processStepLabel}>Étape 2</Text>
            <Image
              source={require('../../public/img/entreprise2.png')}
              style={styles.processImage}
              resizeMode="contain"
            />
            <Text style={styles.processStepTitle}>
              Rooty alimente le reporting Scope 3 entreprise.
            </Text>
            <Text style={styles.processCaption}>
              Données agrégées, fiables et conformes aux standards (GHG Protocol), prêtes
              pour vos reportings RSE.
            </Text>
          </View>

          {/* Étape 3 */}
          <View style={styles.processStepCard}>
            <Text style={styles.processStepLabel}>Étape 3</Text>
            <Image
              source={require('../../public/img/entreprise3.png')}
              style={styles.processImage}
              resizeMode="contain"
            />
            <Text style={styles.processStepTitle}>
              Les RH récompensent automatiquement les collaborateurs.
            </Text>
            <Text style={styles.processCaption}>
              Versement de la prime FMD et suivi des statuts, avec une vision claire pour
              les équipes RH, RSE et Finance.
            </Text>
          </View>
        </View>
      </View>

      {/* CTA + NEWSLETTER côte à côte */}
      <View style={styles.ctaNewsletterSection}>
        <View style={styles.ctaColumn}>
          <Text style={styles.footerCTATitle}>
            Prêt à objectiver et réduire votre Scope 3.7 ?
          </Text>
          <Text style={styles.footerCTAText}>
            Planifiez une démo de ROOTY pour découvrir comment simplifier votre reporting
            et engager vos collaborateurs.
          </Text>
          <button className="connexion-button" onClick={handleDemoRequest}>
            Demander une démo
          </button>
        </View>

        <View style={styles.newsletterColumn}>
          <Text style={styles.newsletterTitle}>
            Restez informé de l&apos;évolution de ROOTY
          </Text>
          <Text style={styles.newsletterSubtitle}>
            Recevez les nouveautés produit, conseils réglementaires et actualités sur les
            mobilités durables.
          </Text>

          <form onSubmit={handleNewsletterSubmit} style={styles.newsletterForm}>
            <div className="inputGroup" style={styles.newsletterInputWrapper}>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <label htmlFor="email">Votre adresse email</label>
            </div>
            <button
              type="submit"
              className="connexion-button"
              style={{ flex: '0 0 auto', width: 'auto' }}
            >
              S&apos;inscrire
            </button>
          </form>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
      </View>
    </ScrollView>
  );
}

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
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    maxWidth: MAX_WIDTH,
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
  heroSection: {
    paddingTop: 140,
    paddingBottom: 80,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  heroInner: {
    maxWidth: MAX_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  heroImageContainer: {
    width: '100%',
    position: 'relative',
    alignSelf: 'center',
  },
  heroImage: {
    width: '100%',
    height: 420,
    borderRadius: 24,
  },
  heroOverlayCard: {
    position: 'absolute',
    left: 32,
    bottom: -60,               // déborde moins
    maxWidth: 340,             // card plus petite
    padding: 16,
    borderRadius: 18,
    backgroundColor: 'rgba(15, 23, 42, 0.98)',
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.6)',
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 32,
  },

  heroOverlayKicker: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 4,
  },
  heroOverlayTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 6,
  },
  heroOverlaySubtitle: {
    fontSize: 13,
    color: '#e5e7eb',
    marginBottom: 8,
  },

  heroOverlayBullets: {
    marginBottom: 14,
  },
  heroOverlayBullet: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 4,
  },

  /* BENEFICES */
  benefitsSection: {
    paddingTop: 120, // pour compenser la card qui déborde
    paddingBottom: 64,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  benefitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    maxWidth: MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  benefitsDash: {
    width: 56,
    height: 2,
    borderRadius: 1,
    backgroundColor: ACCENT,
    marginRight: 18,
  },
  benefitsTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
  },
  benefitsGrid: {
    maxWidth: MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.5)',
    maxWidth: 380,
    flexGrow: 1,
  },
  benefitIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: '#0b1120',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  benefitIcon: {
    width: 32,
    height: 32,
  },
  benefitTextCol: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  benefitText: {
    fontSize: 14,
    color: '#9ca3af',
  },

  /* PROCESS 3 ÉTAPES */
  processSection: {
    paddingVertical: 64,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  processTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 28,
  },
  processStepsRow: {
    maxWidth: MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',   // meilleure répartition
    gap: 24,
  },

  processStepCard: {
    flexBasis: 320,
    maxWidth: 360,
    backgroundColor: '#020617',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.5)',
    padding: 16,
  },
  processImage: {
    width: '100%',
    height: 250,       // plus grand qu’avant
    marginBottom: 10,
  },

  processStepLabel: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 8,
  },
  
  processStepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 6,
  },
  processCaption: {
    fontSize: 13,
    color: '#9ca3af',
  },

  /* CTA + NEWSLETTER EN 2 COLONNES */
  ctaNewsletterSection: {
    paddingVertical: 64,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    maxWidth: MAX_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: 32,
  },

  ctaColumn: {
    flex: 1,
    minWidth: 320,
    marginBottom: 0,
    paddingRight: 24,
  },
  newsletterColumn: {
    flex: 1,
    minWidth: 320,
    marginBottom: 0,
    paddingLeft: 24,
  },

  footerCTATitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 10,
  },
  footerCTAText: {
    fontSize: 15,
    color: '#9ca3af',
    maxWidth: 520,
    marginBottom: 20,
  },
  newsletterTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 8,
  },
  newsletterSubtitle: {
    fontSize: 15,
    color: '#9ca3af',
    maxWidth: 520,
  },
  newsletterForm: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 16,
    rowGap: 12,
  },
  newsletterInputWrapper: {
    minWidth: 260,
  },

  /* FOOTER */
  footer: {
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
