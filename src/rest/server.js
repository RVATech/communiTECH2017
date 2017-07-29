var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysqlpw",
    database: "AC"
});


app.get('/companies', function(req, res){
    res.send('All companies');
});

app.get('/companies/company/:id', function(req,res){
    res.send('Company by id');
});

app.post('/companies/company', function(req, res){
    connection.query('INSERT INTO Companies SET ?', req.body,
        function (err, result) {
            if (err){
                throw err;
            }
            res.send('Company added to database with ID: ' + result.insertId);
        }
    );
});

app.post('/postings/posting', function(req,res){
    connection.query('INSERT INTO Postings SET ?', req.body,
        function (err, result) {
            if (err){
                throw err;
            }
            res.send('Posting added to database with ID: ' + result.insertId);
        }
    );
});

app.get('/postings/posting/:id', function(req,res){
    res.send('Posting by ID');
});

app.listen(3001);
console.log('Listening on port 3001...');