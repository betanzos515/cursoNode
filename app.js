const argv = require('./config/config');
const colors = require('colors');

const { crearArchivo } = require('./helpers/crearTabla');

    crearArchivo( argv.b, argv.l, argv.h).then( nombreArchivo =>{
        console.log((nombreArchivo,'creado'));
    }).catch(error => console.log(error))

