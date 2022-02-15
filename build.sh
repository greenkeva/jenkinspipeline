#!/bin/bash
sudo chmod +x jenkins
sudo chmod 777 jenkins
npm --version
npm install
npm install enzyme
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
npm run build
