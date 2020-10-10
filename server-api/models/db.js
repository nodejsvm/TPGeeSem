const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if(error) throw error;
    console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;