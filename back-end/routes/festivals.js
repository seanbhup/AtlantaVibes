var express = require('express');
var router = express.Router();

// MySql db connection and dependicies
// MySql db connection and dependicies
var mysql = require('mysql');
var config = require("../config/config.js");
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
connection.connect();

router.post('/postComment', (req, res, next) => {
    var time = req.body.timestamp;
    var festival_id = req.body.festivalId;
    var comment = req.body.userPost;
    var username = req.body.username;
    var user_id;

    var getUserQuery = `SELECT id FROM user_info WHERE username = ?`;
    connection.query(getUserQuery, [username], (error, results, fields) => {
        if (error) throw error;
        user_id = results[0].id;
        var insertCommentQuery = `INSERT INTO comments (user_id, comment, festival_id, timestamp) VALUES (?, ?, ?, ?)`;
        connection.query(insertCommentQuery, [user_id, comment, festival_id, time], (error2, results2, fields2) => {
            if (error2) throw error2;
            console.log(results2);
            res.json({
                comment: comment,
                username: username,
                time: time
            });
        });
    });
});

router.use('/festivalDetail', function(req, res, next) {
    var festivalName;
    festivalName = req.query.festivalName;
    // This block of code is for viewing res.json when no festival was sent,
    // it hard codes to SweetWater 420 Fest.
    // if (req.query.festivalName) {
    //     festivalName = req.query.festivalName;
    // } else {
    //     festivalName = "SweetWater 420 Fest";
    // }
    var selectAllQuery = `SELECT * FROM festivals WHERE name = "${festivalName}"`;
    connection.query(selectAllQuery, (error, results, fields) => {
        if (error) throw error;
        var commentId = results[0].id;
        var secondQuery = `SELECT user_info.username, user_info.avatar_the_last_airbender, comment, festival_id, user_id FROM comments
        INNER JOIN user_info ON comments.user_id = user_info.id
        WHERE festival_id = ${commentId}`;
        connection.query(secondQuery, (error2, results2, fields2) => {
            if (error2) throw error2;
            res.json({
                festival: results[0],
                comments: results2
            });
        });
    });
});

// Get all festivals in order from the database and send it back to the front end
router.get('/viewAll', function(req, res, next) {

    var selectAllQuery = `SELECT * FROM festivals ORDER BY start_date asc;`;
    connection.query(selectAllQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});


// Get only the festivals that have a rating over 6 and pass them to the front-end
router.get("/topRated", function(req, res, next) {
    var selectTopRatedQuery = `SELECT * FROM festivals WHERE rating > 6 ORDER BY rating desc`;
    connection.query(selectTopRatedQuery, (error, results, fields) => {
        // console.log(fields, "drew the eeper")
        if (error) throw error;
        res.json(results);
    });
});





module.exports = router;
