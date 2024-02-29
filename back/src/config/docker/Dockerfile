FROM node:16.16

# Set timezone
ENV TZ=Europe/Paris
RUN apt-get update && apt-get install -y tzdata
WORKDIR /back
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]