pipeline {
    agent any
   environment {
        //DOCKERHUB_CREDENTIALS=credentials('')
       IBM_CLOUD_DEVOPS_CREDS=credentials('BM_CRED')
        IBM_CLOUD_DEVOPS_API_KEY='YOUR_API_KEY_ID'
        IBM_CLOUD_DEVOPS_ORG='Shekeva.Green@ibm.com'
        IBM_CLOUD_DEVOPS_APP_NAME='inspoquotes'
        IBM_CLOUD_DEVOPS_TOOLCHAIN_ID='3ffa5313-95b8-4ee5-9c34-2cd3c69d916f'
        IBM_CLOUD_DEVOPS_WEBHOOK_URL='https://jenkins:3204a26e-3591-4964-8efa-e0bb7d927003:1a03501c-dcbf-46ae-b8f4-01d004d0d8ec@devops-api.us-south.devops.cloud.ibm.com/v1/toolint/messaging/webhook/publish'
   }
    tools {
        nodejs('node-14.17.6')
    }
    stages {
    stage('Build') {
        steps {
            checkout scm
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
            sh 'chmod +x deploy.sh'
            sh'./deploy.sh'
        }
    }
  }
}












