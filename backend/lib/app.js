const express = require('express');
const app = express();
const errorHandler = require('./utils/error-handler');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());

const entries = require('./routes/entries');
const locations = require('./routes/locations');
const notes = require('./routes/notes');
const participants = require('./routes/participants');

app.use('/api/locations', locations);
app.use('/api/entries', entries);
app.use('/api/notes', notes);
app.use('/api/participants', participants);

app.use((req, res) => {
  res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;