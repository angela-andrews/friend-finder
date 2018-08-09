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
Configure Express
================================
*/
var app = express();
var PORT = process.env.PORT || 8080;
/*
================================
Configure app to use body parser
================================
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*
================================
Express Static
================================
*/
app.use(express.static(path.join(__dirname, 'public')));


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