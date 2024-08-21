# Imagen oficial de Playwright
FROM mcr.microsoft.com/playwright:focal

# Instala Java 11
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get clean

# Setea JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH

# Se posiciona en el directorio de trabajo
WORKDIR /var/jenkins

# Ejecuta un tail para mantener el contenedor en ejecución
CMD ["tail", "-f", "/dev/null"]