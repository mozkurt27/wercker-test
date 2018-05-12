/**
 * Copyright (c) 2017, Irfan Ahmed.
 */

var express = require('express');
var http = require("http");
var when = require("when");

var app = express();
var server = http.createServer(app);

// Configuration
app.use(express.static(__dirname + "/public"));


/** Setup Cross Origin **/
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Start server
server.listen(9000, function() {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});

