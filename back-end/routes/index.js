var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require("../config/config.js");
var randtoken = require("rand-token");
var bcrypt = require('bcrypt-nodejs');

// var stripe = require("stripe")(config.secretStripeToken)

var connection = mysql.createConnection ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req,res,next)=>{
    console.log("meep");
    console.log(bcrypt.hashSync("drew"));
    var username = req.body.username;
    var password = req.body.password;
    var findUserQuery = "select * from user_info where username = ?";
    connection.query(findUserQuery, [username], (error,results,fields)=>{
        if (error) throw error;
        if (results.length === 0){
            res.json({
                msg: "badUsername"
            });
        }else{
            checkHash = bcrypt.compareSync(password, results[0].password);
            if (checkHash === false){
                res.json({
                    msg: "loginFailure"
                })
            }else{
                var token = randtoken.uid(40);
                var insertToken = "update user_info set token=? where username=?";
                connection.query(insertToken, [token, username], (error2,results2)=>{
                    console.log(token);
                    res.json({
                        msg: "loginSuccess",
                        token: token,
                        name: results[0].username
                    });
                });
            };
            // console.log(":LKSGHWIOERGHWLEKGH");
            console.log(checkHash);
        }
    });
})


module.exports = router;
