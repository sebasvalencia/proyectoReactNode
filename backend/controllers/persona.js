'use strict';

const Persona = require('../modules/persona');

//GET todas las personas
function getPersonas(req, res){
    Persona.find({}, (err, personas)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!personas) return res.status(404).send({message: `No existen personas`});
        res.status(200).send({personas: personas});
    });
}

//GET una persona en específico


