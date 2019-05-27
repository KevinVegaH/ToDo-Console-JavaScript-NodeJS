const fs = require('fs');


let listadoPorhacer = [];

// Guarda las tareas en un archivo Json.
const guardarDB = () => {

    // Convertimos el arreglo listadoPorHacer en un JSON.
    let data = JSON.stringify(listadoPorhacer);

    // Guardamos las tareas en el archivo data.json.
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        // Automaticamente serializa el archivo y lo converte en un objeto de JavaScript
        listadoPorhacer = require('../db/data.json');

    } catch (error) {
        listadoPorhacer = [];
    }


}


// Crea una tarea por hacer.
const crear = (descripcion) => {

    cargarDB();

    // Creamos un objeto de la tarea por hacer.
    let porHacer = {
        descripcion,
        completado: false
    };

    // Ingresamos la tarea por hacer en el arreglo listadoPorhacer.
    listadoPorhacer.push(porHacer);

    guardarDB();

    return porHacer; // <-- Hacemos una retroalimentación de lo que se acaba de crear.

}

// permite tener un listado de las tareas //
const getListado = () => {

    cargarDB();

    return listadoPorhacer

}

// Permite filtrar las tareas.
const getListadoPorEstado = (estado) => {

    cargarDB();

    return listadoPorhacer.filter(tarea => tarea.completado === JSON.parse(estado));

}

// Actualiza una tarea por completar.
const actualizar = (descripcion, completado = true) => {

    cargarDB();

    // recibe el indice del elemento que coincida con la descripción.
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

// borra una tarea de la lista de tareas.
const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorhacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorhacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorhacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    getListadoPorEstado,
    actualizar,
    borrar
}