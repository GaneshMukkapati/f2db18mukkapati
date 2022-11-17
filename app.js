var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true});
//Get the default connection 
var db = mongoose.connection; 
var House = require("./models/House"); 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")});  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var HouseRouter = require('./routes/House');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector')
var resourceRouter=require('./routes/resource')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/House',HouseRouter);
app.use('/gridbuild',gridbuildRouter);
app.use('/Selector',selectorRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

async function recreateDB() {

  // Delete everything

  await House.deleteMany();

  let instance1 = new

    House({

      House_Name: "Village O", Housing_Company: "Maryville Builders",

      Housing_Company_Rating: 4.7 

    });

  let instance2 = new

    House({

      House_Name: "Parkway Terrace", Housing_Company: "Bearcat Builders",

      Housing_Company_Rating: 4.5 

    });

  let instance3 = new

    House({

      House_Name: "Horizons", Housing_Company: "Northwest Builders",

      Housing_Company_Rating: 4.8

    });

  instance1.save(function (err, doc) {

    if (err) return console.error(err);

    console.log("First House saved")

  });

  instance2.save(function (err, doc) {

    if (err) return console.error(err);

    console.log("Secound House saved")

  });

  instance3.save(function (err, doc) {

    if (err) return console.error(err);

    console.log("Third House saved")

  });

}

let reseed = true;

if (reseed) { recreateDB(); }
