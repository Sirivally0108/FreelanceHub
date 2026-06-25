pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Sirivally0108/FreelanceHub.git'
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker compose up -d'
            }
        }

    }

}