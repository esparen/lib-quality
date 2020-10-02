'use strict';

const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');

const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));


module.exports = app;