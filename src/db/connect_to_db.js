//https://hackernoon.com/nodejs-mysql-install-setup-tutorial-example-connection-insert-query-fd5c5032d3b0
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysqlpw",
    database: ""
});
con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});
con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
    if(err) console.log('err: ', err);
    else console.log('Terminated done: ');
});