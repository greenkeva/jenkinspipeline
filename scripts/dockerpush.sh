#!/bin/bash/
docker build -t 201020122013/cicd:{env.BUILD_NUMBER} .
docker push 201020122013/cicd:{env.BUILD_NUMBER}