pipeline{
    stages {
        stage('build') {
            steps {
                sh 'date'
                sh 'mvn clean package'
                sh 'docker info'
                sh 'docker-compose up -d '
            }
        }
    }
}