var friends = require("../data/friends");

module.exports = function(app){
  //Lets you view the friends JSON object, if you should so choose.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    var bestMatch = {
      //Because this is more fun than actually doing error catching on all the questions.
      name: "Bad news: You didn't get any matches. You can either reference the below image, or go back and answer all of the questions this time.",
      photo: "https://pics.me.me/ever-loved-someone-so-much-you-would-do-anything-for-13902630.png",
      //I like that Infinity is a number in JS.
      friendDifference: Infinity
      };

      //Throw everything important into variables
    var userData = req.body;
    var userScores = userData.scores;

    //initialize your variable.
    var totalDifference = 0;

    //Loop through the list of potential friends
    for (var i = 0; i < friends.length; i++) {
      //Reset the existing variable to 0. Since it's still in scope,
      //just going var totalDifference = 0 would probably error as you're trying to declare something that already exists
      //I didn't bother to try, though.
      totalDifference = 0;
      //loop through the answers of each friend
      for (var j = 0; j < friends[i].scores.length; j++){
        //add to the Total Difference the absolute value of the difference between the scores
        totalDifference+=Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
      };

      //If you match better than the previous match, you're the new best match.
      //If you match the same as a previous match, you're the new best match.
      //Because while the early bird gets the worm, the second mouse gets the cheese.
    if (totalDifference <= bestMatch.friendDifference){
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
      };
    }
    //Add the user to the friends JSON *after* matching with someone else.
    //Self-friending is not allowed here.
    friends.push(userData);

    //Send whoever it found back.
    res.json(bestMatch);
  });
}