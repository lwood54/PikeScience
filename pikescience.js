const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

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
// set up home page route
const index = require('./routes/index');
app.use('/', index);

// set up about page route
const about = require('./routes/about');
app.use('/about', about);

// set up routes for each digital manipulative

// UNIT 4
  
  // 4.1
const digitalManipulative4_1_Sec_1 = require('./routes/digitalManipulative4_1_Sec_1');
app.use('/digitalManipulative4_1_Sec_1', digitalManipulative4_1_Sec_1);
const digitalManipulative4_1_Sec_2 = require('./routes/digitalManipulative4_1_Sec_2');
app.use('/digitalManipulative4_1_Sec_2', digitalManipulative4_1_Sec_2);
  
  // 4.3
const digitalManipulative4_3_Sec_1 = require('./routes/digitalManipulative4_3_Sec_1');
app.use('/digitalManipulative4_3_Sec_1', digitalManipulative4_3_Sec_1);
const digitalManipulative4_3_Sec_2 = require('./routes/digitalManipulative4_3_Sec_2');
app.use('/digitalManipulative4_3_Sec_2', digitalManipulative4_3_Sec_2);







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
