const express = require ('express');
const ControladorPets = require ('./../controladores/controladorPets');
const routerPets = express.Router ();

routerPets.get ('/pets', ControladorPets.todosLosPets);
routerPets.post ('/pets/nuevo', ControladorPets.agregarPet);
routerPets.put ('pets/actualizar', ControladorPets.actualizarPets);
routerPets.delete ('pets/adoptar/:nombre', ControladorPets.adoptarPet);

module.exports = routerPets;