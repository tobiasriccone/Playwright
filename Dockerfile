# Usa una imagen base de Node.js
FROM node:latest

# Verifica e instala npm si es necesario
RUN npm install -g npm@latest

# Instala los navegadores de Playwright
RUN npx playwright install

# Instala las dependencias de Playwright
RUN npx playwright install-deps

# Instala el JDK por defecto y curl
RUN apt-get update && apt-get install -y default-jdk curl && apt-get clean

# Crea el directorio de trabajo
WORKDIR /var/jenkins