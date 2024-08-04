const mongoose = require ('mongoose');


const CollecionPets = mongoose.Schema ({
    nombre: { type: String,
        required: [true, 'Por favor proporciona el nombre.'],
        minLength: [3, 'Por favor proporciona un nombre de 3 letras']
    },
    tipo: {type: String,
        required: [true, 'Por favor proporciona la especie.'],
        minLength: [3, 'Por favor, minimo de 3 letras.']
    },
    descripcion: {type: String,
        required: [true, 'Por favor proporciona una Descripcion.'],
        minLength: [3, 'Por favor una descripcion con un minimo de 3 letras.']
    },
    caract: {type: String}
},
{timestamps: true});

const Pets = mongoose.model('pets', CollecionPets);

module.exports = Pets;