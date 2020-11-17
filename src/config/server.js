require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const User = require('../models/Users'); // loading model before route

const userRoutes = require('../routes/usersRoutes');

const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!...'))
    .catch(err => console.log(err + '\n \n Não foi possível conectar com o db :c!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

module.exports = app;