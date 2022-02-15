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
            sh './build.sh'
        }
    }
    stage('Test') {
        steps {
            sh './test.sh'
        }
    }
    stage('Deploy') {
        steps {
            sh './deploy.sh'
        }
    }
  }
}












