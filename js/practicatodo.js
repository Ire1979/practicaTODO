const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea');
const btnGuardar = document.getElementById('btnGuardar');
const selectPrioridad = document.getElementById('selectPrioridad');
const inputBuscar = document.getElementById('btnBuscar');

const form = document.querySelector('form');
const sectionTareas = document.getElementById('sectionTareas');


pintarTareas(listaTareas);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nuevaTarea = {
        idTarea: listaTareas.length,
        titulo: inputTarea.value,
        prioridad: selectTarea.value
    }

    listaTareas.push(nuevaTarea);

    pintarTareas(listaTareas);
    selectPrioridad.value = '';
});

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
            pLista = pLista.filter((task) => {
                return task.idTarea !== task.idTarea;
            });
        });

        article.append(h2Titulo, btnEliminar);

        sectionTareas.append(article);
    }
};


selectPrioridad.addEventListener('change', (event) => {
    let copiaListaTareas = [...listaTareas];

    copiaListaTareas = copiaListaTareas.filter((task) => {
        return task.prioridad === event.target.value;
    })
    if (event.target.value === '') {
        copiaListaTareas = listaTareas;
    }
    pintarTareas(copiaListaTareas);
})






