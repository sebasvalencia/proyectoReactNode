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
function getPersona(req, res){
    Persona.findById(req.params.personaId, (err, persona)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!persona) return res.status(404).send({message: `No existe la persona`});
        res.status(200).send({persona:persona});
    });
}

//POST una persona
function postPersona(req, res){
    let persona = Persona();
    let {nombre, apellido, edad} = req.body;
    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.edad = edad;
    persona.save((err, personaAlmacenada)=>{
        if(err){
            res.status(500).send({message:`Error al guardar en la BD ${err}`});
        }else{
            res.status(200).send({persona: personaAlmacenada});
        }
    });
}

