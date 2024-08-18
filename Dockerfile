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

# Descarga el agente de Jenkins y conéctalo
CMD curl -sO http://jenkins:8080/jnlpJars/agent.jar && \
    java -jar agent.jar -url http://jenkins:8080/ \
    -secret aba5c836dad572b2b40815d01b906ff225efa3a85802bb7dcd3d78064c060487 \
    -name playwright -workDir "/var/jenkins"