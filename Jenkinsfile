pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                 git branch: 'AdamChibani-5TWIN4-G6', url: 'https://github.com/SkanderMsalmi/5TWIN4-G6-Projet2'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('SONARQUBE') {
          steps {
            sh 'mvn sonar:sonar -Dsonar.login=admin -Dsonar.password=sonar'
          }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Nexus') {
            steps {
                sh 'mvn deploy -DskipTests=true'
            }
        }

        stage('DockerImage') {
            steps {
                script {
                    def dockerImageTag = "kaddemimage:v${BUILD_NUMBER}"
                    sh "docker build -t ${dockerImageTag} -f Dockerfile ./"
                }
            }
        }

        stage('DockerHub') {
            steps {

                sh "docker login -u adamchibani -p adam1999!"
                sh "docker tag kaddemimage:v${BUILD_NUMBER} adamchibani/adamchibani-5twin4-g6-kaddem:kaddemimage"
                sh "docker push adamchibani/adamchibani-5twin4-g6-kaddem:kaddemimage"
            }
        }

        stage('DockerCompose') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Build and tests passed!'
        }
        failure {
            echo 'Build or tests failed!'
        }
    }
}
