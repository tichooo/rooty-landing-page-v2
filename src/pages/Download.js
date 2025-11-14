import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/AllButton.css';
import '../components/BasicButton.css';

const Download = () => {
  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigate('main')}>
            <Text style={styles.logo}>ROOTY</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}></Text>
          </View>
          
          <Text style={styles.title}>Application en cours de développement</Text>
          <Text style={styles.subtitle}>
            Notre application de suivi des trajets domicile-travail est actuellement en développement.
            Elle sera bientôt disponible pour téléchargement.
          </Text>

          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}> Prochaines étapes</Text>
            <View style={styles.statusList}>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}></Text>
                <Text style={styles.statusText}>Interface utilisateur finalisée</Text>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}></Text>
                <Text style={styles.statusText}>Tests en cours</Text>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}></Text>
                <Text style={styles.statusText}>Déploiement prévu : Q1 2026</Text>
              </View>
            </View>
          </View>

          <View style={styles.platformsSection}>
            <Text style={styles.platformsTitle}>Plateformes supportées</Text>
            <View style={styles.platformsGrid}>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}></Text>
                <Text style={styles.platformName}>Windows</Text>
                <Text style={styles.platformVersion}>Windows 10+</Text>
              </View>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}></Text>
                <Text style={styles.platformName}>macOS</Text>
                <Text style={styles.platformVersion}>macOS 11+</Text>
              </View>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}></Text>
                <Text style={styles.platformName}>Linux</Text>
                <Text style={styles.platformVersion}>Ubuntu 20.04+</Text>
              </View>
            </View>
          </View>

          <View style={styles.notifySection}>
            <Text style={styles.notifyTitle}>Être notifié du lancement</Text>
            <Text style={styles.notifyText}>
              Inscrivez-vous à notre newsletter pour être informé dès que l'application sera disponible.
            </Text>
            <TouchableOpacity onPress={() => navigate('main')}>
              <button className='all-button'>
                <span>S'inscrire à la newsletter</span>
              </button>
            </TouchableOpacity>
          </View>

          <View style={styles.backSection}>
            <TouchableOpacity onPress={() => navigate('main')}>
              <button className='basic-button'>
                 Retour à l'accueil
              </button>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> 2025 ROOTY. Tous droits réservés.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
    minHeight: '100vh',
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5CC9B4',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 40,
    alignItems: 'center',
    maxWidth: 900,
    marginHorizontal: 'auto',
    width: '100%',
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 48,
    maxWidth: 700,
  },
  statusCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    marginBottom: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  statusList: {
    gap: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  statusBullet: {
    fontSize: 24,
    width: 32,
  },
  statusText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  platformsSection: {
    width: '100%',
    marginBottom: 48,
  },
  platformsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 32,
  },
  platformsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  platformCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: 180,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  platformIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  platformName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  platformVersion: {
    fontSize: 14,
    color: '#666',
  },
  notifySection: {
    width: '100%',
    backgroundColor: '#ecfdf5',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 32,
  },
  notifyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  notifyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 500,
    lineHeight: 24,
  },
  backSection: {
    marginTop: 32,
  },
  footer: {
    paddingVertical: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerText: {
    fontSize: 13,
    color: '#9ca3af',
  },
});

export default Download;
