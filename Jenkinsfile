pipeline {
    agent any
    environment {
        // You need to specify 4 required environment variables first, they are going to be used for the following IBM Cloud DevOps steps
        IBM_CLOUD_DEVOPS_CREDS=credentials('BM_CRED')
        IBM_CLOUD_DEVOPS_API_KEY='YOUR_API_KEY_ID'
        IBM_CLOUD_DEVOPS_ORG='Shekeva.Green@ibm.com'
        IBM_CLOUD_DEVOPS_APP_NAME='inspoquotes'
        IBM_CLOUD_DEVOPS_TOOLCHAIN_ID='3ffa5313-95b8-4ee5-9c34-2cd3c69d916f'
        IBM_CLOUD_DEVOPS_WEBHOOK_URL='https://jenkins:3204a26e-3591-4964-8efa-e0bb7d927003:1a03501c-dcbf-46ae-b8f4-01d004d0d8ec@devops-api.us-south.devops.cloud.ibm.com/v1/toolint/messaging/webhook/publish'
//         pcfdev_org='Shekeva.Green@ibm.com'
//         pcfdev_space='dev'
//         pcfdev_user='YOUR_API_KEY_ID'
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
                sh 'npm --version'
                sh 'npm install'
                sh 'npm install enzyme'
                sh 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17'
                sh 'npm run build'
            }
        }
       stage('Unit Test and Code Coverage') {
            steps {
                sh 'npm run test'
                echo 'test complete'
            }
        }
        stage('Deploy to Prod') {
            steps {
                // Push the inspoquotes to Bluemix, production space
                sh(script: "curl -fsSL https://clis.cloud.ibm.com/install/linux bx config --check-version=false| sh")
                sh 'cf login -a https://api.us-south.cf.cloud.ibm.com -u apikey $IBM_CLOUD_DEVOPS_API_KEY -o $IBM_CLOUD_DEVOPS_ORG -s dev'
                pushToCloudFoundry(
                    target: 'https://api.us-south.cf.cloud.ibm.com',
                    organization: 'pcfdev_org',
                    cloudSpace: 'pcfdev_space',
                    credentialsId: 'pcfdev_user',
                    manifestChoice: [manifestFile: '/manifest.yml']
                )
                sh '''
                        echo "CF Login..."
                        cf login -a https://api.us-south.cf.cloud.ibm.com -u apikey $IBM_CLOUD_DEVOPS_API_KEY -o $IBM_CLOUD_DEVOPS_ORG -s dev
//                         cf login -u $IBM_CLOUD_DEVOPS_CREDS_USR -p $IBM_CLOUD_DEVOPS_CREDS_PSW -o $IBM_CLOUD_DEVOPS_ORG -s dev
                        echo "Deploying...."
                        export CF_APP_NAME="prod-$IBM_CLOUD_DEVOPS_APP_NAME"
                        cf delete $CF_APP_NAME -f
                        cf push $CF_APP_NAME -n $CF_APP_NAME -m 64M -i 1
                        # use "cf icd --create-connection" to enable traceability
                        cf icd --create-connection $IBM_CLOUD_DEVOPS_WEBHOOK_URL $CF_APP_NAME
                        
                        export APP_URL=http://$(cf app $CF_APP_NAME | grep urls: | awk '{print $2}')
                    '''
            }
        }
    }
}







