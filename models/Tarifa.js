const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const TarifaSchema = new Schema({
    
    dia: {
        type: Date,
        require: true
    },
    precio: {
        type: Number,
        require: true
    }
});

module.exports = model('Tarifa', TarifaSchema)