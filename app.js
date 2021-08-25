let funcionesDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion) {

    case 'listar':

        console.log('Listado de tareas');

        let tareas = funcionesDeTareas.leerJSON();

        tareas.forEach((tarea,index) => console.log(index + ' ' + tarea.titulo + ' - ' + tarea.estado));

        break;

    case 'agregar':
        let tituloNuevo = process.argv[3];
        let nuevaTarea = { titulo: tituloNuevo, estado: 'pendiente' };
        console.log('Agregando tarea: ', nuevaTarea.titulo);
        funcionesDeTareas.agregarTarea(nuevaTarea);
        break;
    
    case 'filtrar':
        let leertareas = funcionesDeTareas.leerJSON();
        tareasFiltradas = leertareas.filter((tareasActual) => tareasActual.estado == process.argv[3]);
        tareasFiltradas.forEach((tarea,index) => console.log(index + ' ' + tarea.titulo + ' - ' + tarea.estado));
        break;
    case undefined:

        console.log('Atención - Tenés que pasarme una acción');

        break;

    default:

        console.log('No entiendo qué querés hacer');

        break;
}
