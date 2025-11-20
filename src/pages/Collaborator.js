import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1120;

const Collaborator = () => {
  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const handleDownloadApp = () => {
    if (global.navigateTo) {
      global.navigateTo('download');
    }
  };

  const handleHowItWorks = () => {
    if (global.navigateTo) {
      global.navigateTo('demo');
    }
  };

  const handleLearnMorePrivacy = () => {
    console.log('En savoir plus sur la confidentialité');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Header */}
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

      {/* Hero */}
      <View style={styles.heroSection}>
        <View style={styles.heroInner}>
          <Text style={styles.heroKicker}>ROOTY pour les collaborateurs</Text>
          <Text style={styles.heroTitle}>
            Validez vos trajets en 1 geste.{'\n'}Gagnez des avantages.
          </Text>
          <Text style={styles.heroSubtitle}>
            ROOTY détecte votre trajet domicile-travail, vous confirmez en un swipe, et
            vous cumulez des points et avantages. Vos données restent anonymisées pour
            l&apos;entreprise.
          </Text>

          <View style={styles.heroCTAContainer}>
            <button
              className="connexion-button"
              onClick={handleDownloadApp}
              style={{ flex: '0 0 auto', width: 'auto' }}
            >
              Télécharger l&apos;app
            </button>

            <button className="learn-more" onClick={handleHowItWorks}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Comment ça marche ?</span>
            </button>
          </View>
        </View>
      </View>

      {/* Steps */}
      <View style={styles.stepsSection}>
        <View style={styles.stepsInner}>
          <Text style={styles.sectionTitle}>Comment ça fonctionne ?</Text>
          <View style={styles.stepsRow}>
            <View style={styles.stepCard}>
              <Text style={styles.stepNumber}>01</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>ROOTY détecte vos trajets</Text>
                <Text style={styles.stepDescription}>
                  L&apos;app se base sur vos habitudes domicile-travail pour proposer vos
                  trajets, sans guidage GPS imposé.
                </Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <Text style={styles.stepNumber}>02</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Vous validez en un geste</Text>
                <Text style={styles.stepDescription}>
                  Un swipe ou un tap suffit pour confirmer ou ajuster votre déplacement,
                  à votre rythme.
                </Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <Text style={styles.stepNumber}>03</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Vous cumulez des avantages</Text>
                <Text style={styles.stepDescription}>
                  Vos trajets éligibles alimentent votre prime Forfait Mobilités
                  Durables et les éventuelles récompenses mises en place par votre
                  entreprise.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* FMD Section */}
      <View style={styles.fmdSection}>
        <View style={styles.fmdInner}>
          <View style={styles.fmdHeader}>
            <Text style={styles.fmdBadge}>Prime FMD</Text>
            <Text style={styles.fmdTitle}>Faites financer vos trajets domicile-travail</Text>
            <Text style={styles.fmdSubtitle}>
              Le Forfait Mobilités Durables permet à votre employeur de prendre en charge
              une partie de vos déplacements éco-responsables : vélo, covoiturage,
              trottinette, transports en commun, et plus encore.
            </Text>

            <View style={styles.fmdHighlightStrip}>
              <Text style={styles.fmdHighlightMain}>Jusqu&apos;à 900€ / an</Text>
            </View>
          </View>

          <View style={styles.fmdGrid}>
            <View style={styles.fmdCard}>
              <View style={styles.fmdCardIcon}>
                <Text style={styles.fmdCardIconText}>💰</Text>
              </View>
              <Text style={styles.fmdCardTitle}>Montant de la prime</Text>
              <Text style={styles.fmdText}>
                Votre employeur peut verser jusqu&apos;à{' '}
                <Text style={styles.fmdHighlight}>900€ par an</Text> si le forfait est
                combiné avec un abonnement de transports en commun, sinon jusqu&apos;à{' '}
                <Text style={styles.fmdHighlight}>600€ maximum</Text>.
              </Text>
              <View style={styles.fmdTag}>
                <Text style={styles.fmdTagText}>Exonéré de charges &amp; d’impôts*</Text>
              </View>
            </View>

            <View style={styles.fmdCard}>
              <View style={styles.fmdCardIcon}>
                <Text style={styles.fmdCardIconText}>👥</Text>
              </View>
              <Text style={styles.fmdCardTitle}>Qui peut en bénéficier ?</Text>
              <Text style={styles.fmdText}>
                • Salariés en CDI, CDD{'\n'}
                • Intérimaires, apprentis, stagiaires{'\n'}
                • Temps plein ou temps partiel{'\n'}
                • Salariés avec plusieurs lieux de travail
              </Text>
              <Text style={styles.fmdHint}>
                👉 La mise en place dépend de votre entreprise.
              </Text>
            </View>

            <View style={styles.fmdCard}>
              <View style={styles.fmdCardIcon}>
                <Text style={styles.fmdCardIconText}>🚴</Text>
              </View>
              <Text style={styles.fmdCardTitle}>Modes de transport éligibles</Text>
              <Text style={styles.fmdText}>
                • Vélo &amp; VAE (perso ou location){'\n'}
                • Covoiturage (conducteur ou passager){'\n'}
                • Trottinettes &amp; engins électriques non thermiques{'\n'}
                • Free-floating (scooters/trottinettes électriques){'\n'}
                • Autopartage électrique / hybride / hydrogène{'\n'}
                • Transports en commun (hors abonnement)
              </Text>
              <Text style={styles.fmdNote}>
                ⚠️ Les scooters thermiques personnels et certains véhicules motorisés
                individuels ne sont pas éligibles.
              </Text>
            </View>
          </View>

          <View style={styles.fmdFooter}>
            <Text style={styles.fmdDisclaimer}>
              *Dans les limites prévues par la réglementation en vigueur.
            </Text>

            <a
              href="https://www.ecologie.gouv.fr/politiques-publiques/faq-forfait-mobilites-durables-fmd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="basic-button" style={{ color: '#059669' }}>
                → En savoir plus sur le site du gouvernement
              </button>
            </a>
          </View>
        </View>
      </View>

      {/* Privacy + FAQ */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>
            Vos données, vos choix
          </Text>
          <Text
            style={[
              styles.sectionText,
              { textAlign: 'center', alignSelf: 'center' },
            ]}
          >
            ROOTY est conçu pour respecter votre vie privée : vous choisissez le niveau
            d&apos;automatisation, vous pouvez mettre en pause la détection et supprimer
            vos dernières données.
          </Text>
          <button
            className="basic-button"
            style={{ marginTop: 16 }}
            onClick={handleLearnMorePrivacy}
          >
            En savoir plus sur la confidentialité
          </button>

          <View style={styles.faqBlock}>
            <Text style={styles.faqTitle}>Questions fréquentes</Text>

            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Dois-je ouvrir l&apos;app tous les jours ?</Text>
              <Text style={styles.faqAnswer}>
                Non : l&apos;app détecte vos trajets et vous les confirmez en un tap.
              </Text>
            </View>

            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Et si je connais déjà mon trajet ?</Text>
              <Text style={styles.faqAnswer}>
                Justement : pas de GPS imposé ni guidage ; une validation rapide suffit.
              </Text>
            </View>

            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Je ne veux pas être suivi·e.</Text>
              <Text style={styles.faqAnswer}>
                Vous pouvez choisir le niveau d&apos;automatisation, mettre l&apos;app en
                pause et supprimer vos dernières données.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer CTA */}
      <View style={styles.footerCTA}>
        <Text style={styles.footerCTATitle}>
          Prêt à simplifier vos trajets domicile-travail ?
        </Text>
        <button
          className="connexion-button"
          onClick={handleDownloadApp}
          style={{ marginTop: 16, flex: '0 0 auto', width: 'auto' }}
        >
          Télécharger l&apos;app
        </button>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
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
  heroKicker: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 42,          // 36 -> 42
    fontWeight: '700',
    color: '#f9fafb',
    textAlign: 'center',
    lineHeight: 52,        // 44 -> 52 pour garder de l'air
    marginBottom: 20,      // 16 -> 20
  },

  heroSubtitle: {
    fontSize: 17,          // 16 -> 17 (optionnel)
    color: '#9ca3af',
    textAlign: 'center',
    maxWidth: 540,
    marginBottom: 28,      // 24 -> 28
  },

  heroCTAContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  /* STEPS */
  stepsSection: {
    paddingVertical: 72,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  stepsInner: {
    maxWidth: MAX_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 24,
    textAlign: 'left',
  },
  stepsRow: {
    flexDirection: 'column',
    rowGap: 16,
  },
  stepCard: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.5)',
  },
  stepNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: ACCENT,
    marginRight: 16,
    width: 44,
    textAlign: 'center',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  /* FMD */
  fmdSection: {
    paddingVertical: 64,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  fmdInner: {
    maxWidth: MAX_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fmdHeader: {
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  fmdBadge: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 8,
  },
  fmdTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 10,
  },
  fmdSubtitle: {
    fontSize: 15,
    color: '#9ca3af',
    maxWidth: 620,
    lineHeight: 22,
    marginBottom: 16,
  },
  fmdHighlightStrip: {
    paddingVertical: 15,
  },
  fmdHighlightMain: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f9fafb',
  },
  fmdGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 18,
    columnGap: 18,
    marginTop: 8,
  },
  fmdCard: {
    flexBasis: 300,
    flexGrow: 1,
    backgroundColor: '#020617',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.5)',
    padding: 18,
  },
  fmdCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#0b1120',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  fmdCardIconText: {
    fontSize: 22,
  },
  fmdCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 6,
  },
  fmdText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },
  fmdHighlight: {
    color: ACCENT,
    fontWeight: '600',
  },
  fmdTag: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(34,211,238,0.6)',
  },
  fmdTagText: {
    fontSize: 12,
    color: '#f9fafb',
  },
  fmdHint: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 8,
  },
  fmdNote: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 8,
  },
  fmdFooter: {
    marginTop: 20,
    gap: 10,
    alignItems: 'flex-start',
  },
  fmdDisclaimer: {
    fontSize: 12,
    color: '#9ca3af',
  },

  /* PRIVACY + FAQ */
  section: {
    paddingVertical: 60,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
  },
  sectionInner: {
    maxWidth: MAX_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionText: {
    fontSize: 15,
    color: '#9ca3af',
    maxWidth: 620,
    lineHeight: 22,
    marginBottom: 24,
  },
  faqBlock: {
    marginTop: 24,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 16,
  },
  faqItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(30, 41, 59, 0.8)',
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#9ca3af',
  },

  /* FOOTER CTA */
  footerCTA: {
    paddingVertical: 60,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
  },
  footerCTATitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
  },

  /* FOOTER */
  footer: {
    paddingVertical: 30,
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

export default Collaborator;
