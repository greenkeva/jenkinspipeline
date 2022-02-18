pipeline {
    agent any
   environment {
        DOCKERHUB_CREDENTIALS=credentials('DOCKER_HUB')
        IBM_CLOUD_DEVOPS_CREDS=credentials('IBM_CLOUD_DEVOPS_CREDS')
        IBM_CLOUD_DEVOPS_API_KEY='YOUR_API_KEY_ID'
        IBM_CLOUD_DEVOPS_ORG='Shekeva.Green@ibm.com'
        IBM_CLOUD_DEVOPS_APP_NAME='inspoquotes'
        IBM_CLOUD_DEVOPS_TOOLCHAIN_ID='3ffa5313-95b8-4ee5-9c34-2cd3c69d916f'
        IBM_CLOUD_DEVOPS_WEBHOOK_URL='https://jenkins:05bd52b4-61f8-49a2-b7a0-c7bb4ef57444:dc3463c2-ca69-41fe-bef4-b9590489aac1@devops-api.us-south.devops.cloud.ibm.com/v1/toolint/messaging/webhook/publish'
        kubeconfigId='kubeconfigId'
        dockerHubPassword='dockerHubPassword'
        dockerHubUser='dockerHubUser'
   }
    tools {
        nodejs('node-14.17.6')
    }
    stages {
    stage('Build') {
        environment {
                // get git commit from Jenkins
                GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                GIT_BRANCH = '2-scripts'
                GIT_REPO = 'https://us-south.git.cloud.ibm.com/Shekeva.Green/deploy_demo.git'
        }
        steps {
            checkout scm
            sh 'chmod +x scripts/build.sh'
            sh './scripts/build.sh'
        }
    }
    stage('Test') {
        steps {
            checkout scm
            sh 'chmod +x scripts/test.sh'
            sh './scripts/test.sh'
        }
    }
    stage('Docker login') {
        steps {
            withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
            sh 'docker build -t 201020122013/cicd:${BUILD_NUMBER} .'
            sh "docker login -u ${dockerHubUser} -p ${dockerHubPassword}"
            sh 'docker push 201020122013/cicd:${BUILD_NUMBER}'
            
            }
        }
    }
    //   stage('Docker build and push') {
    //     steps {
    //         checkout scm
    //         sh 'chmod +x scripts/dockerpush.sh'
    //         sh './scripts/dockerpush.sh'
    //     }
    // }
    stage('Deploy') {
        steps {
            script{
                kubernetesDeploy(configs: "./kubernetes/deployment.yaml", kubeconfigId: "kubeconfigId")
            }
        }
    }
  }
}












