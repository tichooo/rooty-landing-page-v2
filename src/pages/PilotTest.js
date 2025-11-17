import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';

const PilotTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '', // 'entreprise' ou 'collaborateur'
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Récupérer le type depuis l'URL ou le state de navigation
  React.useEffect(() => {
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
    e.preventDefault();
    
    // Ici vous pouvez ajouter l'intégration avec votre backend
    console.log('Données du formulaire:', formData);
    
    // Simulation d'envoi
    setSubmitted(true);
    
    // Vous pourriez envoyer les données à un backend:
    // fetch('/api/pilot-test', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
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
        <Header />
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
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 ROOTY. Tous droits réservés.</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <Header />
      
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
              ? "Testez ROOTY gratuitement pendant 12 semaines et mesurez l'impact sur vos émissions Scope 3.7"
              : "Soyez parmi les premiers à tester ROOTY et profitez d'avantages exclusifs"
            }
          </Text>

          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nom complet *</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
                placeholder="Jean Dupont"
                required
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
                required
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
                required
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
                  required
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
      </View>

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
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 700,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 32,
  },
  backButtonText: {
    fontSize: 16,
    color: '#5CC9B4',
    fontWeight: '600',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    lineHeight: 28,
    marginBottom: 48,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    outlineStyle: 'none',
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#5CC9B4',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  privacyNote: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 20,
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  successIcon: {
    fontSize: 80,
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 600,
  },
  backToHomeButton: {
    backgroundColor: '#5CC9B4',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  backToHomeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
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

export default PilotTest;
