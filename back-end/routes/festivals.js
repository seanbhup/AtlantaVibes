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

/* GET users listing. */
router.get('/viewAll', function(req, res, next) {

    var selectAllQuery = `SELECT * FROM festivals ORDER BY start_date asc;`;
    connection.query(selectAllQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});


router.get("/topRated", function(req,res,next){
    var selectTopRatedQuery = `SELECT * FROM festivals WHERE rating > 6 ORDER BY rating desc`;
    connection.query(selectTopRatedQuery, (error,results,fields)=>{
        console.log(fields, "drew the eeper")
        if (error) throw error;
        res.json(results);
    });
});

router.get("/upcoming", function(req,res,next){
    var selectUpcomingQuery = `SELECT * FROM festivals WHERE start_date `
})



module.exports = router;
