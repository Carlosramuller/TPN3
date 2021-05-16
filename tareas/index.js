const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
module.exports = {

    agregarTarea: function (titulo, estado = 'pendiente') {
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.guardarJson(tareas);
        this.listarTareas();
    },
    listarTareas: function () {
        tareas.forEach(tarea => {
            console.log(tarea);
        });
    },
    filtrarTareas: function (filtro) {
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas)
    },
    deshacer: function () {
        tareas.pop()
        this.guardarJson(tareas)
        this.listarTareas()
    },
    guardarJson: function (tareas) {
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas), 'utf-8')
    }
}