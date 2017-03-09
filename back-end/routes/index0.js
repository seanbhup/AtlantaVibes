var express = require('express');
var router = express.Router();

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

// Encrypting/Decrypting tools
var randtoken = require("rand-token");
var bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req,res,next)=>{

    // pull in username and password from login action
    var username = req.body.username;
    var password = req.body.password;

    // Look into database to see if there is a user that matches the username entered
    var findUserQuery = "select * from user_info where username = ?";

    connection.query(findUserQuery, [username], (error,results,fields)=>{
        if (error) throw error;
        if (results.length === 0){
            res.json({
                msg: "badUsername"
            });
            console.log(results);
        }else{
            checkHash = bcrypt.compareSync(password, results[0].password);
            if (checkHash === false){
                res.json({
                    msg: "loginFailure"
                });
                console.log(results);
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
                    console.log(results);
                });
            };
        }
    });
})

router.post('/register', (req, res, body) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password);

    // check availability of username before allowing user to sign up

    var selectQuery = 'SELECT * FROM user_info WHERE username = ?'
    connection.query(selectQuery, [username], (error, results, fields) =>{
        // if nothing comes back, that means no user exists with this name
        if (results.length === 0){
            // enter user into database
            var insertUserQuery = `INSERT INTO user_info (username, password, email_address) VALUES (?, ?, ?)`;
            connection.query(insertUserQuery, [username, password, email], (error2, results2, fields2) => {
                if (error2) throw error2;
                res.json({
                    msg: 'userInserted'
                })
            });
        }else{
            res.json({
                msg: 'userExists'
            })
        }
    })

});


module.exports = router;