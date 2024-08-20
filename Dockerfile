# Usar la imagen oficial de Playwright como base
FROM mcr.microsoft.com/playwright:focal

# Instalar Java 11
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get clean

# Establecer la variable de entorno JAVA_HOME para Java 11
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH

# Verificar las versiones instaladas
RUN node -v && npm -v && java -version

# Definir el directorio de trabajo en el contenedor
WORKDIR /var/jenkins

# Comando por defecto
CMD ["tail", "-f", "/dev/null"]