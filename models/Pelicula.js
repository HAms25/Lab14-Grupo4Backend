const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const PeliculaSchema = new Schema({
    
    titulo: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    clasificacion: {
        type: String,
        require: true
    },
    protagonista: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    cine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cine',
        require: true
    },
    proyeccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyeccion',
        require: true
    },
    tarifa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarifa',
        require: true
    },
});

module.exports = model('Pelicula', PeliculaSchema)