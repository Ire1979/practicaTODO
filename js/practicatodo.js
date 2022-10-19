const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea');
const btnGuardar = document.getElementById('btnGuardar');
const selectPrioridad = document.getElementById('selectPrioridad');
const inputBuscar = document.getElementById('btnBuscar');

const sectionTareas = document.getElementById('sectionTareas')



function pintarTareas(listaTareas) {
    for (let tarea of listaTareas) {
        const article = document.createElement('article');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerText = tarea.titulo;

        /* const pPrioridad = document.createElement('p');
        pPrioridad.innerText = tarea.prioridad; */

        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'Eliminar';
        /* btnEliminar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            listaTareas = listaTareas.filter((cli) => {
                return cli.email !== cliente.email; */

        article.append(h2Titulo, btnEliminar);

        sectionTareas.append(article);

        console.log(listaTareas);
    }

}

pintarTareas(listaTareas);
