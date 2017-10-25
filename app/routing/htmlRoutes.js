var path = require('path');

module.exports = function(app){
    app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //This was kind of a cool thing to find.
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });


};