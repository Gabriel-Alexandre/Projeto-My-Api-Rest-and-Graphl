var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Knex = require("knex");
const { Model } = require("objection");
const knexConfig = require("./knexfile");
var cors = require('cors')

const { typeDefs, resolvers } = require("./graphql");
const { ApolloServer} = require("apollo-server");

var routes = require('./routes/sistem');

var app = express();

const knex = Knex(knexConfig);
Model.knex(knex);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

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

const apollo =  new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
  }
});


apollo.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

module.exports = app;
