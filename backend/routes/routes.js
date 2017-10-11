'use strict';

const express = require('express');
const personasCtrl = require('../controllers/persona');
const api = express.Router();

api.get('/persona', personasCtrl.getPersonas);
api.get('/persona/:personaId', personasCtrl.getPersona);
api.post('/persona', personasCtrl.postPersona);
api.put('/persona/:personaId', personasCtrl.putPersona);
api.delete('persona/:personaId', personasCtrl.deletePersona);


module.exports = api;