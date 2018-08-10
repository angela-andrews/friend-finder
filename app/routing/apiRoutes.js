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
        // //scores from user just added 
        var newUser = req.body;
        var userScores = newUser.scores;
        var totalDiff;

        console.log(newUser);
        friendsData.push(newUser);//push the new user in friendsData Array
        res.json(newUser);//Send a JSON response.


        var bestMatch = {
            name: '',
            photo: '',
            friendDifference: Infinity

        };

        for(var i = 0; i< friendsData.length; i++){
            var currentFriend = friendsData[i];
            totalDiff = 0;
            console.log(currentFriend.name);
            for(var j = 0; j < currentFriend.scores.length; j++){
                console.log(currentFriend.scores);
                var currentFriendScore = currentFriend.scores[j];
                
                var currentUserScore = currentFriend[j];
                    totalDiff +=Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                    console.log(totalDiff);
            }
        }
        // var incomingUser = JSON.stringify(req.body);
        // var userScores = newUser.scores;
        // var string = "";
        // var name = ""
        // //friendsData = JSON.stringify(friendsData);
        // // for (var key in friendsData) {
        // //     string = string + friendsData[key];
        // //     console.log("inthe loop" + string);
        // // }
        // console.log(`This is friendsData: ${friendsData}`);
        // console.log(`This is the object from the form: ${incomingUser}`);
        // console.log(`This is the scores array from the new friend: ${userScores}`);






    });
}; //end module.exports