var {analysisHor, analysisVer, analysisDiag} = require('./analysis/analysis');

async function isMutantDna(dna) {

    const dnaLength = dna.length;
    const iterationN = dna[0].length-3;
    const dnaInv = [];
    dna.map(n=>{
        dnaInv.push(n.split('').reverse().join(''));
    });
    
    const verificationPromises = [
        analysisDiag(dna, iterationN),
        analysisDiag(dnaInv, iterationN),
        analysisHor(dna, iterationN, dnaLength ),
        analysisVer(dna, iterationN, dnaLength ),
    ];

    let verification = Promise.any(verificationPromises).then((result) => {
        return true
    }).catch((err) => {
        console.log(err);
        return false
    })
    
    return verification
    
}


module.exports = {
    isMutantDna
};