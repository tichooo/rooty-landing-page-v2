import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import '../components/AllButton.css';
import '../components/ButtonStyle.css';
import '../components/ButtonStyleDark.css';
import '../components/BasicButton.css';

const Collaborator = () => {
  const handleDownloadApp = () => {
    // Utiliser la navigation globale qui gère la vérification de connexion
    if (global.navigateTo) {
      global.navigateTo('download');
    }
  };

  const handleHowItWorks = () => {
    if (global.navigateTo) {
      global.navigateTo('demo');
    }
  };

  const handleLearnMore = () => {
    console.log('En savoir plus sur la confidentialité');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Header />
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Validez vos trajets en 1 geste.{'\n'}Gagnez des avantages.
          </Text>
          <Text style={styles.heroSubtitle}>
            ROOTY détecte votre trajet domicile-travail, vous confirmez en un swipe, 
            et vous cumulez des points/avantages. Vos données restent anonymisées pour l'entreprise.
          </Text>
          <View style={styles.heroCTAContainer}>
            <button className="learn-more" onClick={handleDownloadApp}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Télécharger</span>
            </button>
            <button className="all-button" onClick={handleHowItWorks}>
              <span>Comment ça marche ?</span>
            </button>
          </View>
        </View>

        {/* Section FMD */}
        <View style={styles.fmdSection}>
          <View style={styles.fmdHeader}>
            <Text style={styles.fmdBadge}>Prime FMD</Text>
            <Text style={styles.fmdTitle}>Faites financer vos trajets domicile-travail</Text>
            <Text style={styles.fmdSubtitle}>
              Le Forfait Mobilités Durables permet à votre employeur de prendre en charge une partie de vos déplacements
              éco-responsables : vélo, covoiturage, trottinette, transports en commun, et plus encore.
            </Text>

            <View style={styles.fmdHighlightStrip}>
              <Text style={styles.fmdHighlightMain}>Jusqu'à 900€ / an</Text>
            </View>
          </View>

          <View style={styles.fmdGrid}>
            <View style={styles.fmdCard}>
              <View style={styles.fmdCardIcon}>
                <Text style={styles.fmdCardIconText}>💰</Text>
              </View>
              <Text style={styles.fmdCardTitle}>Montant de la prime</Text>
              <Text style={styles.fmdText}>
                Votre employeur peut verser jusqu'à <Text style={styles.fmdHighlight}>900€ par an </Text> 
                si le forfait est combiné avec un abonnement de transports en commun, 
                sinon jusqu'à <Text style={styles.fmdHighlight}>600€ maximum</Text>.
              </Text>
              <View style={styles.fmdTag}>
                <Text style={styles.fmdTagText}>Exonéré de charges & d’impôts* </Text>
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
                • Vélo & VAE (perso ou location){'\n'}
                • Covoiturage (conducteur ou passager){'\n'}
                • Trottinettes & engins électriques non thermiques{'\n'}
                • Free-floating (scooters/trottinettes électriques){'\n'}
                • Autopartage électrique / hybride / hydrogène{'\n'}
                • Transports en commun (hors abonnement)
              </Text>
              <Text style={styles.fmdNote}>
                ⚠️ Les scooters thermiques personnels et certains véhicules motorisés individuels
                ne sont pas éligibles.
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

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Questions fréquentes</Text>
          
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Dois-je ouvrir l'app tous les jours ?</Text>
            <Text style={styles.faqAnswer}>
              Non : l'app détecte et vous confirmez en 1 tap.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Et si je connais déjà mon trajet ?</Text>
            <Text style={styles.faqAnswer}>
              Justement : pas de GPS imposé ni guidage ; validation rapide suffit.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Je ne veux pas être suivi·e.</Text>
            <Text style={styles.faqAnswer}>
              Vous pouvez choisir le niveau d'automatisation, mettre en pause et supprimer vos dernières données.
            </Text>
          </View>
        </View>

        {/* Footer CTA */}
        <View style={styles.footerCTA}>
          <Text style={styles.footerCTATitle}>
            Prêt à simplifier vos trajets domicile-travail ?
          </Text>
          <button className="learn-more-dark" onClick={handleDownloadApp}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Télécharger</span>
          </button>
        </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
      </View>
    </ScrollView>
  );
};const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    paddingHorizontal: 60,
    paddingVertical: 100,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  heroTitle: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 900,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 800,
    lineHeight: 32,
  },
  heroCTAContainer: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 60,
    paddingVertical: 60,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 30,
    marginBottom: 20,
    width: '100%',
    maxWidth: 800,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#5CC9B4',
    marginRight: 24,
    width: 60,
    textAlign: 'center',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  valueGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
    maxWidth: 1200,
  },
  valueCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 32,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  valueIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  valueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  appPreviewSection: {
    paddingHorizontal: 60,
    paddingVertical: 60,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  appScreensContainer: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1200,
  },
  appScreen: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 32,
    width: 280,
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#5CC9B4',
  },
  appScreenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  appScreenDescription: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  privacySection: {
    paddingHorizontal: 60,
    paddingVertical: 60,
    backgroundColor: 'rgba(92, 201, 180, 0.08)',
    alignItems: 'center',
  },
  bulletList: {
    width: '100%',
    maxWidth: 800,
    marginBottom: 32,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  bullet: {
    fontSize: 24,
    marginRight: 16,
  },
  bulletText: {
    fontSize: 17,
    color: '#333',
    flex: 1,
    lineHeight: 26,
  },
  learnMoreButton: {
    marginTop: 8,
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    maxWidth: 1000,
    marginBottom: 24,
  },
  rewardCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: 220,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  rewardIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  rewardText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  microCopy: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    maxWidth: 600,
    lineHeight: 24,
  },
  faqItem: {
    width: '100%',
    maxWidth: 800,
    marginBottom: 32,
  },
  faqQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  footerCTA: {
    paddingHorizontal: 60,
    paddingVertical: 80,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerCTATitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 32,
    textAlign: 'center',
    maxWidth: 700,
  },
  footer: {
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
  
  fmdSection: {
    paddingHorizontal: 60,
    paddingVertical: 80,
    backgroundColor: '#ecececff',
    alignItems: 'center',
  },

  fmdHeader: {
    maxWidth: 800,
    alignItems: 'center',
    marginBottom: 40,
  },

  fmdBadge: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  fmdTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },

  fmdSubtitle: {
    fontSize: 17,
    color: '#4b5563',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 26,
  },

  fmdHighlightStrip: {
    marginTop: 4,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
    backgroundColor: '#022c22',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 4,
  },

  fmdHighlightMain: {
    fontSize: 18,
    fontWeight: '700',
    color: '#bbf7d0',
  },

  fmdHighlightSub: {
    fontSize: 14,
    color: '#a7f3d0',
    marginTop: 2,
  },

  fmdHighlightSubMuted: {
    fontSize: 13,
    color: '#6ee7b7',
    marginTop: 2,
  },

  fmdGrid: {
    width: '100%',
    maxWidth: 1000,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 32,
  },

  fmdCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 22,
    flexBasis: '30%',
    minWidth: 260,
    maxWidth: 320,
    flexGrow: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  fmdCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#ecfdf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  fmdCardIconText: {
    fontSize: 20,
  },

  fmdCardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },

  fmdText: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 24,
  },

  fmdHighlight: {
    fontWeight: '700',
    color: '#059669',
  },

  fmdHint: {
    marginTop: 10,
    fontSize: 13,
    color: '#6b7280',
    fontStyle: 'italic',
  },

  fmdNote: {
    fontSize: 13,
    color: '#b45309',
    marginTop: 12,
    fontStyle: 'italic',
    lineHeight: 22,
  },

  fmdTag: {
    marginTop: 14,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#eef2ff',
  },

  fmdTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4f46e5',
  },

  fmdFooter: {
    width: '100%',
    maxWidth: 1000,
    alignItems: 'center',
    gap: 8,
  },

  fmdDisclaimer: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default Collaborator;
