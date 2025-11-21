import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1120;

const PilotTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  // Récupération du type depuis l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    if (typeParam) {
      setFormData(prev => ({ ...prev, type: typeParam }));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log('Données du formulaire:', formData);
    setSubmitted(true);
  };

  const handleBack = () => {
    if (global.navigateTo) {
      global.navigateTo('demo');
    } else {
      window.history.back();
    }
  };

  if (submitted) {
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
          <View style={styles.successContainer}>
            <Text style={styles.successIcon}>✅</Text>
            <Text style={styles.successTitle}>Demande envoyée avec succès !</Text>
            <Text style={styles.successMessage}>
              Merci pour votre intérêt. Notre équipe vous recontactera dans les plus brefs délais
              pour organiser votre test pilote.
            </Text>
            <TouchableOpacity
              style={styles.backToHomeButton}
              onPress={handleBack}
            >
              <Text style={styles.backToHomeButtonText}>Retour à la démo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

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
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>

          <Text style={styles.mainTitle}>
            Rejoignez notre programme de test pilote
          </Text>
          <Text style={styles.subtitle}>
            {formData.type === 'entreprise'
              ? "Testez ROOTY gratuitement pendant 12 semaines et mesurez l'impact sur vos émissions Scope 3.7."
              : "Soyez parmi les premiers à tester ROOTY et profitez d'avantages exclusifs pour vos trajets."}
          </Text>

          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nom complet *</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
                placeholder="Jean Dupont"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email professionnel *</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="jean.dupont@entreprise.com"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Téléphone *</Text>
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                placeholder="+33 6 12 34 56 78"
                keyboardType="phone-pad"
              />
            </View>

            {formData.type === 'entreprise' && (
              <View style={styles.formGroup}>
                <Text style={styles.label}>Entreprise *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.company}
                  onChangeText={(value) => handleInputChange('company', value)}
                  placeholder="Nom de votre entreprise"
                />
              </View>
            )}

            <View style={styles.formGroup}>
              <Text style={styles.label}>Message (optionnel)</Text>
              <TextInput
                style={[styles.input, styles.textarea]}
                value={formData.message}
                onChangeText={(value) => handleInputChange('message', value)}
                placeholder="Parlez-nous de vos besoins ou questions..."
                multiline
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Envoyer ma demande</Text>
            </TouchableOpacity>

            <Text style={styles.privacyNote}>
              En soumettant ce formulaire, vous acceptez que ROOTY traite vos données
              pour vous recontacter concernant le test pilote.
            </Text>
          </form>
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
    minHeight: '70vh',
    paddingVertical: 120,
    paddingHorizontal: 20,
    alignItems: 'center',
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

  formContainer: {
    width: '100%',
    maxWidth: 720,
    alignItems: 'center',
    padding: 32,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    backgroundColor: '#020617',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.35,
    shadowRadius: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 14,
    color: ACCENT,
    fontWeight: '600',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#9ca3af',
    lineHeight: 22,
    marginBottom: 32,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    padding: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#1e293b',
    borderRadius: 10,
    backgroundColor: '#020617',
    color: '#f9fafb',
    outlineStyle: 'none',
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    width: '100%',
    backgroundColor: ACCENT,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#020617',
  },
  privacyNote: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 18,
  },

  /* Success state */
  successContainer: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
    maxWidth: 720,
  },
  successIcon: {
    fontSize: 72,
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 12,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 15,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    maxWidth: 600,
  },
  backToHomeButton: {
    backgroundColor: ACCENT,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 999,
  },
  backToHomeButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#020617',
  },

  footer: {
    marginTop: 40,
  },
  footerText: {
    color: '#6b7280',
    fontSize: 13,
  },
});

export default PilotTest;
