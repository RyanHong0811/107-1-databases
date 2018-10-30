const express = require('express');
const app = require('express')();
const router = require('express').Router();
const bodyParser = require('body-parser');
const http = require('http');
const server = exports;
var ejs = require('ejs');

// load express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/css', express.static('css'));
http.createServer(app).listen(8008);

server.router = router;
server.app = app;