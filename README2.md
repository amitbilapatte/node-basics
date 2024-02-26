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

- To run and manage your mongod process, you will be using your operating system's built-in init system. Recent versions of Linux tend to use systemd (which uses the systemctl command), while older versions of Linux tend to use System V init (which uses the service command).

- If you are unsure which init system your platform uses, run the following command:

- `ps --no-headers -o comm 1`

Then select the appropriate tab below based on the result:
 `systemd` : select the systemd (systemctl) tab below.
 `init` : select the System V Init (service) tab below.

## start MongoDB

- sudo systemctl start mongod //to start
- sudo systemctl status mongod // to check mongodb srver status
- sudo systemctl stop mongod // to stop
- sudo systemctl enable mongod // after this command we dont need to start mongodb everytime, its server is on all time till we manually stop it.

## Uninstall Mongodb

- sudo service mongod stop // Stop MongoDB
- sudo apt-get purge "mongodb-org*" // Remove Packages
- sudo rm -r /var/log/mongodb // Remove Data Directories
- sudo rm -r /var/lib/mongodb

## sample Mogo commands

- select database ecommerce :`use ecommerce`
- create table products and add one keyvalue pair: `db.products.insertOne({"title":"iphone"})`
- add multiple objects : `db.products.insertMany([{}"title:"iphone"},{"brand":"Apple"}])`
- see table: `db.products.find()` or `db.products.find().pretty()`
- see only one first record matching the description : `db.products.findOne({rating: {$eq:4.5}})` OR `db.products.findOne({rating: 4.5})`
- see all records matching the description : `db.products.find({rating: 4.5})`
- see particular record with multiple conditions: `db.products.find({rating: {$gt:4.5}},{id:{$gt:1}})`
- see particular record and `and` operator : `db.products.find({$and:[{rating: {$gt:4.5}},{id:{$gt:1}}]})`
- see particular record and `or` operator : `db.products.find({$or:[{rating: {$gt:4.5}},{id:{$gt:3}}]})`
- see sort result in ascending : `db.products.find({$or:[{rating: {$gt:4.5}},{id:{$gt:3}}]}).sort({"price":1})`
- see sort result in descending : `db.products.find({$or:[{rating: {$gt:4.5}},{id:{$gt:3}}]}).sort({"price":-1})`
- to get count : `db.products.countDocuments()`
- to get count : `db.products.countDocuments({"price":{$gt:600}})`
- to get only title of all records who match given condition: `db.products.find({"price":{$gt:600}},{"title":1,"price":1})` : here "title":1 means it will return titles for matching records, same for price
- **UPDATE** : `db.products.updateOne({"id":1},{$set:{"amount":999}})`: this command will update value of amount in records where id is 1, if amount is not present then it will create new field in that record.
- **UPSERT** : `db.products.updateOne({"id:7},{$set:{"price":999}},{"upsert":true})` here upsert option needs boolean true/false value
