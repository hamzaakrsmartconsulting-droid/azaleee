"use client";
import React, { useState, useEffect, useRef } from 'react';

// SCRIPT CONVERSATIONNEL SARA - AZALÉE PATRIMOINE
// Objectif final : prise de rendez-vous qualifié à fort taux de conversion

const SARA_SCRIPT = {
  // ACCUEIL — Créer un climat de confiance et d'ouverture
  welcome: {
    message: "Bonjour et bienvenue sur azalee-patrimoine.fr ! Je suis votre conseiller patrimonial virtuel. Vous souhaitez optimiser vos finances, investir, ou anticiper l'avenir ? Je peux vous aider à y voir clair.",
    options: [
      { text: "💡 Obtenir une réponse rapide à une question patrimoniale", value: "question_rapide" },
      { text: "📞 Être rappelé(e) par un conseiller", value: "rappel" },
      { text: "📅 Prendre un rendez-vous directement", value: "rdv" }
    ]
  },
  
  // INTENTION UTILISATEUR — Comprendre l'objectif sans alourdir le dialogue
  intention: {
    message: "Pour vous orienter efficacement, que souhaitez-vous explorer aujourd'hui ?",
    options: [
      { text: "Optimiser mes placements financiers", value: "placements" },
      { text: "Réduire mes impôts", value: "fiscalite" },
      { text: "Préparer ma retraite", value: "retraite" },
      { text: "Transmettre mon patrimoine", value: "transmission" },
      { text: "Investir dans l'immobilier", value: "immobilier" },
      { text: "Diversifier mon patrimoine", value: "diversification" },
      { text: "Gérer une situation spécifique (divorce, succession, expatriation…)", value: "situation_specifique" }
    ]
  },
  
  // PROFIL UTILISATEUR — Établir un profil fiable sans décourager
  profile: {
    message: "Pour mieux comprendre votre situation, j'aurais besoin de quelques informations confidentielles :",
    questions: [
      { id: "nom", text: "Quel est votre nom ?", type: "text", required: true },
      { id: "prenom", text: "Et votre prénom ?", type: "text", required: true },
      { id: "age", text: "Quel est votre âge ?", type: "number", required: true },
      { id: "situation_matrimoniale", text: "Êtes-vous marié(e), pacsé(e) ou célibataire ?", type: "select", options: ["Marié(e)", "Pacsé(e)", "Célibataire"], required: true },
      { id: "enfants", text: "Avez-vous des enfants ?", type: "select", options: ["Oui", "Non"], required: true },
      { id: "situation_professionnelle", text: "Quelle est votre situation professionnelle ? (Salarié, entrepreneur, retraité, etc.)", type: "select", options: ["Salarié", "Entrepreneur", "Retraité", "Autre"], required: true },
      { id: "tmi", text: "Connaissez-vous votre TMI ? (Aide contextuelle si besoin)", type: "select", options: ["Oui, je le connais", "Non", "Je ne sais pas"], required: false },
      { id: "placements_actuels", text: "Disposez-vous de placements financiers ou immobiliers ? Lesquels ?", type: "select", options: ["Oui, financiers", "Oui, immobiliers", "Oui, les deux", "Non"], required: false },
      { id: "budget_projet", text: "Quel montant envisagez-vous pour un futur projet ?", type: "select", options: ["Moins de 50 000 €", "50 000 € à 100 000 €", "100 000 € à 500 000 €", "Plus de 500 000 €"], required: false }
    ]
  },
  
  // ENGAGEMENT FINAL — Transformer la réflexion en action
  engagement: {
    message: "Je dispose maintenant des éléments essentiels pour vous apporter une préconisation personnalisée. Souhaitez-vous :",
    options: [
      { text: "📄 Recevoir un mini-bilan PDF gratuit", value: "pdf" },
      { text: "📅 Fixer un rendez-vous avec un conseiller patrimonial agréé Azalée", value: "rdv_final" },
      { text: "📞 Être recontacté(e) ultérieurement", value: "rappel_final" }
    ]
  },
  
  // PRISE DE RENDEZ-VOUS — Finaliser l'acquisition de lead qualifié
  rdv: {
    message: "Merci pour votre confiance. Quel moment vous conviendrait le mieux ?",
    options: [
      { text: "Téléphone", value: "telephone" },
      { text: "Visio", value: "visio" },
      { text: "Agence", value: "agence" }
    ]
  }
};

// SCÉNARISATION INTELLIGENTE PAR OBJECTIF — Créer une conversation experte et orientée résultat
const THEMATIQUES = {
  placements: {
    explication: "Les placements financiers peuvent être optimisés selon votre profil de risque et vos objectifs.",
    question: "Souhaitez-vous comparer des placements selon vos objectifs (rendement, fiscalité, capitalisation) ?"
  },
  retraite: {
    explication: "La préparation de la retraite nécessite une stratégie adaptée à votre situation.",
    question: "À quel âge envisagez-vous de partir à la retraite ?"
  },
  transmission: {
    explication: "La transmission du patrimoine peut être optimisée fiscalement.",
    question: "Souhaitez-vous protéger un enfant ou conjoint en particulier ?"
  },
  immobilier: {
    explication: "L'investissement immobilier offre des avantages fiscaux et patrimoniaux.",
    question: "Quel type d'investissement immobilier vous intéresse ?"
  },
  fiscalite: {
    explication: "La fiscalité peut être optimisée selon votre situation personnelle.",
    question: "Dans quel domaine souhaitez-vous réduire vos impôts ?"
  },
  diversification: {
    explication: "La diversification permet de sécuriser votre patrimoine.",
    question: "Quelle part de votre patrimoine souhaitez-vous diversifier ?"
  },
  situation_specifique: {
    explication: "Chaque situation personnelle nécessite une approche adaptée et des solutions sur-mesure.",
    question: "Pouvez-vous me décrire brièvement votre situation spécifique ?"
  }
};

export default function SaraChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [messages, setMessages] = useState([]);
  const [userProfile, setUserProfile] = useState({
    nom: '',
    prenom: '',
    age: '',
    situation_matrimoniale: '',
    enfants: '',
    situation_professionnelle: '',
    tmi: '',
    placements_actuels: '',
    budget_projet: '',
    intention: '',
    thematique_reponse: '',
    canal_preference: '',
    telephone: '',
    email: ''
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeSession();
    }
  }, [isOpen]);

  const initializeSession = async () => {
    try {
      const newSessionId = `sara_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      
      // Create session in database
      await fetch('/api/sara/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: newSessionId,
          ipAddress: 'unknown',
          userAgent: navigator.userAgent
        })
      });

      // Initialiser avec le message d'accueil
      addMessage({
        type: 'bot',
        content: SARA_SCRIPT.welcome.message,
        options: SARA_SCRIPT.welcome.options
      });
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  };

  const addMessage = async (message) => {
    setMessages(prev => [...prev, message]);
    
    // Save message to database
    if (sessionId) {
      try {
        await fetch('/api/sara/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            messageType: message.type,
            content: message.content,
            step: currentStep,
            options: message.options
          })
        });
      } catch (error) {
        console.error('Error saving message:', error);
      }
    }
  };

  const saveUserProfile = async () => {
    if (sessionId) {
      try {
        await fetch('/api/sara/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            profileData: userProfile
          })
        });
      } catch (error) {
        console.error('Error saving profile:', error);
      }
    }
  };

  const saveAppointment = async (type, data) => {
    if (sessionId) {
      try {
        await fetch('/api/sara/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            type,
            data
          })
        });
      } catch (error) {
        console.error('Error saving appointment:', error);
      }
    }
  };

  const handleOptionClick = async (option, step) => {
    setIsTyping(true);
    
    // Ajouter le message de l'utilisateur
    await addMessage({
      type: 'user',
      content: option.text
    });

    // Traiter la réponse selon l'étape
    switch (step) {
      case 'welcome':
        if (option.value === 'question_rapide') {
          setCurrentStep('intention');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: SARA_SCRIPT.intention.message,
              options: SARA_SCRIPT.intention.options
            });
            setIsTyping(false);
          }, 1000);
        } else if (option.value === 'rappel') {
          setCurrentStep('phone_input');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: "Parfait ! Un conseiller vous rappellera dans les plus brefs délais. Pouvez-vous me donner votre numéro de téléphone ?",
              inputType: 'tel'
            });
            setIsTyping(false);
          }, 1000);
        } else if (option.value === 'rdv') {
          setCurrentStep('rdv');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: SARA_SCRIPT.rdv.message,
              options: SARA_SCRIPT.rdv.options
            });
            setIsTyping(false);
          }, 1000);
        }
        break;

      case 'intention':
        const thematique = THEMATIQUES[option.value];
        if (thematique) {
          setUserProfile(prev => ({ ...prev, intention: option.text }));
          
          // Afficher l'explication thématique
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: thematique.explication
            });
          }, 1000);
          
          // Puis poser la question ciblée
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: thematique.question,
              inputType: 'text'
            });
            setCurrentStep('thematique_question');
            setIsTyping(false);
          }, 2000);
        }
        break;

      case 'profile':
        const questions = SARA_SCRIPT.profile.questions;
        const currentQuestion = questions[currentQuestionIndex];
        
        // Sauvegarder la réponse
        setUserProfile(prev => ({
          ...prev,
          [currentQuestion.id]: option.text
        }));
        
        if (currentQuestionIndex < questions.length - 1) {
          // Passer à la question suivante
          const nextQuestion = questions[currentQuestionIndex + 1];
          setCurrentQuestionIndex(prev => prev + 1);
          
          setTimeout(() => {
            const nextOptions = nextQuestion.type === 'select' && nextQuestion.options 
              ? nextQuestion.options.map(opt => ({ text: opt, value: opt }))
              : [];
            
            addMessage({
              type: 'bot',
              content: nextQuestion.text,
              options: nextOptions,
              inputType: nextQuestion.type === 'text' ? 'text' : nextQuestion.type === 'number' ? 'number' : null
            });
            setIsTyping(false);
          }, 1000);
        } else {
          // Toutes les questions sont terminées
          setCurrentStep('engagement');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: SARA_SCRIPT.engagement.message,
              options: SARA_SCRIPT.engagement.options
            });
            setIsTyping(false);
          }, 1000);
        }
        break;

      case 'engagement':
        if (option.value === 'pdf') {
          setCurrentStep('email_input');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: "Parfait ! Votre mini-bilan PDF sera généré et envoyé par email. Pouvez-vous me donner votre adresse email ?",
              inputType: 'email'
            });
            setIsTyping(false);
          }, 1000);
        } else if (option.value === 'rdv_final') {
          setCurrentStep('rdv');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: SARA_SCRIPT.rdv.message,
              options: SARA_SCRIPT.rdv.options
            });
            setIsTyping(false);
          }, 1000);
        } else if (option.value === 'rappel_final') {
          setCurrentStep('phone_input');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: "Parfait ! Un conseiller vous rappellera dans les plus brefs délais. Pouvez-vous me donner votre numéro de téléphone ?",
              inputType: 'tel'
            });
            setIsTyping(false);
          }, 1000);
        }
        break;

      case 'rdv':
        setUserProfile(prev => ({ ...prev, canal_preference: option.text }));
        await saveUserProfile();
        await saveAppointment('rdv', { canal_preference: option.text });
        
        setTimeout(() => {
          addMessage({
            type: 'bot',
            content: "Parfait, c'est noté. Un conseiller Azalée vous contactera au moment prévu. À très bientôt !"
          });
          setIsTyping(false);
          
          // Fermer la conversation après 3 secondes
          setTimeout(() => {
            setIsOpen(false);
          }, 3000);
        }, 1000);
        break;
    }
  };

  const handleUserInput = async (input) => {
    if (!input.trim()) return;
    
    setIsTyping(true);
    
    // Ajouter le message de l'utilisateur
    await addMessage({
      type: 'user',
      content: input
    });

    switch (currentStep) {
      case 'thematique_question':
        setUserProfile(prev => ({ ...prev, thematique_reponse: input }));
        setCurrentStep('profile');
        
        setTimeout(() => {
          addMessage({
            type: 'bot',
            content: SARA_SCRIPT.profile.message
          });
        }, 1000);
        
        setTimeout(() => {
          const firstQuestion = SARA_SCRIPT.profile.questions[0];
          const firstOptions = firstQuestion.type === 'select' && firstQuestion.options 
            ? firstQuestion.options.map(opt => ({ text: opt, value: opt }))
            : [];
          
          addMessage({
            type: 'bot',
            content: firstQuestion.text,
            options: firstOptions,
            inputType: firstQuestion.type === 'text' ? 'text' : firstQuestion.type === 'number' ? 'number' : null
          });
          setCurrentQuestionIndex(0);
          setIsTyping(false);
        }, 2000);
        break;

      case 'profile':
        const questions = SARA_SCRIPT.profile.questions;
        const currentQuestion = questions[currentQuestionIndex];
        
        // Sauvegarder la réponse
        setUserProfile(prev => ({
          ...prev,
          [currentQuestion.id]: input
        }));
        
        if (currentQuestionIndex < questions.length - 1) {
          // Passer à la question suivante
          const nextQuestion = questions[currentQuestionIndex + 1];
          setCurrentQuestionIndex(prev => prev + 1);
          
          setTimeout(() => {
            const nextOptions = nextQuestion.type === 'select' && nextQuestion.options 
              ? nextQuestion.options.map(opt => ({ text: opt, value: opt }))
              : [];
            
            addMessage({
              type: 'bot',
              content: nextQuestion.text,
              options: nextOptions,
              inputType: nextQuestion.type === 'text' ? 'text' : nextQuestion.type === 'number' ? 'number' : null
            });
            setIsTyping(false);
          }, 1000);
        } else {
          // Toutes les questions sont terminées
          await saveUserProfile();
          setCurrentStep('engagement');
          setTimeout(() => {
            addMessage({
              type: 'bot',
              content: SARA_SCRIPT.engagement.message,
              options: SARA_SCRIPT.engagement.options
            });
            setIsTyping(false);
          }, 1000);
        }
        break;

      case 'email_input':
        setUserProfile(prev => ({ ...prev, email: input }));
        await saveUserProfile();
        await saveAppointment('pdf', { email: input, pdf_type: 'mini-bilan' });
        
        setTimeout(() => {
          addMessage({
            type: 'bot',
            content: "Merci ! Votre mini-bilan PDF sera envoyé à cette adresse. À très bientôt !"
          });
          setIsTyping(false);
          
          setTimeout(() => {
            setIsOpen(false);
          }, 3000);
        }, 1000);
        break;

      case 'phone_input':
        setUserProfile(prev => ({ ...prev, telephone: input }));
        await saveUserProfile();
        await saveAppointment('rappel', { telephone: input });
        
        setTimeout(() => {
          addMessage({
            type: 'bot',
            content: "Parfait ! Un conseiller vous rappellera bientôt. À très bientôt !"
          });
          setIsTyping(false);
          
          setTimeout(() => {
            setIsOpen(false);
          }, 3000);
        }, 1000);
        break;
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset when opening
      setCurrentStep('welcome');
      setMessages([]);
      setCurrentQuestionIndex(0);
      setUserProfile({
        nom: '',
        prenom: '',
        age: '',
        situation_matrimoniale: '',
        enfants: '',
        situation_professionnelle: '',
        tmi: '',
        placements_actuels: '',
        budget_projet: '',
        intention: '',
        thematique_reponse: '',
        canal_preference: '',
        telephone: '',
        email: ''
      });
      setSessionId(null);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-semibold">SARA - Conseiller Patrimonial</h3>
                <p className="text-sm opacity-90">Azalée Patrimoine</p>
              </div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg p-3`}>
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Options pour les messages du bot */}
                  {message.type === 'bot' && message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleOptionClick(option, currentStep)}
                          className="block w-full text-left p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleUserInput(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <button
                onClick={() => {
                  if (inputRef.current) {
                    handleUserInput(inputRef.current.value);
                    inputRef.current.value = '';
                  }
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
