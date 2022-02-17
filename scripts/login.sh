#!/bin/bash

echo $DOCKER_HUB_PW | docker login -u $DOCKER_HUB_USR --password-stdin