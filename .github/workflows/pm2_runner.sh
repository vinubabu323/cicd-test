#!/bin/bash
if ! type pm2 > /dev/null
then
  sudo npm install -g pm2 && pm2 start ./index.js 
else
  pm2 restart ./index.js
fi