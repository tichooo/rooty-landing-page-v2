import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/FillEmail.css';
import '../components/AllButton.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1120;

const Authentification = ({ loginMessage = '', setIsUserLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (isLogin) {
      console.log('Login:', { email, password });
      if (setIsUserLoggedIn) {
        setIsUserLoggedIn(true);
      }
      if (loginMessage) {
        navigate('download');
      } else {
        navigate('main');
      }
    } else {
      if (password !== confirmPassword) {
        setErrorMessage('Les mots de passe ne correspondent pas');
        return;
      }
      console.log('Register:', { name, company, email, password });
      if (setIsUserLoggedIn) {
        setIsUserLoggedIn(true);
      }
      if (loginMessage) {
        navigate('download');
      } else {
        navigate('main');
      }
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

          {/* Toggle Connexion / Inscription */}
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

          {/* Formulaire */}
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

            <button
              type="submit"
              className="all-button"
              style={{ width: '100%', marginTop: 24 }}
            >
              <span>{isLogin ? 'Se connecter' : 'Créer mon compte'}</span>
            </button>
          </form>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Switch Connexion / Inscription */}
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
    backgroundColor: '#020617',
  },
  container: {
    flex: 1,
    minHeight: '100vh',
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

  /* Carte d'auth */
  authCard: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#020617',
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.35,
    shadowRadius: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 28,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#020617',
    borderRadius: 999,
    padding: 4,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(55, 65, 81, 0.9)',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 999,
  },
  toggleButtonActive: {
    backgroundColor: '#0f172a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  toggleTextActive: {
    color: '#f9fafb',
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
    fontSize: 13,
    color: ACCENT,
    fontWeight: '500',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#1e293b',
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 13,
    color: '#6b7280',
  },

  alternativeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  alternativeText: {
    fontSize: 14,
    color: '#9ca3af',
  },
  alternativeLink: {
    fontSize: 14,
    color: ACCENT,
    fontWeight: '600',
    cursor: 'pointer',
  },

  loginMessageContainer: {
    backgroundColor: 'rgba(250, 204, 21, 0.08)',
    borderLeftWidth: 4,
    borderLeftColor: '#facc15',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loginMessageIcon: {
    fontSize: 20,
  },
  loginMessageText: {
    fontSize: 14,
    color: '#facc15',
    fontWeight: '500',
    flex: 1,
  },
  errorContainer: {
    backgroundColor: 'rgba(248, 113, 113, 0.12)',
    borderLeftWidth: 4,
    borderLeftColor: '#f87171',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: '#fecaca',
    fontWeight: '500',
  },

  footer: {
    marginTop: 32,
  },
  footerText: {
    fontSize: 13,
    color: '#6b7280',
  },
});

export default Authentification;
