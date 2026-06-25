pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'team-main',
                    url: 'https://github.com/Sirivally0108/FreelanceHub.git'
            }
        }

        stage('Docker Deploy') {
            steps {

                bat 'docker compose down'

                bat 'docker compose up -d --build'
            }
        }

    }

}