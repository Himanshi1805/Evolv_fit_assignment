const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./route/users_route');

const app = express("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  next();
});

app.use('/api/users', userRoutes);

mongoose
  .connect('mongodb://himu:himu123@ac-hwuw15c-shard-00-00.elmlwtk.mongodb.net:27017,ac-hwuw15c-shard-00-01.elmlwtk.mongodb.net:27017,ac-hwuw15c-shard-00-02.elmlwtk.mongodb.net:27017/?ssl=true&replicaSet=atlas-fotccw-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });


