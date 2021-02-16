const express = require('express');
const app =  express();

const userController = require('./controller/userController');

app.use('/user', userController);

module.exports = app;