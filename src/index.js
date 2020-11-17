require('dotenv/config');

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const routes = require('./routes');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected at uploadfy database'))
  .catch((err) => console.log('error to connect to uploadfy database', err));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(routes);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running at port: ${process.env.SERVER_PORT}`);
});