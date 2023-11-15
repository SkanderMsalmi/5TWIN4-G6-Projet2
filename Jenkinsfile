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
