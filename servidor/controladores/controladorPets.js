const Pets = require ('./../modelos/modeloPets');

module.exports.todosLosPets = (req, res) =>{
    Pets.find()
        .then((ListaPets) =>{
            return res.status(200).json(ListaPets);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarPet = (req, res) => {
    Pets.create(req.body)
        .then((nuevopet) => {
            return res.status(201).json(nuevopet);
        })
        .catch((error) => {
            console.log(error.message);
            res.statusMessage = error.message;
            return res.status(400).json(error.message);
        });
};

module.exports.actualizarPets = (req, res) => {
    const camposParaActualizar = {};
    const {nombre, tipo, descripcion, caract} = req.body;
    
    if(nombre){
        camposParaActualizar.nombre = nombre;
    }

    if(tipo){
        camposParaActualizar.tipo = tipo;
    }

    if(descripcion){
        camposParaActualizar.descripcion= descripcion;
    }

    if(caract){
        camposParaActualizar.caract = caract;
    }
    Pets.findOneAndUpdate({nombre: req.params.nombre}, camposParaActualizar, {new: true})
        .then((petActualizado) => {
            return res.status(200).json(petActualizado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.adoptarPet = (req, res) => {
    Pets.deleteOne ({nombre: req.params.nombre})
        .then((petAdoptado) => {
            console.log (petAdoptado);
            return res.status(204).end();
        })
        .catch ((error) => {
            return res.status(400).json(error);
        });
};