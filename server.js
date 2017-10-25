var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ type: "application/*+json" }));

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

//turns out you have to require everything else in the world
//before you can require the app.use(function(req, res){})
//Or else it just calls that one.
//That makes sense I guess.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
 
var path = require('path');

var previousSurveys = []

console.log(previousSurveys);
