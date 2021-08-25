const fs = require('fs');

const archivoTareas = {

    archivo: 'tareas.json',

    leerJSON: function () {

        const arregloEnJSON = fs.readFileSync(this.archivo, 'utf-8');

        return JSON.parse(arregloEnJSON);

    },
    escribirJSON: function (nuevaTareas) {
        // Leer las tareas actuales
        const tareas = fs.readFileSync(this.archivo, 'utf-8');
        // Convertir en array
        const arrayTareas = JSON.parse(tareas);
        // Agregar nueva tarea
        arrayTareas.push(nuevaTarea);
        // Convertir a string
        const datosAGuardar = JSON.stringify(arrayTareas);
        fs.writeFileSync(this.archivo, datosAGuardar, 'utf-8')
    },
    agregarTarea: function (nuevaTarea) {
        // Leer las tareas actuales
        const tareas = fs.readFileSync(this.archivo, 'utf-8');
        // Convertir en array
        const arrayTareas = JSON.parse(tareas);
        // Agregar nueva tarea
        arrayTareas.push(nuevaTarea);
        // Convertir a string
        const datosAGuardar = JSON.stringify(arrayTareas);
        fs.writeFileSync(this.archivo, datosAGuardar, 'utf-8')
    }
}

module.exports = archivoTareas;