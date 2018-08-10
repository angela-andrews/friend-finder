/*
================================
Dependencies
================================
*/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
/*
================================
Configure Express app obj & port
================================
*/
var app = express();
var PORT = process.env.PORT || 8080;
/*
================================
Body parser Middleware
================================
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*
================================
Require Routes
================================
*/
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
/*
================================
Configure Listener
================================
*/
app.listen(PORT, ()=>{
    console.log(`App listening on PORT: ${PORT}`);
    console.log(`Browse to http://localhost:${PORT}`);
});