import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import '../components/ButtonStyle.css';
import '../components/BasicButton.css';
import '../components/ConnexionButton.css';
import PhoneFrame from '../components/PhoneFrame';

const ACCENT = '#22d3ee';
const MAX_WIDTH = 1120;

const Demo = () => {
  const [selectedType, setSelectedType] = useState(null); // 'entreprise' ou 'collaborateur'

  const navigate = (page) => {
    if (global.navigateTo) {
      global.navigateTo(page);
    }
  };

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
    } else if (typeof window !== 'undefined') {
      window.location.href = `/pilottest?type=${type}`;
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
        {/* ÉTAPE 1 : CHOIX DU TYPE DE DÉMO */}
        {!selectedType ? (
          <View style={styles.selectionContainer}>
            <Text style={styles.mainTitle}>Demander une démo</Text>
            <Text style={styles.subtitle}>
              Choisissez le type de démonstration qui vous correspond.
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
                  Découvrez comment ROOTY vous aide à mesurer et piloter le{' '}
                  <Text style={styles.bold}>Scope 3.7</Text> tout en engageant vos collaborateurs.
                </Text>
                <View style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Voir la démo →</Text>
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
                  Visualisez le quotidien dans l&apos;app ROOTY : validation des trajets,
                  <Text style={styles.bold}> points</Text> et{' '}
                  <Text style={styles.bold}>avantages mobilités</Text>.
                </Text>
                <View style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Voir la démo →</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : selectedType === 'entreprise' ? (
          /* =================== DÉMO ENTREPRISE =================== */
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>

            {/* HERO ENTREPRISE */}
            <View style={styles.pageHeader}>
              <Text style={styles.pageKicker}>Pour les équipes RSE, RH &amp; Finance</Text>
              <Text style={styles.pageTitle}>Démo Entreprise</Text>
              <Text style={styles.pageSubtitle}>
                Mesurez et pilotez le <Text style={styles.bold}>Scope 3.7</Text>, sans friction
                côté salariés. ROOTY agrège les trajets domicile-travail, calcule des indicateurs{' '}
                <Text style={styles.bold}>auditables</Text> et vous fournit des exports prêts pour
                vos reportings.
              </Text>
            </View>

            {/* 1. POURQUOI C'EST DIFFICILE AUJOURD'HUI – 3 CARTES */}
            <View style={styles.sectionWide}>
              <Text style={styles.sectionTitleCentered}>
                Pourquoi c’est difficile aujourd’hui
              </Text>
              <View style={styles.reasonRow}>
                <View style={styles.reasonCard}>
                  <Text style={styles.reasonTitle}>Données fragiles</Text>
                  <Text style={styles.reasonText}>
                    Données dispersées, déclaratif peu fiable, Excel qui explose dès que
                    vous changez de périmètre.
                  </Text>
                </View>
                <View style={styles.reasonCard}>
                  <Text style={styles.reasonTitle}>Peu d’engagement</Text>
                  <Text style={styles.reasonText}>
                    Le salarié ne voit pas ce qu&apos;il gagne, l&apos;expérience n&apos;est pas adaptée → faible
                    taux de réponse.
                  </Text>
                </View>
                <View style={styles.reasonCard}>
                  <Text style={styles.reasonTitle}>Temps perdu</Text>
                  <Text style={styles.reasonText}>
                    Exports, consolidations, preuves d’audit : des heures pour RSE &amp;
                    Finance à chaque reporting.
                  </Text>
                </View>
              </View>
            </View>

            {/* 2. CE QUE FAIT ROOTY – TIMELINE */}
            <View style={styles.sectionTimeline}>
              <Text style={styles.sectionTitle}>Ce que fait ROOTY pour vous</Text>

              <View style={styles.timeline}>
                <View style={styles.timelineRow}>
                  <View style={styles.timelineBullet}>
                    <Text style={styles.timelineNumber}>1</Text>
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Collecte des trajets</Text>
                    <Text style={styles.timelineText}>
                      ROOTY collecte les trajets domicile-travail des collaborateurs via
                      l&apos;app, avec un effort minimum pour les utilisateurs.
                    </Text>
                  </View>
                </View>

                <View style={styles.timelineRow}>
                  <View style={styles.timelineBullet}>
                    <Text style={styles.timelineNumber}>2</Text>
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Calcul Scope 3.7</Text>
                    <Text style={styles.timelineText}>
                      Distances et modes agrégés par{' '}
                      <Text style={styles.bold}>site/période</Text>. Télétravail inclus. Méthodes
                      traçables pour faciliter l’audit.
                    </Text>
                  </View>
                </View>

                <View style={styles.timelineRow}>
                  <View style={styles.timelineBullet}>
                    <Text style={styles.timelineNumber}>3</Text>
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Exports “audit-ready”</Text>
                    <Text style={styles.timelineText}>
                      Tableaux par <Text style={styles.bold}>site / période / mode</Text> (CSV/PDF)
                      et tendances, prêts à être intégrés dans vos reportings.
                    </Text>
                  </View>
                </View>

                <View style={styles.timelineRow}>
                  <View style={styles.timelineBullet}>
                    <Text style={styles.timelineNumber}>4</Text>
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Activation des leviers</Text>
                    <Text style={styles.timelineText}>
                      Mise en place et suivi d’actions (
                      <Text style={styles.bold}>FMD</Text>, vélo, covoiturage, parking,
                      infrastructures) et mesure de l’impact (% trajets doux, tCO₂e évitées).
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* 3. CE QUE VOUS OBTENEZ – 2x2 CARDS */}
            <View style={styles.sectionCards}>
              <Text style={styles.sectionTitle}>Ce que vous obtenez</Text>

              <View style={styles.grid2}>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Conformité &amp; traçabilité</Text>
                  <Text style={styles.valueText}>
                    Données agrégées, historisées, justificatifs prêts pour vos contrôles
                    internes et externes.
                  </Text>
                </View>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Temps gagné</Text>
                  <Text style={styles.valueText}>
                    Collecte automatisée, corrections en self-service, exports en 1 clic.
                  </Text>
                </View>
                <View style={styles.valueCard}>
                  <Text style={styles.valueTitle}>Réduction &amp; ROI</Text>
                  <Text style={styles.valueText}>
                    Suivi des <Text style={styles.bold}>% de trajets doux</Text>, tCO₂e évitées,
                    économies (ex. stationnement/abonnements).
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

            {/* 4. PILOTE 12 SEMAINES – BANDEAU CHOC */}
            <View style={styles.sectionHighlightBand}>
              <Text style={styles.sectionTitleCentered}>Pilote 12 semaines</Text>
              <Text style={styles.bandSubtitle}>
                Testez ROOTY sur un périmètre limité, obtenez des chiffres et un retour
                terrain concret avant généralisation.
              </Text>

              <View style={styles.pilotRow}>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>Étape 1</Text>
                  <Text style={styles.pilotTitle}>Cadrage</Text>
                  <Text style={styles.pilotText}>
                    Sites, populations, objectifs, KPIs, périmètre de reporting.
                  </Text>
                </View>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>Étape 2</Text>
                  <Text style={styles.pilotTitle}>Déploiement</Text>
                  <Text style={styles.pilotText}>
                    Onboarding, communication interne, rewards (si activés), support des
                    équipes.
                  </Text>
                </View>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>Étape 3</Text>
                  <Text style={styles.pilotTitle}>Bilan &amp; next step</Text>
                  <Text style={styles.pilotText}>
                    Indicateurs consolidés, retour d’expérience, scénario de
                    généralisation.
                  </Text>
                </View>
              </View>
            </View>

            {/* 5. CONFIDENTIALITÉ & IT – 2 COLONNES */}
            <View style={styles.sectionSplit}>
              <View style={styles.splitLeft}>
                <Text style={styles.sectionTitle}>Confidentialité &amp; IT</Text>
                <Text style={styles.splitIntro}>
                  ROOTY est conçu pour respecter la vie privée tout en fournissant une
                  donnée exploitable, traçable et facile à intégrer dans vos systèmes.
                </Text>
              </View>
              <View style={styles.splitRight}>
                <View style={styles.privacyCard}>
                  <Text style={styles.privacyText}>
                    • Données agrégées par sites/périodes, pas de suivi GPS individualisé
                    en continu.{'\n'}
                    • Niveau d’automatisation ajustable, mise en pause possible, suppression récente.
                    {'\n'}
                    • SSO possible, import annuaire/sites, exports standard (CSV/PDF).
                  </Text>
                </View>
              </View>
            </View>

            {/* 6. APERÇU DU COCKPIT – IMAGES CENTRÉES */}
            <View style={styles.sectionGallery}>
              <Text style={styles.sectionTitleCentered}>Aperçu du cockpit</Text>
              <View style={styles.imagesSection}>
                <View style={styles.phoneContainer}>
                  <PhoneFrame width={300} height={600}>
                    <img
                      src="/img/dashboard-entreprise2.png"
                      alt="Dashboard entreprise"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
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
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
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
          /* =================== DÉMO COLLABORATEUR =================== */
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Retour</Text>
            </TouchableOpacity>

            {/* HERO COLLABORATEUR */}
            <View style={styles.pageHeader}>
              <Text style={styles.pageKicker}>Pour les collaborateurs</Text>
              <Text style={styles.pageTitle}>Démo Collaborateur</Text>
              <Text style={styles.pageSubtitle}>
                Validez votre trajet en 1 geste. Gagnez des{' '}
                <Text style={styles.bold}>avantages mobilités</Text>. ROOTY détecte votre trajet
                domicile-travail, vous confirmez en un swipe, et vous cumulez des points
                convertibles selon la politique de votre entreprise.
              </Text>
            </View>

            {/* 1. COMMENT ÇA MARCHE – 3 BLOCS */}
            <View style={styles.sectionTimeline}>
              <Text style={styles.sectionTitle}>Comment ça marche (30 secondes)</Text>

              <View style={styles.pilotRow}>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>1</Text>
                  <Text style={styles.pilotTitle}>ROOTY propose</Text>
                  <Text style={styles.pilotText}>
                    Basé sur vos habitudes domicile-travail, sans guidage GPS imposé.
                  </Text>
                </View>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>2</Text>
                  <Text style={styles.pilotTitle}>Vous validez</Text>
                  <Text style={styles.pilotText}>
                    En 1 tap, vous confirmez ou ajustez le mode de transport (vélo,
                    covoiturage, TT…).
                  </Text>
                </View>
                <View style={styles.pilotCard}>
                  <Text style={styles.pilotStep}>3</Text>
                  <Text style={styles.pilotTitle}>Vos points montent</Text>
                  <Text style={styles.pilotText}>
                    Votre solde se met à jour et alimente vos avantages mobilités.
                  </Text>
                </View>
              </View>
            </View>

            {/* 2. GAGNER DES AVANTAGES – BANDEAU */}
            <View style={styles.sectionHighlightBand}>
              <Text style={styles.sectionTitleCentered}>
                Comment je gagne de l’argent / des avantages ?
              </Text>

              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Prime FMD :</Text> vos trajets éligibles alimentent
                  votre Forfait Mobilités Durables, selon la politique de votre entreprise.
                </Text>
              </View>

              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Points → Récompenses :</Text> échangez vos points
                  contre des bénéfices définis par l’entreprise (cartes cadeaux, entretien
                  vélo, casiers/douches, primes internes…).
                </Text>
              </View>

              <View style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>Avantages mobilité :</Text> générez un justificatif
                  mensuel en 1 clic pour faciliter vos remboursements ou primes (selon les
                  règles de votre entreprise).
                </Text>
              </View>
            </View>

            {/* 3. CONFIDENTIALITÉ – BLOC SIMPLE */}
            <View style={styles.sectionSplit}>
              <View style={styles.splitLeft}>
                <Text style={styles.sectionTitle}>Confidentialité (version courte)</Text>
                <Text style={styles.splitIntro}>
                  Vous gardez la main sur vos données, l&apos;entreprise ne voit que des
                  informations agrégées.
                </Text>
              </View>
              <View style={styles.splitRight}>
                <View style={styles.privacyCard}>
                  <Text style={styles.privacyText}>
                    • Vous choisissez le niveau d&apos;automatisation (proposition
                    automatique, validation manuelle…).{'\n'}
                    • Vous pouvez mettre en pause la détection et supprimer vos dernières
                    données.{'\n'}
                    • Seules des données agrégées et anonymisées remontent à l&apos;entreprise.
                  </Text>
                </View>
              </View>
            </View>

            {/* 4. APERÇU APP – GALERIE */}
            <View style={styles.sectionGallery}>
              <Text style={styles.sectionTitleCentered}>Aperçu de l’app</Text>
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
                    Page principale : Trajet du jour (Valider/Modifier/TT), solde de points
                    et objectif du mois.
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
                    Écran de choix du mode de transport, visible lors d&apos;un ajustement
                    manuel.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* CTA test pilote */}
        {selectedType && (
          <View style={styles.ctaSection}>
            <Text style={styles.ctaTitle}>
              {selectedType === 'entreprise'
                ? 'Prêt à mesurer et réduire vos émissions Scope 3.7 ?'
                : 'Prêt à simplifier vos trajets et gagner des avantages ?'}
            </Text>
            <TouchableOpacity
              style={styles.pilotButton}
              onPress={() => handlePilotTest(selectedType)}
            >
              <Text style={styles.pilotButtonText}>🚀 Rejoindre le test pilote</Text>
            </TouchableOpacity>
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
    backgroundColor: '#020617',
  },
  container: {
    flex: 1,
    minHeight: '70vh',
    paddingTop: 120,
  },

  /* HEADER */
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

  /* SELECTION */
  selectionContainer: {
    paddingVertical: 100,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#9ca3af',
    marginBottom: 64,
    textAlign: 'center',
    maxWidth: 700,
    lineHeight: 28,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 40,
    maxWidth: 1000,
  },
  card: {
    backgroundColor: '#020617',
    borderRadius: 20,
    padding: 40,
    width: 400,
    minHeight: 320,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.35,
    shadowRadius: 30,
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: '#0b1120',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 24,
    lineHeight: 24,
  },
  cardButton: {
    marginTop: 8,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: ACCENT,
  },

  /* CONTENU DES PAGES */
  contentContainer: {
    paddingVertical: 100,
    paddingHorizontal: 40,
    maxWidth: MAX_WIDTH,
    marginHorizontal: 'auto',
    width: '100%',
  },
  backButton: {
    marginBottom: 32,
  },
  backButtonText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  pageHeader: {
    marginBottom: 64,
  },
  pageKicker: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: 6,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 10,
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    lineHeight: 22,
    maxWidth: 720,
  },

  /* SECTIONS VARIÉES */
  sectionWide: {
    marginBottom: 160,
  },
  sectionTitleCentered: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 40,
  },
  reasonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  reasonCard: {
    flexBasis: 280,
    flexGrow: 1,
    backgroundColor: '#020617',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    padding: 24,
  },
  reasonTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 6,
  },
  reasonText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  sectionTimeline: {
    marginBottom: 160,
    padding: 32,
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: 'rgba(31, 41, 55, 0.9)',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 32,
  },
  timeline: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(55, 65, 81, 0.9)',
    paddingLeft: 12,
    gap: 32,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  timelineBullet: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#020617',
    borderWidth: 2,
    borderColor: ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -26,
  },
  timelineNumber: {
    color: ACCENT,
    fontWeight: '700',
    fontSize: 14,
  },
  timelineContent: {
    flex: 1,
    backgroundColor: '#020617',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(55, 65, 81, 0.9)',
    padding: 14,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  timelineText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  sectionCards: {
    marginBottom: 160,
  },
  grid2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  valueCard: {
    flexBasis: 260,
    flexGrow: 1,
    backgroundColor: '#020617',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.5)',
    padding: 24,
  },
  valueTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  valueText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  sectionHighlightBand: {
    marginBottom: 160,
    padding: 40,
    borderRadius: 22,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.8)',
    shadowColor: '#22d3ee',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 40,
  },
  bandSubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    maxWidth: 720,
    alignSelf: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  pilotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  pilotCard: {
    flexBasis: 260,
    flexGrow: 1,
    backgroundColor: '#020617',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    padding: 24,
  },
  pilotStep: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: ACCENT,
    marginBottom: 4,
  },
  pilotTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f9fafb',
    marginBottom: 4,
  },
  pilotText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  sectionSplit: {
    marginBottom: 160,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 40,
  },
  splitLeft: {
    flex: 1,
    minWidth: 260,
  },
  splitRight: {
    flex: 1,
    minWidth: 260,
  },
  splitIntro: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
    maxWidth: 420,
  },

  privacyCard: {
    backgroundColor: '#020617',
    borderColor: 'rgba(148, 163, 184, 0.5)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  privacyText: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  sectionGallery: {
    marginBottom: 160,
  },
  imagesSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 60,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  phoneContainer: {
    width: 300,
    alignItems: 'center',
  },
  imageCaption: {
    marginTop: 20,
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 20,
  },

  bulletRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: ACCENT,
    marginRight: 10,
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  bold: {
    fontWeight: '700',
    color: ACCENT,
  },

  /* CTA TEST PILOTE */
  ctaSection: {
    paddingVertical: 80,
    paddingHorizontal: 40,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(15, 23, 42, 0.9)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 700,
    lineHeight: 32,
  },
  pilotButton: {
    backgroundColor: ACCENT,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
  },
  pilotButtonText: {
    color: '#020617',
    fontSize: 15,
    fontWeight: '600',
  },

  /* FOOTER */
  footer: {
    paddingVertical: 24,
    paddingHorizontal: '5%',
    backgroundColor: '#020617',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(15, 23, 42, 0.9)',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 13,
  },
});

export default Demo;
