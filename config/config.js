const { argv } = require('yargs');

/* Empezamos a trabajar con yargs */
const yargs = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true
    }).option('l',{    
        alias:'listar',
        type:'boolean',
        demandOption:true,
        default: false
    }).option('h',{
        alias:'hasta',
        type:'number',
        default:10
    }).check(( argv, options )=>{
        if( isNaN(argv.b)){
            throw 'El dato enviado no es un numero';
        }
        return true;
    })
    .argv;
module.exports = argv;