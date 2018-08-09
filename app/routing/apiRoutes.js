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
    app.get("/api/friends", (req, res)=> {
        res.json(friendsData);
        
    });

    app.post('/api/friends',(req, res) =>{
        //friendsData.push(req.body);
        var newUser = req.body;
        friendsData.push(newUser);
        console.log(friendsData);
        return res.json(newUser);
    });
}; //end module.exports
