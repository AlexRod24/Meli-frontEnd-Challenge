var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

// Router de vistas
var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');
var itemsDetailRouter = require('./routes/itemDetail');

// setup de express
var app = express();

// setup general
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rutas
app.use('/', indexRouter);
app.use('/api/items?:query', itemsRouter);
app.use('/api/items', itemsDetailRouter);


// error handler
app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
