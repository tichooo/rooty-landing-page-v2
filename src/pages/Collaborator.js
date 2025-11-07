import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundShapes from '../components/BackgroundShapes';
import Button from '../components/Button';

const Collaborator = () => {
  const handleDownloadApp = () => {
    console.log('Télécharger l\'app');
  };

  const handleHowItWorks = () => {
    console.log('Comment ça marche ?');
  };

  const handleLearnMore = () => {
    console.log('En savoir plus sur la confidentialité');
  };

  return (
    <BackgroundShapes>
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
            <Button 
              title="Télécharger l'app" 
              variant="primary"
              showArrow={true}
              onPress={handleDownloadApp}
            />
            <Button 
              title="Comment ça marche ?" 
              variant="outline"
              onPress={handleHowItWorks}
            />
          </View>
        </View>

        {/* Comment ça marche */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comment ça marche</Text>
          
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Activer l'app</Text>
              <Text style={styles.stepDescription}>
                Opt-in, choix du niveau d'automatisation
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Valider la proposition de trajet</Text>
              <Text style={styles.stepDescription}>
                1 tap suffit
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Gagner des points/avantages</Text>
              <Text style={styles.stepDescription}>
                FMD, entretien vélo, e-cartes…
              </Text>
            </View>
          </View>
        </View>

        {/* Ce que vous gagnez */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ce que vous gagnez</Text>
          <View style={styles.valueGrid}>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>🎁</Text>
              <Text style={styles.valueTitle}>Avantages concrets</Text>
              <Text style={styles.valueDescription}>
                Points ↔ récompenses internes/partenaires
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>📄</Text>
              <Text style={styles.valueTitle}>Justificatifs en 1 clic</Text>
              <Text style={styles.valueDescription}>
                FMD/transport sans paperasse
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>📊</Text>
              <Text style={styles.valueTitle}>Impact visible</Text>
              <Text style={styles.valueDescription}>
                Vos progrès (trajets doux, temps actif) en un coup d'œil
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>⚙️</Text>
              <Text style={styles.valueTitle}>Contrôle total</Text>
              <Text style={styles.valueDescription}>
                Corriger un trajet, déclarer télétravail, mettre en pause
              </Text>
            </View>
          </View>
        </View>

        {/* Aperçu de l'app */}
        <View style={styles.appPreviewSection}>
          <Text style={styles.sectionTitle}>Aperçu de l'app</Text>
          
          <View style={styles.appScreensContainer}>
            <View style={styles.appScreen}>
              <Text style={styles.appScreenTitle}>Aujourd'hui</Text>
              <Text style={styles.appScreenDescription}>
                Valider / Modifier / TT
              </Text>
            </View>
            <View style={styles.appScreen}>
              <Text style={styles.appScreenTitle}>Objectif du mois</Text>
              <Text style={styles.appScreenDescription}>
                3 trajets restants → débloquez une récompense
              </Text>
            </View>
            <View style={styles.appScreen}>
              <Text style={styles.appScreenTitle}>Semaine</Text>
              <Text style={styles.appScreenDescription}>
                CO₂ évité / minutes actives
              </Text>
            </View>
          </View>
        </View>

        {/* Confidentialité */}
        <View style={styles.privacySection}>
          <Text style={styles.sectionTitle}>Vos données, vos règles</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>
                Nous n'affichons pas votre localisation détaillée à l'entreprise
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>
                Vos trajets sont agrégés par période/site
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>
                Pause possible hors travail + suppression récente
              </Text>
            </View>
          </View>
          <Button 
            title="En savoir plus sur la confidentialité" 
            variant="outline"
            onPress={handleLearnMore}
            style={styles.learnMoreButton}
          />
        </View>

        {/* Récompenses */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Récompenses</Text>
          <View style={styles.rewardsGrid}>
            <View style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>🚴</Text>
              <Text style={styles.rewardText}>Entretien vélo</Text>
            </View>
            <View style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>🎁</Text>
              <Text style={styles.rewardText}>E-cartes cadeaux</Text>
            </View>
            <View style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>🚿</Text>
              <Text style={styles.rewardText}>Accès casiers/douches</Text>
            </View>
            <View style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>💰</Text>
              <Text style={styles.rewardText}>Primes internes</Text>
            </View>
          </View>
          <Text style={styles.microCopy}>
            Votre entreprise choisit le catalogue. Chaque validation crédite votre solde.
          </Text>
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
          <Button 
            title="Télécharger l'app" 
            variant="white"
            showArrow={true}
            onPress={handleDownloadApp}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
        </View>
      </ScrollView>
    </BackgroundShapes>
  );
};

const styles = StyleSheet.create({
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
});

export default Collaborator;
