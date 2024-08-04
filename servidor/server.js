const express = require('express');
const app = express();
const cors = require ('cors');
const RouterPets = require('./rutas/routerPets');

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/pets', RouterPets);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});
