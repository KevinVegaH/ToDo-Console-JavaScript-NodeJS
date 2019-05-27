//const argv = require('yargs').argv;

var Colors = require('colors');

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0]; // --> recibe el comando del argv

switch (comando) {

    case 'crear':

        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {

            console.log('====== Por Hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);

        }

        break;

    case 'filtrar':

        let filtrado = porHacer.getListadoPorEstado(argv.filtrado);

        for (let tarea of filtrado) {

            console.log('======== TAREA ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es renocido.');
}