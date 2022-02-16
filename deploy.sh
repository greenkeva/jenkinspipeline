#!/bin/bash

echo "Deploying...."
export CF_APP_NAME="prod-$IBM_CLOUD_DEVOPS_APP_NAME"
cf delete $CF_APP_NAME -f
cf push $CF_APP_NAME --hostname inspoquotes -b staticfile_buildpack
#  use "cf icd --create-connection" to enable traceability
cf icd --create-connection $IBM_CLOUD_DEVOPS_WEBHOOK_URL $CF_APP_NAME

export APP_URL=http://$(cf app $CF_APP_NAME | grep urls: | awk '{print $2}')
