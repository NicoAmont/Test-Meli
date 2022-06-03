'use strict'

var express = require('express');
var stats = require('../controllers/StatsCotroller')

var api = express.Router();

//
api.get('/stats', stats.stats)


module.exports = api;