
const analysisDiag = (dna, iterationN) =>{
    return new Promise ((resolve, reject) =>{
        for(let i = 0 ; i < iterationN ; i++){
            for(let n = 0 ; n < iterationN ; n++){
                if(dna[i][n]==dna[i+1][n+1] && dna[i][n]==dna[i+2][n+2] && dna[i][n]==dna[i+3][n+3]){
                    resolve(true); 
                    return 
                };
            };
        };
        reject(false);
        return
    })
};

const analysisHor = (dna, iterationN, dnaLength) =>{
    return new Promise((resolve, reject) =>{
        for( let i = 0 ; i < dnaLength ; i++ ){
            for(let n = 0 ; n < iterationN ; n++){
                if(dna[i][n]==dna[i][n+1] && dna[i][n+1]==dna[i][n+2] && dna[i][n+2]==dna[i][n+3] ){
                    resolve(true);
                    return 
                }
            };
        };
        reject(false)
        return 
    })
};

const analysisVer = (dna, iterationN, dnaLength) => {
    return new Promise((resolve, reject) =>{
        for(let n = 0 ; n < dnaLength ; n++){
            for(let i = 0 ; i < iterationN ; i++){
                if(dna[i][n]==dna[i+1][n] && dna[i][n]==dna[i+2][n] && dna[i][n]==dna[i+3][n]){
                    resolve(true)
                    return 
                }
            }
        };
        reject(false)
        return 
    })
};


module.exports = {
    analysisVer,
    analysisHor,
    analysisDiag
}