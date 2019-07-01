const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./utils/error-handler');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname +'/../src')));
app.use(express.json());

app.use((req, res) => {
    res.sendFile('index.js', { root: path.join(__dirname +'/../src') } );
});
  
app.use(errorHandler());

module.exports = app;