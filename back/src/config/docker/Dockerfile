# Utilisez une image Node.js officielle comme base
FROM node:16.16

# Set timezone
ENV TZ=Europe/Paris
RUN apt-get update && apt-get install -y tzdata

# Créez un répertoire pour votre application
WORKDIR /back

# Copiez package.json et package-lock.json dans le répertoire de l'application
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Exposez le port sur lequel votre application sera accessible
EXPOSE 3000

# Lancez votre application
CMD ["npm", "start"]