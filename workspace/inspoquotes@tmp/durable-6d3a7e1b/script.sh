#!/bin/bash
# set -e

# echo "Installing the IBM Cloud API v.0.6.6"

wget https://clis.cloud.ibm.com/install/linux
wget https://public.dhe.ibm.com/cloud/bluemix/cli/bluemix-cli/0.6.6/IBM_Cloud_CLI_0.6.6_amd64.tar.gz
tar -xvf IBM_Cloud_CLI_0.6.6_amd64.tar.gz
./Bluemix_CLI/install_bluemix_cli


# Ignore updates because they need confirmation from the user
# bx config --check-version=false

# bx api https://api.ng.bluemix.net
# bx login
# bx target -o Shekeva.Green@ibm.com -s dev
# bx cf push
