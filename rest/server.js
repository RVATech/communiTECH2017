var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "mysqlpw",
    database: "AC"
});


app.get('/companies', function(req, res){
    connection.query('SELECT * from AC.Companies',
        function (err, result) {
            if (err){
                    throw err;
            }
            res.send(result);
        })
});

app.get('/companies/company/:id', function(req,res){
    res.send('SELECT * from AC.Companies where company_id = ?', req.body);
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

app.get('/postings', function(req, res){
    connection.query('SELECT * from AC.Postings as A join AC.Companies as B on A.company_id = B.company_id',
        function (err, result) {
            if (err){
                throw err;
            }
            res.send(result);
        })
});

app.get('/postings/posting/:id', function(req,res){
    res.send('SELECT * from AC.Postings where id = ?', req.body);
});

app.listen(8080);
console.log('Listening on port 8080...');