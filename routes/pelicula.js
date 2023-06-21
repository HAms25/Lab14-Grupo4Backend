//Rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/peliculaController');
const pdfController = require('../controllers/pdfController');

//api/productos
router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.obtenerPelicula);
router.put('/:id', peliculaController.actualizarPelicula);
router.get('/:id', peliculaController.verPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);
router.get('/pdf', pdfController.generarPDf);

module.exports = router;