const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea');
const btnGuardar = document.getElementById('btnGuardar');
const selectPrioridad = document.getElementById('selectPrioridad');
const inputBuscar = document.getElementById('inputBuscar');

const form = document.querySelector('form');
const sectionTareas = document.getElementById('sectionTareas');

let idNuevaTarea = listaTareas.length;

let tareas = new Array();
if (localStorage.getItem('arrTareas')) {
    tareas = JSON.parse(localStorage.getItem('arrTareas'));
}

function pintarTareas(pLista) {
    sectionTareas.innerHTML = '';

    for (let tarea of pLista) {
        const article = document.createElement('article');
        article.classList.add(tarea.prioridad);

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerText = tarea.titulo;

        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'Eliminar';
        btnEliminar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            pLista = pLista.filter(task => task.idTarea !== task.idTarea);

            borrarPosicion = listaTareas.findIndex(task => tarea.idTarea === task.idTarea);

            listaTareas.splice(borrarPosicion, 1);

            const strTareas = JSON.stringify(listaTareas);
            localStorage.setItem('arrTareas', strTareas);
        });

        article.append(h2Titulo, btnEliminar);
        sectionTareas.append(article);
    }
};
function crearTarea() {
    const nuevaTarea = {
        idTarea: idNuevaTarea,
        titulo: inputTarea.value,
        prioridad: selectTarea.value
    }

    listaTareas.push(nuevaTarea);

    const strTareas = JSON.stringify(listaTareas);
    localStorage.setItem('arrTareas', strTareas);

    pintarTareas(listaTareas);
    selectPrioridad.value = '';
    inputBuscar.value = '';
    idNuevaTarea++;
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputTarea.value === '' || selectTarea.value === '') {
        alert('Debes completar todos los campos');
    } else {
        crearTarea();
    }


});

selectPrioridad.addEventListener('change', (event) => {
    let listaFiltrada = [...listaTareas];

    listaFiltrada = listaFiltrada.filter(task => task.prioridad === event.target.value);
    if (event.target.value === '') {
        listaFiltrada = listaTareas;
    }
    pintarTareas(listaFiltrada);
    inputBuscar.value = '';
});

inputBuscar.addEventListener('input', (event) => {
    let listaFiltrada = [...listaTareas];
    listaFiltrada = listaFiltrada.filter(task => task.titulo.toLowerCase().includes(event.target.value.toLowerCase()));
    pintarTareas(listaFiltrada);
    selectPrioridad.value = '';
});

pintarTareas(listaTareas);













