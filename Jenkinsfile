pipeline {
    agent any
    environment {
        // You need to specify 4 required environment variables first, they are going to be used for the following IBM Cloud DevOps steps
        IBM_CLOUD_DEVOPS_CREDS = credentials('BM_CRED')
        IBM_CLOUD_DEVOPS_ORG = 'dlatest'
        IBM_CLOUD_DEVOPS_APP_NAME = 'inspoquotes'
        IBM_CLOUD_DEVOPS_TOOLCHAIN_ID = '3ffa5313-95b8-4ee5-9c34-2cd3c69d916f'
        IBM_CLOUD_DEVOPS_WEBHOOK_URL = 'https://jenkins:3204a26e-3591-4964-8efa-e0bb7d927003:1a03501c-dcbf-46ae-b8f4-01d004d0d8ec@devops-api.us-south.devops.cloud.ibm.com/v1/toolint/messaging/webhook/publish'
    }
    tools {
        nodejs 'node-14.17.6'
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
                /bin/bash
                'npm --version'
                'npm install'
                'npm install enzyme'
                'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17'
                'npm run build'
            }
            // post build section to use "publishBuildRecord" method to publish build record
//              post {
//                  success {
//                      publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"SUCCESS"
//                  }
//                  failure {
//                     publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"FAIL"
//                  }
//              }
         }
        stage('Unit Test and Code Coverage') {
            steps {
                
                //sh
                /bin/bash
                'npm run test'
                echo 'test complete'
            }
        }
        stage('Deploy to Staging') {
            steps {
               
                // Push the inspoquotes App to Bluemix, staging space
              //  sh '''
                        /bin/bash
                        
                        echo "CF Login..."
                        cf api "https://api.ng.bluemix.net"
                        cf login -a "https://api.us-south.cf.cloud.ibm.com" -u $IBM_CLOUD_DEVOPS_CREDS_USR -p $IBM_CLOUD_DEVOPS_CREDS_PSW -o "Shekeva.Green@ibm.com" -s staging
                        echo "Deploying...."
                        export CF_APP_NAME="staging-$IBM_CLOUD_DEVOPS_APP_NAME"
                        cf delete $CF_APP_NAME -f
                        cf push $CF_APP_NAME -n $CF_APP_NAME -m 64M -i 1
                        # use "cf icd --create-connection" to enable traceability
                        cf icd --create-connection $IBM_CLOUD_DEVOPS_WEBHOOK_URL $CF_APP_NAME
                        export APP_URL=http://$(cf app $CF_APP_NAME | grep urls: | awk '{print $2}')
              //  '''  
            }
            // post build section to use "publishDeployRecord" method to publish deploy record and notify OTC of stage status
//             post {
//                 success {
//                     publishDeployRecord environment: "STAGING", appUrl: "http://staging-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"SUCCESS"
//                     // use "notifyOTC" method to notify otc of stage status
//                     notifyOTC stageName: "Deploy to Staging", status: "SUCCESS"
//                 }
//                 failure {
//                     publishDeployRecord environment: "STAGING", appUrl: "http://staging-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"FAIL"
//                     // use "notifyOTC" method to notify otc of stage status
//                     notifyOTC stageName: "Deploy to Staging", status: "FAILURE"
//                 }
//             }
        }
        stage('Deploy to Prod') {
            steps {
                
                // Push the inspoquotes App to Bluemix, production space
                //sh '''
                        /bin/bash
                        echo "CF Login..."
                        cf api "https://api.ng.bluemix.net"
                        cf login -u $IBM_CLOUD_DEVOPS_CREDS_USR -p $IBM_CLOUD_DEVOPS_CREDS_PSW -o $IBM_CLOUD_DEVOPS_ORG -s production
                        echo "Deploying...."
                        export CF_APP_NAME="prod-$IBM_CLOUD_DEVOPS_APP_NAME"
                        cf delete $CF_APP_NAME -f
                        cf push $CF_APP_NAME -n $CF_APP_NAME -m 64M -i 1
                        // use "cf icd --create-connection" to enable traceability
                        cf icd --create-connection $IBM_CLOUD_DEVOPS_WEBHOOK_URL $CF_APP_NAME
                        
                        export APP_URL=http://$(cf app $CF_APP_NAME | grep urls: | awk '{print $2}')
                  //  '''
            }
            // post build section to use "publishDeployRecord" method to publish deploy record and notify OTC of stage status
//             post {
//                 success {
//                     publishDeployRecord environment: "PRODUCTION", appUrl: "http://prod-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"SUCCESS"
//                     // use "notifyOTC" method to notify otc of stage status
//                     notifyOTC stageName: "Deploy to Prod", status: "SUCCESS"
//                 }
//                 failure {
//                     publishDeployRecord environment: "PRODUCTION", appUrl: "http://prod-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"FAIL"
//                     // use "notifyOTC" method to notify otc of stage status
//                     notifyOTC stageName: "Deploy to Prod", status: "FAILURE"
//                 }
            }
        }
    }
//}


