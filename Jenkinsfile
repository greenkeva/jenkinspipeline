#!groovy
node {
    git url: 'https://github.com/greenkeva/jenkinspipeline.git'
    tool name: 'node-14.17.6', type: 'nodejs'

    withEnv([
            // You need to specify 3 required environment variables and your bluemix credentials first, they are going to be used for the following IBM Cloud DevOps steps
            'IBM_CLOUD_DEVOPS_APP_NAME=inspoquotes',
            'IBM_CLOUD_DEVOPS_TOOLCHAIN_ID=a1008443-6d12-4e6f-8ddc-80575d8d4f1'
    ]) {
        //specify your bluemix credentials, please use "IBM_CLOUD_DEVOPS_CREDS_USR" for usernameVariable, "IBM_CLOUD_DEVOPS_CREDS_PSW" for passwordVariable
        withCredentials([string(credentialsId: 'YOUR_API_KEY_ID', variable: 'IBM_CLOUD_DEVOPS_API_KEY')]) {
            // work around to get the git commit id
            def gitCommit = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
            stage('Build') {
                withEnv(["GIT_COMMIT=${gitCommit}",
                         'GIT_BRANCH=master',
                         "GIT_REPO=https://github.com/greenkeva/jenkinspipeline.git"]) {
                    try {
                        sh 'npm --version'
                        sh 'npm install'
                        sh 'npm install enzyme'
                        sh 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17'
                        sh 'npm run build'

                        // use "publishBuildRecord" method to publish build record
                        publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"SUCCESS"
                    }
                    catch (Exception e) {
                        publishBuildRecord gitBranch: "${GIT_BRANCH}", gitCommit: "${GIT_COMMIT}", gitRepo: "${GIT_REPO}", result:"FAIL"
                    }
                }
                stage('Unit Test and Code Coverage') {
                    sh 'npm run test'
                    // use "publishTestResult" method to publish test result
                    publishTestResult type:'unittest', fileLocation: './enzymetest.json'
                    publishTestResult type:'code', fileLocation: './tests/coverage/reports/coverage-summary.json'
                }
                stage('Deploy to Staging') {
                    try {
                    	// Push the Weather App to Bluemix, staging space
                        	sh '''                              
                                echo "Deploying...."                              
                            '''
                        // use "publishDeployRecord" method to publish deploy record
                        publishDeployRecord environment: "STAGING", appUrl: "http://staging-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"SUCCESS"                       
                    }
                    catch (Exception e) {
                        publishDeployRecord environment: "STAGING", appUrl: "http://staging-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"FAIL"                        
                    }
                }
                stage('FVT') {
                    withEnv(["APP_URL=http://staging-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net"]) {
                        sh 'npm run test'
                    }

                    // use "publishTestResult" method to publish test result
                    publishTestResult type:'fvt', fileLocation: './mochafvt.json', environment: 'STAGING'
                }
                stage('Deploy to Prod') {
                    try {
                    	// Push the inspoquotes to Bluemix, production space
                        sh '''                                
                                echo "Deploying...."                              
                            '''         
                    	// use "publishDeployRecord" method to publish deploy record
                        publishDeployRecord environment: "PRODUCTION", appUrl: "http://prod-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"SUCCESS"                     
                    }
                    catch(Exception e) {
                        publishDeployRecord environment: "PRODUCTION", appUrl: "http://prod-${IBM_CLOUD_DEVOPS_APP_NAME}.mybluemix.net", result:"FAIL"
                    }
                }
            }
        }
    }
}














