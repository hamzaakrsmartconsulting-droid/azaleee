# 🚀 Guide de déploiement rapide EC2 - Mise à jour frontend

## Mise à jour rapide (changements frontend uniquement)

Si vous avez déjà déployé le projet sur EC2 et que vous avez seulement fait des changements frontend :

### Sur votre machine locale (Windows)

1. **Pousser les changements vers GitHub** (déjà fait ✅)

2. **Se connecter à EC2 via SSH** :
   ```bash
   ssh -i votre-cle.pem ubuntu@VOTRE_IP_EC2
   ```

3. **Sur EC2, exécuter le script de mise à jour** :
   ```bash
   cd ~/azalee-app  # ou le répertoire où se trouve votre app
   wget https://raw.githubusercontent.com/hamzaakrsmartconsulting-droid/azaleee/prod/update-ec2-frontend.sh
   chmod +x update-ec2-frontend.sh
   ./update-ec2-frontend.sh
   ```

   OU si vous avez déjà le script :
   ```bash
   cd ~/azalee-app
   ./update-ec2-frontend.sh
   ```

### Alternative manuelle (si le script n'est pas disponible)

```bash
# 1. Aller dans le répertoire de l'application
cd ~/azalee-app  # ou ~/demo selon votre configuration

# 2. Pull les dernières modifications
git pull origin prod

# 3. Rebuild et redémarrer les containers frontend/backend
docker-compose up -d --build frontend backend

# 4. Vérifier les logs
docker-compose logs -f frontend
```

## Vérification

- **Application** : http://VOTRE_IP_EC2
- **Admin** : http://VOTRE_IP_EC2/admin
- **Logs** : `docker-compose logs -f frontend`

## Commandes utiles

```bash
# Voir les logs
docker-compose logs -f

# Redémarrer tous les services
docker-compose restart

# Voir le statut des containers
docker-compose ps

# Arrêter l'application
docker-compose down

# Redémarrer l'application
docker-compose up -d
```

## Notes importantes

- MongoDB ne sera **pas** redémarré (données préservées)
- Seuls les containers frontend et backend seront reconstruits
- Le temps de déploiement est d'environ 2-5 minutes
- L'application reste accessible pendant la mise à jour (pas de downtime)

