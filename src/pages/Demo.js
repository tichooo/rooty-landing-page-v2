import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const Demo = () => {
  const [selectedType, setSelectedType] = useState(null); // 'entreprise' ou 'collaborateur'

  const handleSelectEntreprise = () => {
    setSelectedType('entreprise');
  };

  const handleSelectCollaborateur = () => {
    setSelectedType('collaborateur');
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Header />

      <View style={styles.container}>
        {!selectedType ? (
          // Page de sélection
          <View style={styles.selectionContainer}>
            <Text style={styles.mainTitle}>Demander une démo</Text>
            <Text style={styles.subtitle}>
              Choisissez le type de démonstration qui vous correspond
            </Text>

            <View style={styles.cardsContainer}>
              {/* Card Entreprise */}
              <TouchableOpacity 
                style={styles.card}
                onPress={handleSelectEntreprise}
              >
                <View style={styles.cardIcon}>
                  <Text style={styles.iconText}>🏢</Text>
                </View>
                <Text style={styles.cardTitle}>Entreprise</Text>
                <Text style={styles.cardDescription}>
                  Vous êtes une entreprise et souhaitez découvrir comment ROOTY peut vous aider à suivre et réduire vos émissions Scope 3.
                </Text>
                <View style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Découvrir →</Text>
                </View>
              </TouchableOpacity>

              {/* Card Collaborateur */}
              <TouchableOpacity 
                style={styles.card}
                onPress={handleSelectCollaborateur}
              >
                <View style={styles.cardIcon}>
                  <Text style={styles.iconText}>👤</Text>
                </View>
                <Text style={styles.cardTitle}>Collaborateur</Text>
                <Text style={styles.cardDescription}>
                  Vous êtes un collaborateur et souhaitez voir comment utiliser l'application ROOTY au quotidien.
                </Text>
                <View style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Découvrir →</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : selectedType === 'entreprise' ? (
          // Page Entreprise
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Démo Entreprise</Text>
            <Text style={styles.pageSubtitle}>
              Contenu de la démo entreprise à venir...
            </Text>
          </View>
        ) : (
          // Page Collaborateur
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Démo Collaborateur</Text>
            <Text style={styles.pageSubtitle}>
              Contenu de la démo collaborateur à venir...
            </Text>
          </View>
        )}
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
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    minHeight: '70vh',
  },
  selectionContainer: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 60,
    textAlign: 'center',
    maxWidth: 600,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32,
    maxWidth: 1000,
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 40,
    width: 400,
    minWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardIcon: {
    marginBottom: 24,
    alignItems: 'center',
  },
  iconText: {
    fontSize: 64,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  cardButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5CC9B4',
  },
  contentContainer: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  backButton: {
    marginBottom: 32,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: '#5CC9B4',
    fontWeight: '600',
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  pageSubtitle: {
    fontSize: 18,
    color: '#666',
    lineHeight: 28,
  },
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

export default Demo;
