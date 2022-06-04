

const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 4201;

var mutant_route = require('./routes/MutantRoute');
var stats_route = require('./routes/StatsRoute');

mongoose
    .connect(process.env.MONGO_URI,{useUnifiedTopology: true, useNewUrlParser: true}, (err, res) => {
        if (err) {
            console.log(err)
        }else{
            console.log('📄 Connected to MongoDB Atlas');
            app.listen(port, function(){
                console.log('👌 Server running at port: ' + port);
                });
        }   
    })


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit:'50mb', extended: true}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});


app.use('/api', mutant_route);
app.use('/api', stats_route);


//app.use('/api', mutant_route);

module.exports = app;