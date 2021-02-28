//server/server.js
//This ensures absolute segregation between client-side and server-side code.
//we create a server, set the ‘view engine’ to ‘ejs’ as we discussed earlier. We also tell our server where our template file(s) are placed
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);
module.exports=app;
