var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mutantSchema = Schema({
    isMutant: Boolean,
    dna: {
        type: String,
        unique: true,
    }
});

module.exports =  mongoose.model('Mutant',mutantSchema);