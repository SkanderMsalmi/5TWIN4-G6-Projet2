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
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Docker'){
            steps {
                sh 'docker build -t kaddemimage:v1 -f Dockerfile ./'
            }
        }

        stage('dockerhub') {
            steps {

                sh "docker login -u adamchibani -p adam1999!"
                sh "docker tag kaddemimage:v1 adamchibani/adamchibani-5twin4-g6-kaddem:kaddemimage"
                sh "docker push adamchibani/adamchibani-5twin4-g6-kaddem:kaddemimage"
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
