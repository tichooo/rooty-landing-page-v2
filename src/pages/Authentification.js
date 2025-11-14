import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/FillEmail.css';
import '../components/AllButton.css';

const Authentification = ({ loginMessage = '', setIsUserLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (isLogin) {
      // Simuler une connexion réussie
      console.log('Login:', { email, password });
      if (setIsUserLoggedIn) {
        setIsUserLoggedIn(true);
      }
      // Rediriger vers la page de téléchargement si un message de connexion est présent
      if (loginMessage) {
        global.navigateTo('download');
      } else {
        global.navigateTo('main');
      }
    } else {
      // Vérifier que les mots de passe correspondent
      if (password !== confirmPassword) {
        setErrorMessage('Les mots de passe ne correspondent pas');
        return;
      }
      console.log('Register:', { name, company, email, password });
      if (setIsUserLoggedIn) {
        setIsUserLoggedIn(true);
      }
      // Rediriger vers la page de téléchargement si un message de connexion est présent
      if (loginMessage) {
        global.navigateTo('download');
      } else {
        global.navigateTo('main');
      }
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo/Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => global.navigateTo('main')}>
            <Text style={styles.logo}>ROOTY</Text>
          </TouchableOpacity>
        </View>

        {/* Auth Card */}
        <View style={styles.authCard}>
          {loginMessage && (
            <View style={styles.loginMessageContainer}>
              <Text style={styles.loginMessageIcon}>⚠️</Text>
              <Text style={styles.loginMessageText}>{loginMessage}</Text>
            </View>
          )}
          
          <Text style={styles.title}>
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </Text>
          <Text style={styles.subtitle}>
            {isLogin 
              ? 'Accédez à votre espace ROOTY' 
              : 'Rejoignez ROOTY pour suivre vos émissions'}
          </Text>

          {errorMessage && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          )}

          {/* Toggle Buttons */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleButton, isLogin && styles.toggleButtonActive]}
              onPress={() => setIsLogin(true)}
            >
              <Text style={[styles.toggleText, isLogin && styles.toggleTextActive]}>
                Connexion
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, !isLogin && styles.toggleButtonActive]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={[styles.toggleText, !isLogin && styles.toggleTextActive]}>
                Inscription
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <>
                <div className="inputGroup">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label>Nom complet</label>
                </div>

                <div className="inputGroup">
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                  <label>Entreprise</label>
                </div>
              </>
            )}

            <div className="inputGroup">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Adresse email</label>
            </div>

            <div className="inputGroup">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Mot de passe</label>
            </div>

            {!isLogin && (
              <div className="inputGroup">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label>Confirmer le mot de passe</label>
              </div>
            )}

            {isLogin && (
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>
                  Mot de passe oublié ?
                </Text>
              </TouchableOpacity>
            )}

            <button type="submit" className="all-button" style={{ width: '100%', marginTop: 24 }}>
              <span>{isLogin ? 'Se connecter' : 'Créer mon compte'}</span>
            </button>
          </form>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Alternative Text */}
          <View style={styles.alternativeContainer}>
            <Text style={styles.alternativeText}>
              {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.alternativeLink}>
                {isLogin ? 'Créer un compte' : 'Se connecter'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
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
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
    minHeight: '100vh',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5CC9B4',
    cursor: 'pointer',
  },
  authCard: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6b7280',
  },
  toggleTextActive: {
    color: '#333',
    fontWeight: '600',
  },
  form: {
    width: '100%',
    gap: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#5CC9B4',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#9ca3af',
  },
  alternativeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  alternativeText: {
    fontSize: 14,
    color: '#666',
  },
  alternativeLink: {
    fontSize: 14,
    color: '#5CC9B4',
    fontWeight: '600',
    cursor: 'pointer',
  },
  loginMessageContainer: {
    backgroundColor: '#fef3c7',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loginMessageIcon: {
    fontSize: 20,
  },
  loginMessageText: {
    fontSize: 14,
    color: '#92400e',
    fontWeight: '500',
    flex: 1,
  },
  errorContainer: {
    backgroundColor: '#fee2e2',
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: '#991b1b',
    fontWeight: '500',
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    fontSize: 13,
    color: '#9ca3af',
  },
});

export default Authentification;
