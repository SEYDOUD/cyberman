const { Sequelize } = require('sequelize');
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;
const DB_HOST=process.env.DB_HOST;
const DB_NAME=process.env.DB_NAME;
require('dotenv').config();

module.exports = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    port:5432,
    dialect:'postgres',
    define: {
        freezeTableName:true
    }
});