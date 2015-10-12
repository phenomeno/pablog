global.__SERVER__ = true;
import express from "express";
import React from "react";
import { match, RoutingContext } from "react-router";
import { routes } from "./routes";
import mysql from 'mysql';

const db_pool = mysql.createPool({
    host    : process.env['MYSQL_HOST'] || 'localhost',
    user    : process.env['MYSQL_USER'],
    password: process.env['MYSQL_PASSWORD'],
    database: process.env['MYSQL_DATABASE']
});
const app = express();

app.use('/img', express.static('img'));

app.get('/main.css', function(req,res) {
    res.sendFile("/main.css", {
        root: './src'
    });
});

app.get('/client.js', function(req, res){
    res.sendFile("/client.js", {
        root: './dist'
    });
});

app.get('/api/v1/posts', function(req, res) {
    db_pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM posts', function(err, rows, fields) {
            console.log(err, rows);
            res.json({'posts': rows});
            connection.release();
        });
    });   
});

app.get('/*', function (req, res) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if(error) {
            res.send(500, error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);       
        } else if (renderProps) {
            var head = "<html><head><link href='https://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet' type='text/css'><link rel='stylesheet' type='text/css' href='/main.css'><script src='/client.js'></script></head><body><div id='content'>";
            var tail = "</div></body></html>";
            res.send(200, head + React.renderToString(<RoutingContext {...renderProps} />) + tail);        
        } else {
            res.send(404, 'Not found');        
        }
    });



       // let content = React.renderToString(<Handler />);
       // res.end(head + content + tail);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
