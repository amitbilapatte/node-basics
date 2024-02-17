# Mongo Installation

- sudo apt update
- sudo apt install mongodb
- sudo systemctl start mongodb
- `wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`
- `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`
- sudo apt update
- sudo apt install -y mongodb-org
- `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`
- sudo apt update
- sudo apt install -y mongodb-org
- sudo apt update
- sudo apt upgrade
- sudo apt install libssl1.1=1.1.1f-1ubuntu2.10
- apt show libssl1.1 | grep Version

## Import the public key used by the package management system

- sudo apt-get install gnupg curl
- `curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc |    sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg    --dearmor`

## Create a list file for MongoDB

- `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list`

## Reload local package database

- sudo apt-get update

## Install the MongoDB packages

- sudo apt-get install -y mongodb-org

## Init System

To run and manage your mongod process, you will be using your operating system's built-in init system. Recent versions of Linux tend to use systemd (which uses the systemctl command), while older versions of Linux tend to use System V init (which uses the service command).

If you are unsure which init system your platform uses, run the following command:

- `ps --no-headers -o comm 1`

Then select the appropriate tab below based on the result:
 `systemd` : select the systemd (systemctl) tab below.
 `init` : select the System V Init (service) tab below.

## start MongoDB

- sudo systemctl start mongod //to start
- sudo systemctl status mongod // to check mongodb srver status
- sudo systemctl stop mongod // to stop
- sudo systemctl enable mongod // after this command we dont need to start mongodb everytime, its server is on all time till we manually stop it.
