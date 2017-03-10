var express = require('express');
var router = express.Router();

// MySql db connection and dependicies
// MySql db connection and dependicies
var mysql = require('mysql');
var config = require("../config/config.js");
var connection = mysql.createConnection ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
connection.connect();

// Get all festivals in order from the database and send it back to the front end 
router.get('/viewAll', function(req, res, next) {

    var selectAllQuery = `SELECT * FROM festivals ORDER BY start_date asc;`;
    connection.query(selectAllQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});


// Get only the festivals that have a rating over 6 and pass them to the front-end 
router.get("/topRated", function(req,res,next){
    var selectTopRatedQuery = `SELECT * FROM festivals WHERE rating > 6 ORDER BY rating desc`;
    connection.query(selectTopRatedQuery, (error,results,fields)=>{
        console.log(fields, "drew the eeper")
        if (error) throw error;
        res.json(results);
    });
});





module.exports = router;
