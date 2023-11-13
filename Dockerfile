# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim
COPY target/kaddem-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8089
CMD ["java", "-jar", "app.jar"]