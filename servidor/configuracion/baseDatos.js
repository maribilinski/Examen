const mongoose = require ('mongoose');

mongoose.connect ('mongodb://127.0.0.1:27017/pets_db')
    .then (() =>{
        console.log("conexion existosa");
    })
    .catch(() => {
        console.log("ocurrio un error con la base de datos")
    });