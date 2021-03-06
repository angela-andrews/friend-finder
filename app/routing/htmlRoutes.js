/*
================================
Require to path module
================================
*/
var path = require('path');

/*
================================
Module Exports: HTML get requests
================================
*/
module.exports = function(app){

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('*', function(req,res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};