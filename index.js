const express = require('express');

const getLcm = require('./routes/get-lcm-route');

const app = express();

app.use('/', getLcm);

app.listen(8080, console.log('App Listening to port 8080'));

module.exports = app;
