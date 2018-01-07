const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

// requires routes so they can be used for the views template
const index = require('./routes/index');
const nat_sel_manipulative = require('./routes/nat_sel_manipulative');
const about = require('./routes/about');

// starts express app
const app = express();

// defines port as either the environment variable or 3000 if not defined
const port = process.env.PORT || '3000';
app.set('port', port);

// view engine setup as HBS
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// sets access point to use static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

///////////// ROUTES //////////////
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/nat_sel_manipulative', (req, res) => {
  res.render('nat_sel_manipulative', {
    pageTitle: 'Digital Manipulative 4.1',
    otherVar: 'some other stuff'
  });
});







//////// CATCHING ERRORS /////////////
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


//////////////// INITIATING SERVER //////////////
// creates server and listens
const server = http.createServer(app);
server.listen(port);
