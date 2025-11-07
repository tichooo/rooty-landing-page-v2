import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundShapes from '../components/BackgroundShapes';
import Button from '../components/Button';

const Company = () => {
  const handleDemoRequest = () => {
    console.log('Demander une démo');
  };

  const handleDownloadPDF = () => {
    console.log('Télécharger la fiche pilote');
  };

  const handlePilotRequest = () => {
    console.log('Planifier un pilote');
  };

  return (
    <BackgroundShapes>
      <ScrollView style={styles.scrollContainer}>
        <Header />
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Mesurez et pilotez le Scope 3,{'\n'}sans friction côté salariés.
          </Text>
          <Text style={styles.heroSubtitle}>
            ROOTY collecte des trajets domicile-travail de façon anonymisée, calcule des indicateurs 
            auditables et active des leviers (FMD, vélo, covoit) pour réduire vos émissions.
          </Text>
          <View style={styles.heroCTAContainer}>
            <Button 
              title="Demander une démo" 
              variant="primary"
              showArrow={true}
              onPress={handleDemoRequest}
            />
            <Button 
              title="Obtenir la fiche pilote (PDF)" 
              variant="outline"
              onPress={handleDownloadPDF}
            />
          </View>
        </View>

        {/* Problème & Opportunité */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Le Scope 3 est critique, mais pénible à mesurer</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Données éparses, déclaratif imprécis</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Faible engagement des salariés si pas de bénéfice</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Manque d'exports clairs pour vos reportings internes</Text>
            </View>
          </View>
        </View>

        {/* Solution */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collecte simple → Calcul fiable → Export instantané</Text>
          
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Collecte légère & opt-in</Text>
              <Text style={styles.stepDescription}>
                Détection silencieuse + validation facultative 1-tap par les collaborateurs.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Calcul Scope 3</Text>
              <Text style={styles.stepDescription}>
                Distances/modes agrégés, traçabilité, inclusion télétravail.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Exports "audit-ready"</Text>
              <Text style={styles.stepDescription}>
                Par site/période/mode, prêts à intégrer à vos reportings.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>4</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Activation</Text>
              <Text style={styles.stepDescription}>
                Rewards & dispositifs (FMD, parking vélo, etc.) pour augmenter la part de trajets doux.
              </Text>
            </View>
          </View>
        </View>

        {/* Valeur créée */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Valeur créée</Text>
          <View style={styles.valueGrid}>
            <View style={styles.valueCard}>
              <Text style={styles.valueTitle}>Conformité</Text>
              <Text style={styles.valueDescription}>
                Données agrégées, historisées, justificatifs.
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueTitle}>Temps gagné</Text>
              <Text style={styles.valueDescription}>
                Collecte automatisée, corrections en self-service.
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueTitle}>Réduction & ROI</Text>
              <Text style={styles.valueDescription}>
                Leviers concrets (vélo/covoit/FMD) mesurés dans le temps.
              </Text>
            </View>
            <View style={styles.valueCard}>
              <Text style={styles.valueTitle}>Acceptabilité sociale</Text>
              <Text style={styles.valueDescription}>
                Anonymat garanti, contrôle utilisateur.
              </Text>
            </View>
          </View>
        </View>

        {/* Dashboard */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Votre cockpit Scope 3</Text>
          <View style={styles.dashboardPlaceholder}>
            <Text style={styles.placeholderText}>[Capture d'écran dashboard]</Text>
          </View>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>✓</Text>
              <Text style={styles.bulletText}>Vue par site et par mode</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>✓</Text>
              <Text style={styles.bulletText}>Tendance mensuelle & objectifs</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>✓</Text>
              <Text style={styles.bulletText}>Télétravail intégré</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>✓</Text>
              <Text style={styles.bulletText}>Exports CSV/PDF en 1 clic</Text>
            </View>
          </View>
        </View>

        {/* Confidentialité */}
        <View style={styles.securitySection}>
          <Text style={styles.sectionTitle}>Confidentialité by design</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>
                Pas de trace GPS point-à-point stockée côté entreprise
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>Agrégation/k-anonymity par cohortes</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>🔒</Text>
              <Text style={styles.bulletText}>
                Opt-in clair et contrôles utilisateur (pause, suppression récente)
              </Text>
            </View>
          </View>
        </View>

        {/* Intégrations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>S'intègre à votre environnement</Text>
          <Text style={styles.integrationText}>
            SSO (SAML/OAuth) • SIRH (import collaborateurs/sites) • Exports standards • Support multi-sites
          </Text>
        </View>

        {/* Pilote */}
        <View style={styles.pilotSection}>
          <Text style={styles.sectionTitle}>Pilote 12 semaines</Text>
          <Text style={styles.pilotDescription}>
            Cadrage sites, onboarding, baseline → suivi → rapport final (adoption, % trajets doux, tendance CO₂).
          </Text>
          <Button 
            title="Planifier un pilote" 
            variant="primary"
            showArrow={true}
            onPress={handlePilotRequest}
            style={styles.pilotButton}
          />
        </View>

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Questions fréquentes</Text>
          
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Les données individuelles sont-elles visibles ?</Text>
            <Text style={styles.faqAnswer}>
              Non, seules des données agrégées sont accessibles à l'entreprise.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Télétravail pris en compte ?</Text>
            <Text style={styles.faqAnswer}>Oui, via un statut dédié.</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Et si un salarié ne veut pas ?</Text>
            <Text style={styles.faqAnswer}>
              L'app est opt-in et propose une pause hors temps de travail.
            </Text>
          </View>
        </View>

        {/* Footer CTA */}
        <View style={styles.footerCTA}>
          <Text style={styles.footerCTATitle}>
            Prêt à objectiver et réduire votre Scope 3.7 ?
          </Text>
          <Button 
            title="Demander une démo" 
            variant="white"
            showArrow={true}
            onPress={handleDemoRequest}
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
    backgroundColor: 'transparent',
  },
  heroSection: {
    padding: 80,
    paddingTop: 140,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    maxWidth: 900,
    lineHeight: 60,
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
    padding: 60,
    paddingHorizontal: 80,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  bulletList: {
    gap: 20,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
  },
  bullet: {
    fontSize: 24,
    color: '#5CC9B4',
    fontWeight: 'bold',
  },
  bulletText: {
    fontSize: 18,
    color: '#666',
    flex: 1,
    lineHeight: 28,
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    gap: 25,
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#5CC9B4',
    minWidth: 60,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  valueGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
  },
  valueCard: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  valueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5CC9B4',
    marginBottom: 15,
  },
  valueDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  dashboardPlaceholder: {
    backgroundColor: '#f0f0f0',
    height: 400,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 18,
    color: '#999',
    fontStyle: 'italic',
  },
  securitySection: {
    padding: 60,
    paddingHorizontal: 80,
    backgroundColor: 'rgba(92, 201, 180, 0.05)',
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  integrationText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 32,
  },
  pilotSection: {
    padding: 60,
    paddingHorizontal: 80,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginVertical: 40,
  },
  pilotDescription: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 800,
    lineHeight: 28,
  },
  pilotButton: {
    alignSelf: 'center',
  },
  faqItem: {
    marginBottom: 30,
  },
  faqQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  footerCTA: {
    padding: 80,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
  },
  footerCTATitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  footer: {
    padding: 40,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Company;
