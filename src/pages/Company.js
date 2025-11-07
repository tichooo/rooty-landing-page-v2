import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import '../components/AllButton.css';
import '../components/ButtonStyle.css';
import '../components/ButtonStyleDark.css';

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
    <ScrollView style={styles.scrollContainer}>
      <Header />
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Mesurez et pilotez le Scope 3,{'\n'}sans friction côté salariés.
          </Text>
          <Text style={styles.heroSubtitle}>
            ROOTY collecte des trajets domicile-travail de façon anonymisée, calcule des indicateurs 
            auditables et active des leviers pour réduire vos émissions.
          </Text>
          <View style={styles.heroCTAContainer}>
            <button className="learn-more" onClick={handleDemoRequest}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Demander une démo</span>
            </button>
            <button className="all-button" onClick={handleDownloadPDF}>
              <span>Obtenir la fiche pilote (PDF)</span>
            </button>
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

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
      </View>
    </ScrollView>
  );
};const styles = StyleSheet.create({
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
    backgroundColor: '#727272ff',
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
