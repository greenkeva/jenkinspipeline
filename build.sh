#!/bin/bash
npm --version
npm install
npm install enzyme
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
npm run build
npm i -g @ibmgaragecloud/cloud-native-toolkit-cli
npm i @marcosbv/ibmcloud-apikey-single-auth
