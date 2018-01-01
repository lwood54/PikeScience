const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const nat_sel_manipulative = require('./routes/nat_sel_manipulative');

const app = express();

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// sets access point to use static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// connects routes to display
app.use('/', index);
app.use('/nat_sel_manipulative', nat_sel_manipulative);

// creates server and listens
const server = http.createServer(app);
server.listen(port);
