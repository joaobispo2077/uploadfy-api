const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config/config');

const app = express();

const routes = require('./routes');

mongoose.connect(config.mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('connected at uploadfy database'))
    .catch((err) => console.log('error to connect to database', err));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));


app.use(routes);

app.listen(3333);