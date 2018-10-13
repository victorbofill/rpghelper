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
const npcs = require('./routes/npcs');
const participants = require('./routes/participants');
const stories = require('./routes/stories');

app.use('/api/entries', entries);
app.use('/api/locations', locations);
app.use('/api/locations', npcs);
app.use('/api/notes', notes);
app.use('/api/participants', participants);
app.use('/api/stories', stories);

app.use((req, res) => {
  res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;