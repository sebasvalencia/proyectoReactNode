'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) =>{
    if(err){
        return console.log(`Error al conectar a la BD ${err}`);
    }else{
        console.log(`Conexió a la BD establecida...`);
        app.listen(config.port, ()=>{
            console.log(`API REST corriendo en http:localhost:${config.port}`);
        });
    }
});
