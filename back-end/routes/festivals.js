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

router.post("/rateFestival", (req, res, next) => {
    var findUserQuery = "select * from user_info where username = ?";
    var username = req.body.username
    var festivalId = req.body.festivalId
    var rating = req.body.rating

    console.log(req.body);
    var insertQuery = `INSERT INTO ratings (user_id, rating, festival_id) VALUES (?,?,?)`;
    connection.query(findUserQuery, [username], (error, results, fields) => {
        if (error) throw error;
        // console.log(results)
        var userId = results[0].id
        connection.query(insertQuery, [userId, rating, festivalId], (error2, results2, fields2) => {
            if (error2) throw error2;
            // console.log(results2);

        })
    })
    // update ratings

    var selectRatingsQuery = 'SELECT rating FROM ratings WHERE festival_id = ?'
    connection.query(selectRatingsQuery, [festivalId], (error3, results3, fields3) => {
        if (error3) throw error3;
        var sum = 0;
        var counter = 0;
        var ratingAvg = 0;
        results3.map((ratingPackage, index) => {
            sum += ratingPackage.rating
            counter++;


        })
        
        ratingAvg = sum / counter
        var roundedAvg = Math.max(Math.round(ratingAvg * 10) / 10).toFixed(1);
        // console.log(ratingAvg);
        // console.log(roundedAvg);
        var updateQuery = 'UPDATE festivals SET rating = ? WHERE id = ?';
        connection.query(updateQuery, [roundedAvg, festivalId], (error4, results4, fields4) => {
            
            res.json({
                festivalRating: roundedAvg,
                festivalId: festivalId
            })
            
        })
    })



})


router.post('/postComment', (req, res, next) => {
    var timestamp = req.body.timestamp;
    var festival_id = req.body.festivalId;
    var comment = req.body.userPost;
    var username = req.body.username;
    var user_id;

    var getUserQuery = `SELECT id, avatar_the_last_airbender FROM user_info WHERE username = ?`;
    connection.query(getUserQuery, [username], (error, results, fields) => {
        if (error) throw error;
        // grab the user id and avatar from the database so that we can pass it to the front end
        user_id = results[0].id;
        var avatar_the_last_airbender = results[0].avatar_the_last_airbender;

        console.log("***************************");
        console.log(results);
        console.log("***************************");
        var insertCommentQuery = `INSERT INTO comments (user_id, comment, festival_id, timestamp) VALUES (?, ?, ?, ?)`;
        connection.query(insertCommentQuery, [user_id, comment, festival_id, timestamp], (error2, results2, fields2) => {
            if (error2) throw error2;

            // need to convert the timestamp to a number before sending it back to the front-end so that we can convert it to a date object
            timestamp = Number(timestamp);
            res.json({
                comment: comment,
                username: username,
                timestamp: timestamp,
                avatar_the_last_airbender: avatar_the_last_airbender
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
        var secondQuery = `SELECT user_info.username, user_info.avatar_the_last_airbender, comment, festival_id, user_id, timestamp FROM comments
        INNER JOIN user_info ON comments.user_id = user_info.id
        WHERE festival_id = ${commentId} ORDER BY timestamp DESC`;
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
    var selectTopRatedQuery = `SELECT * FROM festivals WHERE rating > 4 ORDER BY rating desc`;
    connection.query(selectTopRatedQuery, (error, results, fields) => {
        // console.log(fields, "drew the eeper")
        if (error) throw error;
        res.json(results);
    });
});





module.exports = router;
