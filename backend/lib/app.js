const express = require('express');
const app = express();
const errorHandler = require('./utils/error-handler');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());

const chapters = require('./routes/chapters');
const cities = require('./routes/cities');
const entries = require('./routes/entries');
const locations = require('./routes/locations');
const notes = require('./routes/notes');
const npcs = require('./routes/npcs');
const participants = require('./routes/participants');
const regions = require('./routes/regions');
const stories = require('./routes/stories');
const sublocations=require('./routes/sublocations');

app.use('/api/chapters', chapters);
app.use('/api/cities', cities);
app.use('/api/entries', entries);
app.use('/api/locations', locations);
app.use('/api/notes', notes);
app.use('/api/locations', npcs);
app.use('/api/participants', participants);
app.use('/api/regions', regions);
app.use('/api/stories', stories);
app.use('/api/sublocations', sublocations);

app.use((req, res) => {
  res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;