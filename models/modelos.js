const PeliculaSchema = new mongoose.Schema({
    
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

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);

const ProyeccionSchema = new mongoose.Schema({
    
    hora: {
        type: Date,
        require: true
    }
});

const Proyeccion = mongoose.model('Proyeccion', ProyeccionSchema);

const TarifaSchema = new mongoose.Schema({
    
    dia: {
        type: Date,
        require: true
    },
    precio: {
        type: Number,
        require: true
    }
});

const Tarifa = mongoose.model('Tarifa', TarifaSchema);


const CineSchema = new mongoose.Schema({
    
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

const Cine = mongoose.model('Cine', CineSchema);


async function createPelicula() {
   
    const crewCine1 = new Cine({
      nombre: 'Cine',
      calle: 'Director1',
      numero: '12',
      telefono: 'Pro1'
    });

    const crewCine2 = new Cine({
        nombre: 'Cine2',
        calle: 'Director1',
        numero: '12',
        telefono: 'Pro1'
      });
  
    await Promise.all([crewCine1.save(), crewCine2.save()]);
  
    const crewPelicula1 = new Pelicula({
        titulo: 'Pelicula1',
        director: 'Director1',
        clasificacion: 'Terror',
        protagonista: 'Pro1',
        genero: 'Pro1',
        cine: 'Pro1',
        proyeccion: proyeccion._id
    });
  
    const crewPelicula2 = new Pelicula({
        titulo: 'Pelicula2',
        director: 'Director1',
        clasificacion: 'Terror',
        protagonista: 'Pro1',
        genero: 'Pro1',
        cine: 'Cine2',
        proyeccion: proyeccion._id
    });
  
    await Promise.all([crewPelicula1.save(), crewPelicula2.save()]);
  
    const tarifa = new Tarifa({
      dia: new Date(),
      precio: '747'
    });
  
    await tarifa.save();
  
    const proyeccion = new Proyeccion({
      hora: new Date(),
      cine: cine._id,
      tarifa: tarifa._id,
      peliculas: [crewPelicula1._id, crewPelicula2._id]
    });
  
    await proyeccion.save();
  
    console.log('Proyeccion creada con éxito');
  }

  module.exports = {
    createPelicula,
    Cine,
    Pelicula,
    Tarifa,
    Proyeccion
}