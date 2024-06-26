#!/usr/bin/env bash

# start your projet
npm init -y

# directory start (package.json)
npm install

# install webpack and webpack CLI 
npm install webpack webpack-cli --save-dev

# install css loader style loader
npm install css-loader style-loader --save-dev

# install file-loader
npm install file-loader --save-dev

# install jquery && lodash
npm install jquery lodash --save

# image-webpack-loader
npm install image-webpack-loader --save-dev


echo  " all Done ✅"
