import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import PhoneFrame from '../components/PhoneFrame';

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

  const handlePilotTest = (type) => {
    if (global.navigateTo) {
      global.navigateTo('pilottest', { type });
    } else {
      window.location.href = `/pilottest?type=${type}`;
    }
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
          // Page Entreprise (MODIFIÉE — version texte)
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>

            {/* Hero */}
            <Text style={styles.pageTitle}>Démo Entreprise</Text>
            <Text style={styles.pageSubtitle}>
              Mesurez et pilotez le Scope 3.7, sans friction côté salariés. ROOTY agrège les trajets
              domicile-travail, calcule des indicateurs auditables et vous fournit des exports prêts
              pour vos reportings.
            </Text>

            {/* Pourquoi c'est difficile */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pourquoi c’est difficile aujourd’hui</Text>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>Données dispersées, déclaratif peu fiable</Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>Faible engagement salarié sans bénéfice direct</Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>Exports et preuves d’audit chronophages</Text>
              </View>
            </View>

            {/* Comment ça marche */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ce que fait ROOTY (en 4 étapes)</Text>

              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>1) Collecte légère (opt-in)</Text>
                <Text style={styles.stepText}>
                  Détection silencieuse côté collaborateur + validation en 1 geste.
                  Pas de trace GPS point-à-point partagée à l’entreprise.
                </Text>
              </View>

              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>2) Calcul Scope 3.7</Text>
                <Text style={styles.stepText}>
                  Distances et modes agrégés par <Text style={styles.bold}>site/période</Text>. Télétravail inclus.
                  Méthodes traçables pour faciliter l’audit.
                </Text>
              </View>

              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>3) Exports “audit-ready”</Text>
                <Text style={styles.stepText}>
                  Tableaux par <Text style={styles.bold}>site / période / mode</Text> (CSV/PDF) et tendances.
                </Text>
              </View>

              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>4) Activation des leviers</Text>
                <Text style={styles.stepText}>
                  Mise en place et suivi d’actions (FMD, vélo, covoiturage, parking, infrastructures)
                  et mesure de l’impact (% trajets doux, tCO₂e évitées).
                </Text>
              </View>
            </View>

            {/* Ce que vous obtenez */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ce que vous obtenez</Text>

              <View style={styles.grid2}>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Conformité & traçabilité</Text>
                  <Text style={styles.valueText}>
                    Données agrégées, historisées, justificatifs prêts pour vos contrôles internes.
                  </Text>
                </View>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Temps gagné</Text>
                  <Text style={styles.valueText}>
                    Collecte automatisée, corrections en self-service, exports en 1 clic.
                  </Text>
                </View>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Réduction & ROI</Text>
                  <Text style={styles.valueText}>
                    Suivi des % de trajets doux, tCO₂e évitées, économies (ex. stationnement/abonnements).
                  </Text>
                </View>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Acceptabilité sociale</Text>
                  <Text style={styles.valueText}>
                    Anonymat garanti, opt-in, contrôle utilisateur — adoption facilitée.
                  </Text>
                </View>
              </View>
            </View>

            {/* Pilote 12 semaines */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pilote 12 semaines</Text>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}><Text style={styles.bold}>Cadrage :</Text> sites, populations, objectifs, KPIs.</Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}><Text style={styles.bold}>Déploiement :</Text> onboarding, communication interne, rewards (si activés).</Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}><Text style={styles.bold}>Suivi :</Text> adoption, % trajets doux, tendance CO₂.</Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}><Text style={styles.bold}>Rapport final :</Text> résultats, recommandations, plan d'élargissement.</Text>
              </View>
            </View>

            {/* Confidentialité & IT */}
            <View style={[styles.section, styles.privacyCard]}>
              <Text style={styles.sectionTitle}>Confidentialité & IT</Text>
              <Text style={styles.privacyText}>
                • Pas de localisation détaillée partagée à l’entreprise{'\n'}
                • Agrégation / k-anonymity par cohortes{'\n'}
                • SSO possible, import annuaire/sites, exports standard (CSV/PDF)
              </Text>
            </View>

            {/* Visuels (optionnels) */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Aperçu du cockpit</Text>
              <View style={styles.imagesSection}>
                <View style={styles.phoneContainer}>
                  <PhoneFrame width={300} height={600}>
                    <img
                      src="/img/dashboard-entreprise2.png"
                      alt="Dashboard entreprise"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </PhoneFrame>
                  <Text style={styles.imageCaption}>
                    Vue par site et par mode, objectifs mensuels, télétravail intégré.
                  </Text>
                </View>

                <View style={styles.phoneContainer}>
                  <PhoneFrame width={300} height={600}>
                    <img
                      src="/img/Exports-entreprise.png"
                      alt="Export entreprise"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </PhoneFrame>
                  <Text style={styles.imageCaption}>
                    Exports “audit-ready” (CSV/PDF) par période/site/mode.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          // Page Collaborateur (MODIFIÉE)
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>

            {/* Hero */}
            <Text style={styles.pageTitle}>Démo Collaborateur</Text>
            <Text style={styles.pageSubtitle}>
              Validez votre trajet en 1 geste. Gagnez des avantages. ROOTY détecte
              votre trajet domicile-travail, vous confirmez en un swipe, et vous cumulez
              des points convertibles selon la politique de votre entreprise.
            </Text>

            {/* Comment ça marche */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Comment ça marche (30 secondes)</Text>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Détection automatique :</Text> l’app repère votre arrivée au travail
                  et propose le mode détecté (vélo, marche, bus/train, covoit…).
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Validation 1-tap :</Text> sur l’écran “Validation du moyen de transport”,
                  vous confirmez ou corrigez en un tap.
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Points & justificatifs :</Text> chaque validation crédite votre solde
                  de points et met à jour votre justificatif mensuel (avantages mobilité).
                </Text>
              </View>
            </View>

            {/* Gagner des avantages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Comment je gagne de l’argent / des avantages ?</Text>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Points → Récompenses :</Text> échangez vos points contre des bénéfices
                  définis par l’entreprise (cartes cadeaux, entretien vélo, casiers/douches, primes internes…).
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Avantages mobilité :</Text> générer un justificatif mensuel en 1 clic
                  pour faciliter vos remboursements ou primes (selon les règles de votre entreprise).
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Bonus & défis :</Text> des bonus peuvent s’ajouter (loteries mensuelles,
                  paliers de trajets doux). Tout est visible dans l’onglet “Avantages”.
                </Text>
              </View>
            </View>

            {/* Confidentialité */}
            <View style={[styles.section, styles.privacyCard]}>
              <Text style={styles.sectionTitle}>Confidentialité (version courte)</Text>
              <Text style={styles.privacyText}>
                • Pas de trace GPS détaillée partagée à l’entreprise{'\n'}
                • Données agrégées par période/site{'\n'}
                • Vous gardez le contrôle : pause et suppression des dernières données
              </Text>
            </View>

            {/* Visuels */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Aperçu de l'app</Text>

              {/* Section Images */}
              <View style={styles.imagesSection}>
                {/* Image 1: Interface principale */}
                <View style={styles.phoneContainer}>
                  <PhoneFrame width={300} height={600}>
                    <img
                      src="/img/interface-principale-cote-employé.png"
                      alt="Interface principale"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </PhoneFrame>
                  <Text style={styles.imageCaption}>
                    Page principale : Trajet du jour (Valider/Modifier/TT), solde de points et objectif du mois.
                  </Text>
                </View>

                {/* Image 2: Choix de transport */}
                <View style={styles.phoneContainer}>
                  <PhoneFrame width={300} height={600}>
                    <img
                      src="/img/choix-de-transport.png"
                      alt="Choix de transport"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </PhoneFrame>
                  <Text style={styles.imageCaption}>
                    Validation du moyen de transport : confirmez ou corrigez en 1 tap → points crédités.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* CTA Test Pilote - Affiché seulement quand une section est sélectionnée */}
      {selectedType && (
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>
            {selectedType === 'entreprise' 
              ? "Prêt à mesurer et réduire vos émissions Scope 3.7 ?" 
              : "Prêt à simplifier vos trajets et gagner des avantages ?"}
          </Text>
          <TouchableOpacity 
            style={styles.pilotButton}
            onPress={() => handlePilotTest(selectedType)}
          >
            <Text style={styles.pilotButtonText}>🚀 Rejoindre le test pilote</Text>
          </TouchableOpacity>
        </View>
      )}

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
    marginBottom: 32,
    maxWidth: 900,
  },

  /*** STYLES COMMUNS AUX SECTIONS ***/
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    maxWidth: 900,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5CC9B4',
    marginTop: 8,
    marginRight: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  bold: {
    fontWeight: '700',
    color: '#2d2d2d',
  },
  privacyCard: {
    backgroundColor: '#F7FBFA',
    borderWidth: 1,
    borderColor: '#D5F0E9',
    borderRadius: 12,
    padding: 16,
  },
  privacyText: {
    fontSize: 15,
    color: '#3a3a3a',
    lineHeight: 22,
  },

  /*** ENTREPRISE ***/
  stepCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9F5F1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 6,
  },
  stepText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  grid2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  valueCard: {
    flexBasis: 300,
    flexGrow: 1,
    backgroundColor: '#F7FBFA',
    borderWidth: 1,
    borderColor: '#D5F0E9',
    borderRadius: 12,
    padding: 16,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 6,
  },
  valueText: {
    fontSize: 15,
    color: '#3a3a3a',
    lineHeight: 22,
  },

  /*** VISUELS (commun) ***/
  imagesSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 60,
    marginTop: 12,
  },
  phoneContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  imageCaption: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    textAlign: 'center',
    maxWidth: 300,
  },

  /*** CTA SECTION TEST PILOTE ***/
  ctaSection: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    backgroundColor: '#F7FBFA',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D5F0E9',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 700,
  },
  pilotButton: {
    backgroundColor: '#5CC9B4',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  pilotButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  /*** FOOTER ***/
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
