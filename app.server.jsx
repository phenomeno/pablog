global.__SERVER__ = true;
import express from "express";
import React from "react";
import { match, RoutingContext } from "react-router";
import { routes } from "./routes";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import crypto from 'crypto';

const db_pool = mysql.createPool({
    host    : process.env['MYSQL_HOST'] || 'localhost',
    user    : process.env['MYSQL_USER'],
    password: process.env['MYSQL_PASSWORD'],
    database: process.env['MYSQL_DATABASE']
});
const app = express();

app.use(cookieParser());
app.use(session({secret: process.env['SESSION_SECRET']}));
app.use('/img', express.static('img'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/api/v1/login', function(req, res) {
  console.log(req.body);
  db_pool.getConnection(function(err, connection) {
    connection.query('SELECT id, username, bio, lastname, firstname, avatar_url FROM users WHERE username=? AND password=?', [req.body.username, crypto.createHash('md5').update(req.body.password).digest("hex")], function(err, rows, fields) {
      if (err || rows.length < 1) {
        res.json({'err': err});
      } else {
        connection.query('UPDATE users SET last_access=NOW() WHERE id=?', [rows[0].id]);
        req.session.username = rows[0].username;
        res.json({'err': 0, 'user': rows[0]});
      }
    });
  });
});

app.post('/api/v1/logout', function(req, res) {
  req.session.username = null;
  res.json({'err': 0});
});

app.get('/api/v1/is_logged', function(req, res) {
  res.json({'username': req.session.username});
});

app.get('/*', function (req, res) {
    // React function
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
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
