const inputTarea = document.getElementById('inputTarea');
const selectPrioridad = document.getElementById('selectPrioridad');
const btnGuardar = document.getElementById('btnGuardar');
const filtroPrioridad = document.getElementById('filtroPrioridad');
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

        const h3Titulo = document.createElement('h3');
        h3Titulo.innerText = tarea.titulo;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn');
        btnEliminar.innerHTML = '<i class="bi bi-trash3-fill"></i>';
        btnEliminar.addEventListener('click', (event) => {
            event.target.parentNode.parentNode.remove();
            pLista = pLista.filter(task => task.idTarea !== task.idTarea);

            borrarPosicion = listaTareas.findIndex(task => tarea.idTarea === task.idTarea);

            listaTareas.splice(borrarPosicion, 1);

            const strTareas = JSON.stringify(listaTareas);
            localStorage.setItem('arrTareas', strTareas);
        });

        article.append(h3Titulo, btnEliminar);
        sectionTareas.append(article);
    }
};

function crearTarea() {
    const nuevaTarea = {
        idTarea: idNuevaTarea,
        titulo: inputTarea.value,
        prioridad: selectPrioridad.value
    }

    listaTareas.push(nuevaTarea);

    const strTareas = JSON.stringify(listaTareas);
    localStorage.setItem('arrTareas', strTareas);


    pintarTareas(listaTareas);
    filtroPrioridad.value = '';
    inputBuscar.value = '';
    idNuevaTarea++;
}

btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputTarea.value === '' || selectPrioridad.value === '') {
        alert('Debes completar todos los campos');
    } else {
        crearTarea();
    }
});

filtroPrioridad.addEventListener('change', (event) => {
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
    filtroPrioridad.value = '';
});

pintarTareas(listaTareas);