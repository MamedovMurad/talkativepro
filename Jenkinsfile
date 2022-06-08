pipeline{
    agent any
    stages {
        stage('docker_check') {
            steps {
                sh 'date'
                sh 'docker -v'
            }
        }
        stage('clean') {
             steps {
                 sh 'docker stop talkativepro || true'
                 sh 'docker rm talkativepro || true'
             }
        }
        stage('deploy') {
            steps {
                sh 'docker build -t talkativepro_image .'
                sh 'docker run --name talkativepro --restart=always -p 3000:3000 -d talkativepro_image'
            }
        }
}