pipeline{
    agent any
    stages {
        stage('build') {
            steps {
                sh 'date'
                sh 'docker info'
                sh 'docker-compose build'
                sh 'docker-compose up -d '
            }
        }
    }
}