'use strict'
const Human = require('../dal/models/mutant')

const stats = async function(req, res) {

    let dnaMutant_db = [];
    let dnaHuman_db = [];
    
    dnaMutant_db = await Human.find({isMutant:true});
    dnaHuman_db = await Human.find({isMutant:false});


    let totalDna = dnaMutant_db.length + dnaHuman_db.length
    let ratio = dnaMutant_db.length / (totalDna) ;
    
    var stats =  {'count_mutant_dna': dnaMutant_db.length , 'count_human_dna' : dnaHuman_db.length , 'ratio' : ratio.toFixed(2) }
    
    res.status(200).send(stats); 
    
    
}

module.exports = {
    stats
}