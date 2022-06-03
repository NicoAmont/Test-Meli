exports.dna_verification = (req, res, next) =>{  
    var data = req.body;
    var dna = data.dna
    if(dna.length > 0 ){

        const maxLength = dna.length;
        const valDnaSize = dna.every((n)=> n.length == maxLength);
        
        if(!valDnaSize){
            return  res.status(403).json({
                status: 403,
                statusText: 'Forbidden',
                message:'The size of the array and their elements most be equals.'
            });
            
        }
    }else{
        return  res.status(403).json({
            status: 403,
            statusText: 'Forbidden',
            message:'The array must have DNA collections.'
        });
    }
    next();

}

