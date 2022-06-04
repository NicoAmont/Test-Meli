'use strict'
const express = require('express');
const Human = require('../dal/models/mutant')
var {isMutantDna} = require('../utils/mutantVal/valiMutan')



const isMutant = async function(req, res) {

    var data = req.body;
    var dna = data.dna;
    let dna_db = [];

    let verification = await isMutantDna(dna);
    dna_db = await Human.find({dna:dna.join('')});
    
    
    if(dna_db.length == 0) {
        var humanDna = { dna: dna.join('') , isMutant: verification }
        var reg = await Human.create(humanDna);
        
        if(!verification){
            res.status(403).send({status: 403, statusText: 'Forbidden'})
        } else{      
            res.status(200).send({status: 200, statusText: 'OK'})
        }
        
    }else{
        
        res.status(200).send({message:'DNA is already in the DB',data:undefined});
    }
   

   

    
    
}

module.exports = {
    isMutant
}