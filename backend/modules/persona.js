'use strinct';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = Schema({
    nombre:String,
    apellido: String,
    edad:Number
});

module.exports = mongoose.model('Persona', PersonaSchema);