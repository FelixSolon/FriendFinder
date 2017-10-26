//because no one has time to properly concatenate these days.
var path = require('path');

module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //This was kind of a cool thing to find. app.use being "if you are doing anything, and it's not something up above, do this thing"
    //Sorta like "else" in an if statement or "default" in a switch statement
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });


};