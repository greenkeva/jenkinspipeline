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
            sh 'wget https://public.dhe.ibm.com/cloud/bluemix/cli/bluemix-cli/1.2.3/IBM_Cloud_CLI_1.2.3_386.tar.gz'
            sh 'tar -xvf IBM_Cloud_CLI_1.2.3_386.tar.gz'
            sh './Bluemix_CLI/install_bluemix_cli'


            sh 'bx config --check-version=false'

            sh 'bx api https://api.ng.bluemix.net'
            sh 'bx login'
            sh 'bx target -o Shekeva.Green@ibm.com -s dev'
            sh 'bx cf push inspoquotes'
            checkout scm
            sh 'wget https://public.dhe.ibm.com/cloud/bluemix/cli/bluemix-cli/1.2.3/IBM_Cloud_CLI_1.2.3_386.tar.gz'
            sh 'chmod +x deploy.sh'
            sh './deploy.sh'
        }
    }
  }
}












