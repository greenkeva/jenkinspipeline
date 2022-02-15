#!/bin/bash
sudo chmod +x jenkins
sudo chmod 777 jenkins

set -e


echo "Installing the IBM Cloud CLI"

wget https://public.dhe.ibm.com/cloud/bluemix/cli/bluemix-cli/1.2.3/IBM_Cloud_CLI_1.2.3_386.tar.gz
tar -xvf IBM_Cloud_CLI_1.2.3_386.tar.gz
./Bluemix_CLI/install_bluemix_cli


# Ignore updates because they need confirmation from the user
bx config --check-version=false

bx api https://api.ng.bluemix.net
bx login
bx target -o Shekeva.Green@ibm.com -s dev
bx cf push inspoquotes
