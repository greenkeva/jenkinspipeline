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
            sh 'echo $(pwd)'
            checkout scm
            sh 'echo $(pwd)'
            sh 'chmod +x build.sh'
            sh './build.sh'
        }
    }
    stage('Test') {
        steps {
            checkout scm
            sh 'chmod +x test.sh'
            sh './test.sh'
        }
    }
    stage('Deploy') {
        steps {
            checkout scm
            sh 'chmod +x deploy.sh'
            sh './deploy.sh'
        }
    }
  }
}












