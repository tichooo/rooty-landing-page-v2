﻿import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/AllButton.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1120;

const Download = () => {
  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
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

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚧</Text>
          </View>

          <Text style={styles.title}>Application en cours de développement</Text>
          <Text style={styles.subtitle}>
            Notre application de suivi des trajets domicile-travail est actuellement en
            développement. Elle sera bientôt disponible pour téléchargement.
          </Text>

          {/* Statut */}
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Prochaines étapes</Text>
            <View style={styles.statusList}>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}>✓</Text>
                <Text style={styles.statusText}>Interface utilisateur finalisée</Text>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}>🧪</Text>
                <Text style={styles.statusText}>Tests en cours</Text>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusBullet}>📅</Text>
                <Text style={styles.statusText}>Déploiement prévu : Q1 2026</Text>
              </View>
            </View>
          </View>

          {/* Plateformes */}
          <View style={styles.platformsSection}>
            <Text style={styles.platformsTitle}>Plateformes supportées</Text>
            <View style={styles.platformsGrid}>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}>🪟</Text>
                <Text style={styles.platformName}>Windows</Text>
                <Text style={styles.platformVersion}>Windows 10+</Text>
              </View>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}></Text>
                <Text style={styles.platformName}>macOS</Text>
                <Text style={styles.platformVersion}>macOS 11+</Text>
              </View>
              <View style={styles.platformCard}>
                <Text style={styles.platformIcon}>🐧</Text>
                <Text style={styles.platformName}>Linux</Text>
                <Text style={styles.platformVersion}>Ubuntu 20.04+</Text>
              </View>
            </View>
          </View>

          {/* Newsletter */}
          <View style={styles.notifySection}>
            <Text style={styles.notifyTitle}>Être notifié du lancement</Text>
            <Text style={styles.notifyText}>
              Inscrivez-vous à notre newsletter pour être informé dès que l&apos;application
              sera disponible.
            </Text>
            <TouchableOpacity onPress={() => navigate('main')}>
              <button className="all-button">
                <span>S&apos;inscrire à la newsletter</span>
              </button>
            </TouchableOpacity>
          </View>

          {/* Retour */}
          <View style={styles.backSection}>
            <TouchableOpacity onPress={() => navigate('main')}>
              <button className="basic-button">
                Retour à l&apos;accueil
              </button>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#020617',
  },
  container: {
    flex: 1,
    minHeight: '100vh',
    paddingTop: 120,
  },

  /* Header */
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

  content: {
    flex: 1,
    paddingVertical: 72,
    paddingHorizontal: 24,
    alignItems: 'center',
    maxWidth: 900,
    marginHorizontal: 'auto',
    width: '100%',
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: 700,
  },

  statusCard: {
    width: '100%',
    backgroundColor: '#020617',
    borderRadius: 20,
    padding: 24,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 18,
  },
  statusList: {
    gap: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusBullet: {
    width: 28,
    textAlign: 'center',
    fontSize: 18,
  },
  statusText: {
    fontSize: 14,
    color: '#9ca3af',
    flex: 1,
  },

  platformsSection: {
    width: '100%',
    marginBottom: 40,
  },
  platformsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 24,
  },
  platformsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 18,
  },
  platformCard: {
    backgroundColor: '#020617',
    borderRadius: 16,
    padding: 20,
    width: 180,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
  },
  platformIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  platformName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 2,
  },
  platformVersion: {
    fontSize: 13,
    color: '#9ca3af',
  },

  notifySection: {
    width: '100%',
    backgroundColor: '#020617',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.7)',
    shadowColor: '#22d3ee',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 36,
  },
  notifyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 10,
    textAlign: 'center',
  },
  notifyText: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 500,
    lineHeight: 22,
  },
  backSection: {
    marginTop: 16,
  },

  footer: {
    paddingVertical: 24,
    backgroundColor: '#020617',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#0f172a',
  },
  footerText: {
    fontSize: 13,
    color: '#6b7280',
  },
});

export default Download;
