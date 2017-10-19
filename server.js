var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//I feel like I'm doing cargo cult coding at the moment.
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get("/survey.html", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

var dataholder = "";

// Create a generic function to handle requests and responses


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
