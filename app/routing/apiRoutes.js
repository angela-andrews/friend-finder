/*
================================
Route to friends data
================================
*/
var friendsData = require("../data/friends.js");

/*
================================
Module Exports
================================
*/
module.exports =(app) => {
    app.get('/api/friends', (req, res)=> {
        res.json(friendsData);
        
    });

    app.post('api/friends',(req, res) =>{
        friendsData.push(req.body);
    });
}; //end module.exports
