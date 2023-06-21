const Pelicula = require("../models/Pelicula");

exports.crearPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);

        await pelicula.save();
        res.send(pelicula);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPelicula = async (req, res) => {

    try {

        const peliculas = await Pelicula.find();
        res.json(peliculas);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarPelicula = async (req, res) => {

    try {

        const {_id, titulo, director, clasificacion, protagonista, genero } = new Producto(req.body);
        let pelis = await Pelicula.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        pelicula._id = _id;
        pelicula.titulo = titulo;
        pelicula.director = director;
        pelicula.clasificacion = clasificacion;
        pelicula.protagonista = protagonista;
        pelicula.genero = genero;


        console.log(pelis)

        pelis = await Pelicula.findOneAndUpdate({ _id: req.params.id }, pelis, { new: true } );
        res.json(pelis);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPelicula = async (req, res) => {

    try {

        let pelis = await Pelicula.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(pelis);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPelicula = async (req, res) => {

    try {

        let pelis = await Pelicula.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        pelis = await Pelicula.findOneAndRemove(req.params.id);

        res.json({ msg: 'La pelicula: ' + pelis.pelicula + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

