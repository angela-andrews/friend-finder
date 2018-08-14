/*
================================
Require to friends data
================================
*/
var friendsData = require("../data/friends.js");

/*
================================
Module Exports
================================
*/
module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        //returning back the data from friends.js as a a JSON response.
        res.json(friendsData);

    });

    app.post('/api/friends', (req, res) => {
        var bestMatchName = null;
        var bestMatchPhoto = null;
        var friendDiff = 9999999;
       
        var userData= req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var totalDiff = 0;
        
        for(var i = 0; i< friendsData.length ; i++){
            var currentFriend = friendsData[i];
            console.log(currentFriend.name);

            for(var x = 0; x < currentFriend.scores.length; x++){
                var currentFriendScore = currentFriend.scores[x];
                var newUserScore = userScores[x];
                totalDiff += Math.abs(parseInt(newUserScore)- parseInt(currentFriendScore));
            }

            if(totalDiff <= friendDiff){
                bestMatchName = currentFriend.name;
                bestMatchPhoto = currentFriend.photo;
                friendDiff = totalDiff

            }
         }
         friendsData.push(userData);
        console.log(`bestMatchName ${bestMatchName}\nbestMatchPhoto ${bestMatchPhoto} `)
         res.json({bestMatchName: bestMatchName,bestMatchPhoto: bestMatchPhoto });

    });
}; //end module.exports