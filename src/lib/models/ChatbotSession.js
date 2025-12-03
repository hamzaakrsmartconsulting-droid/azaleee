const mongoose = require('mongoose');

const ChatbotSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'abandoned'],
    default: 'active'
  },
  currentStep: {
    type: String,
    default: 'welcome'
  },
  // Profil utilisateur
  profile: {
    nom: String,
    prenom: String,
    telephone: String,
    email: String,
    age: Number,
    situationMatrimoniale: String, // marié, pacsé, célibataire
    enfants: Boolean,
    nombreEnfants: Number,
    situationProfessionnelle: String, // Salarié, entrepreneur, retraité, etc.
    tmi: String, // Tranche marginale d'imposition
    placementsFinanciers: String,
    placementsImmobiliers: String,
    montantProjet: String,
    // Pour diversification
    taillePortefeuille: String,
    secteursInvestissement: String,
    objectifRendement: String,
    profilRisque: String,
    patrimoineImmo: String,
    // Pour fiscalité immobilière
    typeBien: String, // RP, RS, RL, SCI, etc.
    modeAcquisition: String, // donation, héritage, achat
    // Pour marchés financiers
    dejaInvesti: Boolean,
    montantInvestissement: String,
    enveloppeInvestissement: String, // PEA, Ass Vie, CTO
    // Pour SCPI
    objectifPatrimonial: String,
    rentabiliteAttendue: String,
    profilInvestisseur: String
  },
  // Parcours conversationnel
  intention: String, // Optimiser placements, Réduire impôts, etc.
  thematique: String,
  questionPosee: String, // La question initiale de l'utilisateur
  // Engagement final
  actionFinale: {
    type: String,
    enum: ['pdf', 'rdv', 'rappel', null]
  },
  // Rendez-vous
  rendezVous: {
    date: Date,
    heure: String,
    canal: String, // Téléphone, Visio, Agence
    statut: {
      type: String,
      enum: ['en_cours', 'done', 'canceled'],
      default: 'en_cours'
    }
  },
  // Messages de la conversation
  messages: [{
    role: {
      type: String,
      enum: ['user', 'sara']
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  // Métadonnées
  ipAddress: String,
  userAgent: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'chatbot_sessions',
  timestamps: true
});

// Index pour les recherches fréquentes
ChatbotSessionSchema.index({ status: 1, createdAt: -1 });
ChatbotSessionSchema.index({ 'profile.nom': 1, 'profile.prenom': 1 });
ChatbotSessionSchema.index({ actionFinale: 1 });

const ChatbotSession = mongoose.models.ChatbotSession || mongoose.model('ChatbotSession', ChatbotSessionSchema);

module.exports = ChatbotSession;

