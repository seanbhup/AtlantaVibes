var mysql = require('mysql');
var config = require("../config/config.js");

module.exports = mysql.createConnection ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
