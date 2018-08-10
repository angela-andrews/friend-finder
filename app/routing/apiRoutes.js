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
        // //scores from user just submitted 
        var newUserBody = req.body;
        var newUser = JSON.stringify(req.body);
        var newUserScores = JSON.stringify(req.body.scores)
        //var newUserScores = req.body.scores;
        var totalDiff = 9999999;
        var bestMatchName= "";
        var bestMatchImage= "";
        var questionDiff= 0;
        console.log(`==================\nvarible newUser: ${newUser}\nvariable newUserScores: ${newUserScores} `)

       // console.log(`This user just filled out the form ${newUser.name} & here are their scores, ${newUserScores}`);
        //friendsData.push(newUser);//push the new user in friendsData Array
        res.json(newUserBody);//Send a JSON response.


        //once the newUser scores are here, we compare those against each user
        //in the friendsData array.
        //1) calculate the difference between newUser array and 1 user from friends data
        // This MUST be done in a nested loop!!!
        // 1st loop grabs currentfriend from friendsData, 
        // 2nd loop takes each index, 1 at a time, parses them both, then subtracts 1 from the 
        // other, index by index.To make sure no difference ends up with a negative value, we use
        // Math.abs() to assign the number to totalDiff
        //   You can use Math.abs to make sure you don't end up with any negative numbers
        /*  visual example
            newUser = [4,3,2,3,5,3,1,2,3,4]
            oldUser = [5,2,1,3,4,5,3,2,3,4]
                    -------------------------
            diffArray=[1,1,1,0,1,2,2,0,0,0]  (add this array using reduce())
                                            diffArray.
            totalDiff = 8


        */
        // for(var i = 0; i< friendsData.length; i++){
        //     var currentFriend = friendsData[i];//put user from JSON into varible
        //     totalDiff = 0;
        //     console.log(currentFriend.name); //console out that friend's name
        //     for(var j = 0; j < currentFriend.scores.length; j++){ //score of current friend
        //         //console.log(currentFriend.scores[j]); //console out that friends's scores 
        //         var currentFriendScore = currentFriend.scores[j];// put that friend's scores into a var
        //         // console.log(`New User scores: ${newUserScores}\n Current Friend Score: ${currentFriendScore}`)
        //         //var currentUserScore = currentFriend[j];
        //             totalDiff=Math.abs(parseInt(9) - parseInt(currentFriendScore));
        //             console.log(totalDiff);
        //     }
        // }
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