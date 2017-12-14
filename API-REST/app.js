const express = require('express');
const morgan = require('morgan');
const notFound = require('./middlewares/not-found');
const authenticate = require('./middlewares/authenticate');
const routerContact = require('./routes/contact');

const app = express();

app.use(morgan('combined'));
//app.use('/api', authenticate);
app.use('/api/contacts', routerContact);
app.use('/api', notFound);

module.exports = app;
