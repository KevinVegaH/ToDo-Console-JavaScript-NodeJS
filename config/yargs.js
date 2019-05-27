// Configuramos el objeto argv.
const descripcion = {
    demand: true, // dato obligatorio de escribir.
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'

}
const completado = {
    default: true, // Valor por defecto.
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const filtrado = {
    demand: true,
    alias: 'f',
    desc: 'Permite mostrar las tareas completadas en una lista.'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', { descripcion })
    .command('filtrar', 'Muestra un listado de tareas completadas', { filtrado })
    .help()
    .argv;

module.exports = {
    argv
}