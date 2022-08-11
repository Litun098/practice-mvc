# initializing npm
npm init

# install required packages
npm i express sequelize sequelize-cli mysql2 nodemon

# initialize sequelize
npx sequelize init

# create database
npx sequelize db:create

# to create tables
npx sequelize model:generate --name Users --attributes name:text
npx sequelize model:generate --name Companies --attributes name:text


# to create table in database
npx sequelize db:migrate

# to create seeders
npx sequelize seed:generate --name add-users
npx sequelize seed:generate --name add-companies

# insert data into db
npx sequelize db:seed:all