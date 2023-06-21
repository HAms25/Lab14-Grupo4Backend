const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const ProyeccionSchema = new Schema({
    
    hora: {
        type: Date,
        require: true
    }
});

module.exports = model('Proyeccion', ProyeccionSchema)