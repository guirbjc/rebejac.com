# Utilise une image nginx légère pour servir les fichiers statiques
FROM nginx:alpine

# Copie tous les fichiers de l'application dans le répertoire par défaut de nginx
COPY . /usr/share/nginx/html

# Copie la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port 80 (nginx écoute sur ce port dans le conteneur)
EXPOSE 80

# La commande par défaut de l'image nginx démarre automatiquement le serveur
