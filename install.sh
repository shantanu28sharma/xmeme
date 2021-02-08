#!/bin/bash

sudo apt-get update;
sudo apt-get -y install postgresql postgresql-contrib

sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

sudo npm install -g serve

sudo service postgresql start
sudo -u postgres createdb memes
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'password';"
