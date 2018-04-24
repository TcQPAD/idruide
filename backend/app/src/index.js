/**
 * This is the "main file" of the project.
 * This is the file where you will declare the routes of
 * your REST application, protect routes with middleware,
 * etc...
 *
 * @author Maxime Flament
 */

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

// Body parser to be able to read the json in th request
app.use(bodyParser.json());

// add domains you want to whitelist here
let originsWhitelist = [
  'http://localhost:4200',
  'https://localhost:4200',
];

// set up CORS
let corsOptions = {
  origin: function(origin, callback){
    let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
};
//here is the magic
app.use(cors(corsOptions));

// Load the routes
app.use(require('./site/router'));
app.use('/grocery-lists', require('./grocery-list/router'));
app.use('/grocery-list-items', require('./grocery-list-item/router'));
// Repeat the above line for additional model areas

// FINALLY, use any error handlers
app.use(require('./errors/not-found'));

// Export the app instance for unit testing via supertest
module.exports = app;
