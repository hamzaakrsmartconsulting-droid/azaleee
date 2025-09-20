# Fichiers à supprimer (modèles inutilisés)

## Modèles à supprimer :
src/lib/models/User.js

## Tables de base de données à supprimer :
- profils_patrimoniaux
- investissements_immobiliers  
- placements_financiers
- simulations_fiscales
- rendez_vous
- conseillers
- contenus_cms
- pdf_reports
- users

## Scripts SQL à supprimer ou modifier :
database/init.sql  # Contient les tables inutilisées
# Garder seulement les tables utilisées dans ce fichier

## Résultat après nettoyage :
✅ Tables restantes (utilisées) :
- page_content
- interactions_chatbot  
- appointments
- callbacks
- user_sessions

✅ Modèles restants (utilisés) :
- PageContent.js
- ChatbotInteraction.js
- Appointment.js
- Callback.js
- UserSession.js
