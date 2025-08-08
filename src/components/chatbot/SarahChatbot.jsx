"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

const LOCAL_STORAGE_KEY = 'sarahChatbotData';

const defaultChatbotData = {
  isOpen: false,
  currentStep: 'welcome',
  userProfile: {
    nom: '',
    prenom: '',
    age: '',
    situationMatrimoniale: '',
    enfants: '',
    situationProfessionnelle: '',
    tmi: '',
    placementsActuels: '',
    budgetProjet: '',
    email: '',
    telephone: ''
  },
  conversationHistory: [],
  selectedIntentions: [],
  selectedThemes: [],
  currentQuestionIndex: 0
};

const conversationScript = {
  welcome: {
    message: "Bonjour et bienvenue sur azalee-patrimoine.fr ! Je suis Sarah, votre conseiller patrimonial virtuel. Je vais vous accompagner pour optimiser vos finances, investir, ou anticiper l'avenir. Comment puis-je vous aider aujourd'hui ?",
    options: [
      { id: 'question_rapide', label: 'Obtenir une réponse rapide à une question patrimoniale', nextStep: 'intention' },
      { id: 'rappel', label: 'Être rappelé(e) par un conseiller', nextStep: 'rappel' },
      { id: 'rdv', label: 'Prendre un rendez-vous directement', nextStep: 'rdv' }
    ]
  },
  intention: {
    message: "Parfait ! Pour vous orienter efficacement, que souhaitez-vous explorer aujourd'hui ?",
    options: [
      { id: 'placements', label: 'Optimiser mes placements financiers', nextStep: 'profile' },
      { id: 'fiscalite', label: 'Réduire mes impôts', nextStep: 'profile' },
      { id: 'retraite', label: 'Préparer ma retraite', nextStep: 'profile' },
      { id: 'transmission', label: 'Transmettre mon patrimoine', nextStep: 'profile' },
      { id: 'immobilier', label: 'Investir dans l\'immobilier', nextStep: 'profile' },
      { id: 'diversification', label: 'Diversifier mon patrimoine', nextStep: 'profile' },
      { id: 'situation_specifique', label: 'Gérer une situation spécifique (divorce, succession, expatriation…)', nextStep: 'profile' }
    ]
  },
  profile: {
    questions: [
      {
        id: 'age',
        question: "Pour commencer, quel est votre âge ?",
        type: 'number',
        required: true,
        followUp: "Merci ! Votre âge est un facteur important pour adapter nos recommandations."
      },
      {
        id: 'situationMatrimoniale',
        question: "Êtes-vous marié(e), pacsé(e) ou célibataire ?",
        type: 'select',
        options: ['Marié(e)', 'Pacsé(e)', 'Célibataire'],
        required: true,
        followUp: "Parfait ! Votre situation familiale influence nos stratégies de transmission."
      },
      {
        id: 'enfants',
        question: "Avez-vous des enfants ?",
        type: 'select',
        options: ['Oui', 'Non'],
        required: true,
        followUp: "Excellent ! La présence d'enfants ouvre des opportunités de transmission."
      },
      {
        id: 'situationProfessionnelle',
        question: "Quelle est votre situation professionnelle ?",
        type: 'select',
        options: ['Salarié', 'Entrepreneur', 'Retraité', 'Autre'],
        required: true,
        followUp: "Très bien ! Votre statut professionnel détermine nos stratégies fiscales."
      },
      {
        id: 'tmi',
        question: "Connaissez-vous votre TMI (Tranche Marginale d'Imposition) ?",
        type: 'select',
        options: ['< 14%', '14%', '30%', '41%', '45%', 'Je ne sais pas'],
        required: false,
        followUp: "Pas de problème ! Nous pourrons l'estimer ensemble si nécessaire."
      },
      {
        id: 'placementsActuels',
        question: "Disposez-vous déjà de placements financiers ou immobiliers ? Si oui, lesquels ?",
        type: 'textarea',
        required: false,
        followUp: "Merci pour ces informations ! Cela nous aide à proposer des solutions complémentaires."
      },
      {
        id: 'budgetProjet',
        question: "Quel montant envisagez-vous pour votre futur projet d'investissement ?",
        type: 'number',
        required: false,
        followUp: "Parfait ! Ce budget nous permettra de vous proposer des solutions adaptées."
      }
    ],
    nextStep: 'engagement'
  },
  engagement: {
    message: "Excellent ! J'ai maintenant une vision claire de votre situation. Basé sur vos réponses, je peux vous proposer des solutions personnalisées. Que souhaitez-vous faire maintenant ?",
    options: [
      { id: 'pdf', label: 'Recevoir un mini-bilan PDF gratuit personnalisé', nextStep: 'pdf' },
      { id: 'rdv', label: 'Fixer un rendez-vous avec un conseiller patrimonial agréé Azalée', nextStep: 'rdv' },
      { id: 'rappel', label: 'Être recontacté(e) ultérieurement par un expert', nextStep: 'rappel' }
    ]
  },
  rdv: {
    message: "Parfait ! Je vais organiser un rendez-vous personnalisé pour vous. Quel moment vous conviendrait le mieux ?",
    fields: [
      { id: 'date', label: 'Date souhaitée', type: 'date', required: true },
      { id: 'heure', label: 'Heure souhaitée', type: 'time', required: true },
      { id: 'canal', label: 'Canal souhaité', type: 'select', options: ['Téléphone', 'Visio', 'Agence'], required: true },
      { id: 'email', label: 'Votre email', type: 'email', required: true },
      { id: 'telephone', label: 'Votre téléphone', type: 'tel', required: true }
    ],
    nextStep: 'confirmation'
  },
  rappel: {
    message: "Je vais organiser un rappel personnalisé pour vous. Quand souhaitez-vous être contacté(e) ?",
    fields: [
      { id: 'dateRappel', label: 'Date de rappel', type: 'date', required: true },
      { id: 'heureRappel', label: 'Heure de rappel', type: 'time', required: true },
      { id: 'email', label: 'Votre email', type: 'email', required: true },
      { id: 'telephone', label: 'Votre téléphone', type: 'tel', required: true }
    ],
    nextStep: 'confirmation'
  },
  pdf: {
    message: "Je vais préparer votre mini-bilan personnalisé basé sur vos réponses. Pour vous l'envoyer, j'ai besoin de votre email :",
    fields: [
      { id: 'email', label: 'Votre email', type: 'email', required: true }
    ],
    nextStep: 'confirmation'
  },
  confirmation: {
    message: "Parfait ! C'est noté. Un conseiller Azalée vous contactera au moment prévu avec des recommandations personnalisées basées sur notre échange. Merci pour votre confiance !",
    options: [
      { id: 'fermer', label: 'Fermer la conversation', nextStep: 'close' }
    ]
  }
};

export default function SarahChatbot() {
  const [chatbotData, setChatbotData] = useState(defaultChatbotData);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasInitialized = useRef(false);

  const saveChatbotData = useCallback((data) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      }
      setChatbotData(data);
    } catch (error) {
      console.error('Error saving chatbot data:', error);
    }
  }, []);

  const addMessage = useCallback((message, isUser = false, type = 'message', questionId = null) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      isUser,
      timestamp: new Date().toLocaleTimeString(),
      type,
      questionId
    };
    
    setChatbotData(prevData => {
      const updatedData = {
        ...prevData,
        conversationHistory: [...prevData.conversationHistory, newMessage]
      };
      saveChatbotData(updatedData);
      return updatedData;
    });
  }, [saveChatbotData]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Show chatbot after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Add initial welcome message if no conversation history and not already initialized
      if (chatbotData.conversationHistory.length === 0 && !hasInitialized.current) {
        const welcomeStep = conversationScript.welcome;
        if (welcomeStep) {
          const newMessage = {
            id: Date.now(),
            text: welcomeStep.message,
            isUser: false,
            timestamp: new Date().toLocaleTimeString(),
            type: 'message'
          };
          
          const updatedData = {
            ...chatbotData,
            conversationHistory: [newMessage]
          };
          saveChatbotData(updatedData);
          hasInitialized.current = true;
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isClient, saveChatbotData]);

  useEffect(() => {
    if (!isClient) return;
    
    // Load saved data
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setChatbotData({ ...defaultChatbotData, ...parsed });
        } catch (error) {
          console.error('Error loading chatbot data:', error);
        }
      }
    }
  }, [isClient]);

  useEffect(() => {
    // Scroll to bottom when new messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatbotData.conversationHistory]);

  // Handle profile questions
  useEffect(() => {
    if (chatbotData.currentStep === 'profile' && !isTyping) {
      const profileStep = conversationScript.profile;
      if (profileStep && profileStep.questions) {
        const questionIndex = chatbotData.currentQuestionIndex || 0;
        if (questionIndex < profileStep.questions.length) {
          const question = profileStep.questions[questionIndex];
          setCurrentQuestion(question);
          
          // Add question to conversation if not already there
          const questionExists = chatbotData.conversationHistory.some(
            msg => msg.type === 'question' && msg.questionId === question.id
          );
          
          if (!questionExists) {
            setTimeout(() => {
              const newMessage = {
                id: Date.now(),
                text: question.question,
                isUser: false,
                timestamp: new Date().toLocaleTimeString(),
                type: 'question',
                questionId: question.id
              };
              
              setChatbotData(prevData => {
                const updatedData = {
                  ...prevData,
                  conversationHistory: [...prevData.conversationHistory, newMessage]
                };
                saveChatbotData(updatedData);
                return updatedData;
              });
            }, 500);
          }
        } else {
          // All questions answered, move to engagement
          setChatbotData(prevData => {
            const updatedData = {
              ...prevData,
              currentStep: 'engagement'
            };
            saveChatbotData(updatedData);
            return updatedData;
          });
        }
      }
    }
  }, [chatbotData.currentStep, chatbotData.currentQuestionIndex, isTyping, saveChatbotData]);

  // Add options as conversation bubbles when step changes
  useEffect(() => {
    if (!isTyping && chatbotData.currentStep) {
      const step = conversationScript[chatbotData.currentStep];
      if (step && step.options) {
        // Check if options are already in conversation
        const optionsExist = chatbotData.conversationHistory.some(
          msg => msg.type === 'options' && msg.stepId === chatbotData.currentStep
        );
        
        if (!optionsExist) {
          setTimeout(() => {
            const optionsMessage = {
              id: Date.now(),
              text: step.message || "Choisissez une option :",
              isUser: false,
              timestamp: new Date().toLocaleTimeString(),
              type: 'options',
              stepId: chatbotData.currentStep,
              options: step.options
            };
            
            setChatbotData(prevData => {
              const updatedData = {
                ...prevData,
                conversationHistory: [...prevData.conversationHistory, optionsMessage]
              };
              saveChatbotData(updatedData);
              return updatedData;
            });
          }, 300);
        }
      }
    }
  }, [chatbotData.currentStep, isTyping, saveChatbotData]);

  const handleOptionClick = useCallback((option) => {
    if (isTyping) return;
    
    setIsTyping(true);
    addMessage(option.label, true);
    
    if (option.nextStep === 'close') {
      setIsMinimized(true);
      setIsTyping(false);
      return;
    }

    setChatbotData(prevData => {
      const updatedData = {
        ...prevData,
        currentStep: option.nextStep,
        selectedIntentions: [...prevData.selectedIntentions, option.id]
      };
      saveChatbotData(updatedData);
      return updatedData;
    });

    // Add Sarah's response after a short delay
    setTimeout(() => {
      const step = conversationScript[option.nextStep];
      if (step) {
        addMessage(step.message);
      }
      setIsTyping(false);
    }, 800);
  }, [addMessage, isTyping, saveChatbotData]);

  const handleQuestionAnswer = useCallback((question, answer) => {
    if (isTyping || !answer.trim()) return;
    
    setIsTyping(true);
    addMessage(answer, true);
    
    // Add follow-up message
    setTimeout(() => {
      if (question.followUp) {
        addMessage(question.followUp);
      }
      setIsTyping(false);
    }, 500);

    // Update user profile and move to next question
    setChatbotData(prevData => {
      const updatedProfile = { ...prevData.userProfile, [question.id]: answer };
      const nextQuestionIndex = (prevData.currentQuestionIndex || 0) + 1;
      const profileStep = conversationScript.profile;
      
      let updatedData = {
        ...prevData,
        userProfile: updatedProfile,
        currentQuestionIndex: nextQuestionIndex
      };

      // If all questions are answered, move to engagement
      if (profileStep && nextQuestionIndex >= profileStep.questions.length) {
        updatedData = {
          ...updatedData,
          currentStep: 'engagement'
        };
      }

      saveChatbotData(updatedData);
      return updatedData;
    });
  }, [addMessage, isTyping, saveChatbotData]);

  const handleFieldSubmit = useCallback((fields) => {
    if (isTyping) return;
    
    setIsTyping(true);
    const formData = {};
    fields.forEach(field => {
      const input = document.getElementById(`sarah-${field.id}`);
      if (input) {
        formData[field.id] = input.value;
      }
    });

    setChatbotData(prevData => {
      const currentStep = prevData.currentStep;
      const nextStep = conversationScript[currentStep]?.nextStep || 'confirmation';
      
      const updatedData = {
        ...prevData,
        userProfile: { ...prevData.userProfile, ...formData },
        currentStep: nextStep
      };
      saveChatbotData(updatedData);
      return updatedData;
    });

    // Add user's response
    const userResponse = Object.values(formData).join(', ');
    addMessage(userResponse, true);

    // Add Sarah's response
    setTimeout(() => {
      setChatbotData(prevData => {
        const nextStep = conversationScript[prevData.currentStep];
        if (nextStep) {
          addMessage(nextStep.message);
        }
        return prevData;
      });
      setIsTyping(false);
    }, 500);
  }, [addMessage, isTyping, saveChatbotData]);

  const handleUserInput = useCallback((e) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    setIsTyping(true);
    addMessage(userInput, true);
    setUserInput('');

    // Provide contextual response based on current step
    setTimeout(() => {
      const currentStep = conversationScript[chatbotData.currentStep];
      let response = "Je comprends votre question. Laissez-moi vous orienter vers la meilleure solution...";
      
      if (currentStep) {
        if (chatbotData.currentStep === 'welcome') {
          response = "Merci pour votre question. Je vais vous aider à trouver la solution la plus adaptée à votre situation. Pouvez-vous me dire ce qui vous intéresse le plus ?";
        } else if (chatbotData.currentStep === 'intention') {
          response = "Excellente question ! Je vais vous guider vers la solution la plus appropriée pour votre projet. Laissez-moi d'abord mieux comprendre votre situation.";
        } else if (chatbotData.currentStep === 'profile') {
          response = "Merci pour ces informations. Je vais maintenant personnaliser mes recommandations pour vous. Avez-vous d'autres questions ?";
        } else if (chatbotData.currentStep === 'engagement') {
          response = "Parfait ! Je vais maintenant vous proposer les meilleures options pour votre situation. Que souhaitez-vous faire ?";
        } else {
          response = "Je comprends votre demande. Laissez-moi vous accompagner dans la suite du processus.";
        }
      }
      
      addMessage(response);
      setIsTyping(false);
    }, 1000);
  }, [userInput, isTyping, addMessage, chatbotData.currentStep]);

  const renderQuestion = () => {
    if (!currentQuestion || chatbotData.currentStep !== 'profile') return null;

    const handleSubmit = (value) => {
      if (value && value.trim()) {
        handleQuestionAnswer(currentQuestion, value.trim());
      }
    };

    return (
      <div className="space-y-3 p-4 border-t border-gray-200 bg-gray-50">
        <div className="bg-white border border-blue-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Question {chatbotData.currentQuestionIndex + 1}
          </h4>
          <p className="text-gray-700 mb-3">{currentQuestion.question}</p>
          {currentQuestion.type === 'select' ? (
            <select
              onChange={(e) => {
                if (e.target.value) {
                  handleSubmit(e.target.value);
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            >
              <option value="">Sélectionnez une option...</option>
              {currentQuestion.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : currentQuestion.type === 'textarea' ? (
            <div className="space-y-2">
              <textarea
                onBlur={(e) => handleSubmit(e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                placeholder="Tapez votre réponse..."
              />
              <button
                onClick={(e) => {
                  const textarea = e.target.previousElementSibling;
                  if (textarea && textarea.value.trim()) {
                    handleSubmit(textarea.value);
                  }
                }}
                className="bg-[#4EBBBD] text-white px-4 py-2 rounded-lg hover:bg-[#3DA8AA] transition-colors"
              >
                Continuer
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <input
                type={currentQuestion.type}
                onBlur={(e) => handleSubmit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                placeholder="Tapez votre réponse..."
              />
              <button
                onClick={(e) => {
                  const input = e.target.previousElementSibling;
                  if (input && input.value.trim()) {
                    handleSubmit(input.value);
                  }
                }}
                className="bg-[#4EBBBD] text-white px-4 py-2 rounded-lg hover:bg-[#3DA8AA] transition-colors"
              >
                Continuer
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    const step = conversationScript[chatbotData.currentStep];
    if (!step) return null;

    // Don't render if options are already in conversation
    if (step.options) {
      const optionsExist = chatbotData.conversationHistory.some(
        msg => msg.type === 'options' && msg.stepId === chatbotData.currentStep
      );
      if (optionsExist) return null;
    }

    return (
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        {step.options && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 mb-3 font-medium">Choisissez une option :</p>
            {step.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                disabled={isTyping}
                className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4EBBBD] rounded-full"></div>
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        )}
        
        {step.fields && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3 font-medium">Remplissez les informations :</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleFieldSubmit(step.fields);
            }} className="space-y-3">
              {step.fields.map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      id={`sarah-${field.id}`}
                      required={field.required}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    >
                      <option value="">Sélectionnez...</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={`sarah-${field.id}`}
                      required={field.required}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  ) : (
                    <input
                      id={`sarah-${field.id}`}
                      type={field.type}
                      required={field.required}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isTyping}
                className="w-full bg-[#4EBBBD] text-white py-2 px-4 rounded-lg hover:bg-[#3DA8AA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? 'En cours...' : 'Continuer'}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };

  if (!isClient || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#4EBBBD] text-white p-4 rounded-full shadow-lg hover:bg-[#3DA8AA] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-96 h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#4EBBBD] font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-semibold">Sarah</h3>
                <p className="text-sm opacity-90">Conseiller patrimonial virtuel</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatbotData.conversationHistory.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-sm">Sarah se connecte...</p>
              </div>
            ) : (
              chatbotData.conversationHistory.map((message) => (
                <div key={message.id}>
                  {message.type === 'options' ? (
                    <div className="space-y-2">
                      {/* Sarah's message */}
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 max-w-xs p-3 rounded-lg shadow-sm">
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                      {/* Options as conversation bubbles */}
                      <div className="space-y-2 ml-4">
                        {message.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            disabled={isTyping}
                            className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#4EBBBD] rounded-full"></div>
                              {option.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg shadow-sm ${
                          message.isUser
                            ? 'bg-[#4EBBBD] text-white'
                            : message.type === 'question'
                            ? 'bg-blue-50 border border-blue-200 text-blue-900'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs p-3 rounded-lg shadow-sm">
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

          {/* Current Question */}
          {renderQuestion()}

          {/* Choices/Options - Now displayed as conversation bubbles */}
          {renderStep()}

          {/* Input Area - Now at the bottom */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleUserInput} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Tapez votre message..."
                disabled={isTyping}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!userInput.trim() || isTyping}
                className="bg-[#4EBBBD] text-white px-4 py-2 rounded-lg hover:bg-[#3DA8AA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 