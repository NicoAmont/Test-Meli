'use strict'

var express = require('express');
var isMutant = require('../controllers/MutantCotroller')
var {dna_verification} = require('../middlewares/dnaVerification')

var api = express.Router();

//
api.post('/mutant',dna_verification, isMutant.isMutant)


module.exports = api;