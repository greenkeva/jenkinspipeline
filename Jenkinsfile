pipeline {
    agent any
   // environment {
        // DOCKERHUB_CREDENTIALS=credentials('')
   // }
    tools {
        nodejs('node-14.17.6')
    }
    stages {
    stage('Build') {
        steps {
            checkout scm
            sh 'echo whoami'
            sh './build.sh'
        }
    }
    stage('Test') {
        steps {
            checkout scm
            sh './test.sh'
        }
    }
    stage('Deploy') {
        steps {
            checkout scm
            sh './deploy.sh'
        }
    }
  }
}












