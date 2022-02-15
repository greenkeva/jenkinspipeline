#!/bin/bash
chmod +x jenkins
npm --version
npm install
npm install enzyme
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
npm run build
