'use strict';

const Persona = require('../modules/persona');

//GET todas las personas
function getPersonas(req, res){
    Persona.find({}, (err, personas)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!personas) return res.status(404).send({message: `No existen personas`});
        console.log("personas", personas); 
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

//POST insertar una persona
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

//PUT actualizar una persona
function putPersona(req, res) {
    let personaId = req.params.personaId;
    let updateData = req.body;

    Persona.findByIdAndUpdate(personaId, updateData, (err, personaActualizada)=>{
        if(err) return res.status(500).send({message: `Error al actualizar la persona ${err}`});
        res.status(200).send({persona: personaActualizada});
    });
}


//
function deletePersona(req, res) {
    let personaId = req.params.personaId;
    Persona.findById(personaId, (err, persona)=>{
        if(err) res.status(500).send({message: `Error al encontrar la persona ${err}`});

        persona.remove(err=>{
            if(err) res.status().send({message:`Error al vorrar la persona ${err}`});

            res.status(200).send({message:`La persona ha sido eliminada`});
        });
    });
}

module.exports={
    getPersona,
    getPersonas,
    postPersona,
    putPersona,
    deletePersona
}