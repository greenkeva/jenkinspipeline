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
        environment {
                // get git commit from Jenkins
                GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                GIT_BRANCH = 'master'
                GIT_REPO = 'https://us-south.git.cloud.ibm.com/Shekeva.Green/deploy_demo.git'
        }
        steps {
            checkout scm
            sh 'chmod +x build.sh'
            sh './build.sh'
        }
    }
    // post build section to use "publishBuildRecord" method to publish build record
            post {
                success {
                    publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"SUCCESS"
                }
                failure {
                    publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"FAIL"
                }
            }
//     }
    stage('Test') {
        steps {
            checkout scm
            sh 'chmod +x test.sh'
            sh './test.sh'
        }
        // post build section to use "publishTestResult" method to publish test result
        post {
            always {
                publishTestResult type:'unittest', fileLocation: './mochatest.json'
                publishTestResult type:'code', fileLocation: './tests/coverage/reports/coverage-summary.json'
            }
        }
    }
    stage('Deploy') {
        wrappers {
        credentialsBinding {
            string(IBM_CLOUD_DEVOPS_API_KEY, BM_CRED)
        }
    }
        steps {
            sh 'chmod +x deploy.sh'
            sh'./deploy.sh'
        }
    }
  }
}












