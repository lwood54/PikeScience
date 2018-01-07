const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hbs = require('hbs').create({defaultLayout:'main'});

// requires routes so they can be used for the views template
const index = require('./routes/index');
const nat_sel_manipulative = require('./routes/nat_sel_manipulative');
const about = require('./routes/about');


// starts express app
const app = express();

// defines port as either the environment variable or 3000 if not defined
const port = process.env.PORT || '3000';
app.set('port', port);

// Set up mongoose connection later on
// var mongoose = require('mongoose');
// // var mongoDB = 'mongodb://lwood3499:23tiadbp34@ds235807.mlab.com:35807/local_logan_library'; // connect to an mLab sandbox db
// var mongoDB = 'mongodb://localhost:27017/pikeScienceWood'; // HOW TO CONNECT TO LOCAL DATABASE
// mongoose.connect(mongoDB, {
//   useMongoClient: true
// });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup as HBS
app.set('view engine', 'hbs');

// sets access point to use static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// connects routes to views
app.use('/', index);
app.use('/about', about);
app.use('/nat_sel_manipulative', nat_sel_manipulative);


// 404 catch-all hanlder (middleware)
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// creates server and listens
const server = http.createServer(app);
server.listen(port);
