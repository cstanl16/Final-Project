const express = require('express');
const mysql = require ('mysql');

const port = process.env.port || 2000;
const app = express();

var connection = mysql.createConnection({
    host     : 'sql9.freemysqlhosting.net',
    user     : 'sql9381457',
    password : 'bYGRqVt8YU',
    database : 'sql9381457'
});

app.get('/', async (req, res) => {
    connection.connect();

    connection.query('SELECT * FROM Budget', function (error, results, fields) {
    connection.end();
    if (error) throw error;
    res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});