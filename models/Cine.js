const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const CineSchema = new Schema({
    
    nombre: {
        type: String,
        require: true
    },
    calle: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    telefono: {
        type: String,
        require: true
    }
});

module.exports = model('Cine', CineSchema)