const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea');
const btnGuardar = document.getElementById('btnGuardar');
const selectPrioridad = document.getElementById('selectPrioridad');
const inputBuscar = document.getElementById('btnBuscar');

const form = document.querySelector('form');
const sectionTareas = document.getElementById('sectionTareas');

pintarTareas();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nuevaTarea = {
        idTarea: listaTareas.length,
        titulo: inputTarea.value,
        prioridad: selectTarea.value
    }

    listaTareas.push(nuevaTarea);
    console.log(listaTareas);
    pintarTareas();
});



function pintarTareas() {
    sectionTareas.innerHTML = '';
    for (let tarea of listaTareas) {
        const article = document.createElement('article');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerText = tarea.titulo;

        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'Eliminar';
        /* btnEliminar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            listaTareas = listaTareas.filter((cli) => {
                return cli.email !== cliente.email; */

        article.append(h2Titulo, btnEliminar);

        sectionTareas.append(article);
    }
}


