var friends = require("../data/friends");

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    var bestMatch = {
      name: "",
      photo: "",
      //I like that Infinity is a number in JS.
      friendDifference: Infinity
      };

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++){
        totalDifference+=Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
      };

    if (totalDifference <= bestMatch.friendDifference){
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
      };
    }
    friends.push(userData);

    res.json(bestMatch);
  });
}